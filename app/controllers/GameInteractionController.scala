package controllers

import de.htwg.se.Chess.controller.controllerComponent.Controller
import de.htwg.se.Chess.model.Board
import de.htwg.se.Chess.model.BoardInterface
import play.api.mvc.*
import javax.inject.*
import scala.collection.immutable.VectorMap
import play.api.libs.json._

@Singleton
class GameInteractionController @Inject()(override val controllerComponents: ControllerComponents) extends AbstractController(controllerComponents) {

  var controller: Controller = Controller(field = Board(), fileIO = null)
  val x_labels: Array[String] = Array("A", "B", "C", "D", "E", "F", "G", "H")
  val y_labels: Array[String] = Array("1", "2", "3", "4", "5", "6", "7", "8")
  def chessBoardAsVectorMap: VectorMap[String, String] = controller.field.board
  def chessBoardFields: Array[Array[String]] = controller.field.board.values.grouped(8).toArray.map(row => row.toArray)

  def chess: Action[AnyContent] = Action {
    Ok(views.html.chess(chessBoardFields, x_labels, y_labels))
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
}
