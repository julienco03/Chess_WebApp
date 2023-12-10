package controllers

import de.htwg.se.Chess.controller.CellChanged
import de.htwg.se.Chess.controller.controllerComponent.Controller
import de.htwg.se.Chess.model.Board
import de.htwg.se.Chess.model.BoardInterface

import akka.actor.ActorSystem
import akka.stream.Materializer
import akka.actor._
import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.streams.ActorFlow
import scala.collection.immutable.VectorMap
import scala.swing.event.Event
import scala.swing.Reactor

@Singleton
class ChessController @Inject()(cc: ControllerComponents) (implicit system: ActorSystem, mat: Materializer) extends AbstractController(cc) {

  var controller: Controller = Controller(field = Board(), fileIO = null)
  def chessBoardFields: Array[Array[String]] = controller.field.board.values.grouped(8).toArray.map(row => row.toArray)

  def index: Action[AnyContent] = Action {
    Ok(views.html.index())
  }

  def rules: Action[AnyContent] = Action {
    Ok(views.html.rules())
  }

  def chess: Action[AnyContent] = Action {
    Ok(views.html.chess())
  }

  def newGame: Action[AnyContent] = Action {
    controller = Controller(field = Board(), fileIO = null)
    val updatedBoardJson = vectorMapToJson(controller.field)
    Ok(updatedBoardJson).as("application/json")
  }

  def undoMove: Action[AnyContent] = Action {
    controller.undo()
    val updatedBoardJson = vectorMapToJson(controller.field)
    Ok(updatedBoardJson).as("application/json")
  }

  def redoMove: Action[AnyContent] = Action {
    controller.redo()
    val updatedBoardJson = vectorMapToJson(controller.field)
    Ok(updatedBoardJson).as("application/json")
  }

  def makeMove: Action[AnyContent] = Action {
    implicit request =>
      val queryParams = request.queryString.map { case (k,v) => k -> v.mkString }
      val old_pos = queryParams("old")
      val new_pos = queryParams("new")

      if (controller.last_turn() == controller.get_player_c(old_pos))
        controller.domove()
        controller.move_c(old_pos, new_pos)

      val updatedBoardJson = vectorMapToJson(controller.field)
      Ok(updatedBoardJson).as("application/json")
  }

  def vectorMapToJson(board_object: BoardInterface): String =
    val tmp:VectorMap[String, String] = board_object.board
    var jsonData = Json.obj(
      "field" -> Json.obj(
        "field_entry" -> Json.toJson(
          for ((pos, figure) <- tmp) yield {
            Json.obj(
            "pos" -> pos,
            "figure" -> figure
            )
          }
        )
      )
    )
    Json.stringify(jsonData)

  def socket: WebSocket = WebSocket.accept[String, String] { request =>
    ActorFlow.actorRef { out =>
      println("Connect received")
      ChessWebSocketActorFactory.create(out)
    }
  }

  object ChessWebSocketActorFactory {
    def create(out: ActorRef): Props = {
      Props(new ChessWebSocketActor(out))
    }
  }

  class ChessWebSocketActor(out: ActorRef) extends Actor with Reactor {
    listenTo(controller)

    def receive: Receive = {
      case msg: String =>
        out ! vectorMapToJson(controller.field)
        println("Sent Json to Client" + msg)
    }

    reactions += {
      case event: CellChanged => sendJsonToClient()
    }

    def sendJsonToClient(): Unit = {
      println("Received event from Controller")
      out ! vectorMapToJson(controller.field)
    }
  }
}
