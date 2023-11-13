package controllers

import de.htwg.se.Chess.controller.controllerComponent.Controller
import de.htwg.se.Chess.model.Board
import de.htwg.se.Chess.model.Board
import play.api.mvc.*
import javax.inject.*

@Singleton
class GameInteractionController @Inject()(override val controllerComponents: ControllerComponents) extends AbstractController(controllerComponents) {

  var controller: Controller = Controller(field = Board(), fileIO = null)
  var playerTurn: String = "Spieler 1"
  val playerNames: Array[String] = Array()  // TODO: Implement player names
  def chessBoardAsText: String = controller.board_to_string_c()
  def chessBoardFields: Array[Array[String]] = controller.field.board.values.grouped(8).toArray.map(row => row.toArray)


  def chess: Action[AnyContent] = Action {
    Ok(views.html.chess(playerTurn, chessBoardFields))
  }

  def newGame: Action[AnyContent] = Action {
    controller = Controller(field = Board(), fileIO = null)
    playerTurn = "Spieler 1"
    Redirect("/chess")
  }

  def undoMove: Action[AnyContent] = Action {
    controller.undo()
    changePlayer()
    Redirect("/chess")
  }

  def redoMove: Action[AnyContent] = Action {
    controller.redo()
    changePlayer()
    Redirect("/chess")
  }

  def makeMove: Action[AnyContent] = Action {
    request =>
      val queryParams = request.queryString.map { case (k,v) => k -> v.mkString }
      val old_pos = queryParams("old")
      val new_pos = queryParams("new")
      controller.domove()
      controller.move_c(old_pos, new_pos)
      changePlayer()
      Redirect("/chess")
  }

  def changePlayer(): Unit = {
    if (playerTurn == "Spieler 1") playerTurn = "Spieler 2"
    else if (playerTurn == "Spieler 2") playerTurn = "Spieler 1"
  }
}
