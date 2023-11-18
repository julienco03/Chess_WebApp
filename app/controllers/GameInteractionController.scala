package controllers

import de.htwg.se.Chess.controller.controllerComponent.Controller
import de.htwg.se.Chess.model.Board
import de.htwg.se.Chess.model.Board
import play.api.mvc.*
import javax.inject.*

@Singleton
class GameInteractionController @Inject()(override val controllerComponents: ControllerComponents) extends AbstractController(controllerComponents) {

  var controller: Controller = Controller(field = Board(), fileIO = null)
  def chessBoardFields: Array[Array[String]] = controller.field.board.values.grouped(8).toArray.map(row => row.toArray)

  def chess: Action[AnyContent] = Action {
    Ok(views.html.chess(chessBoardFields))
  }

  def newGame: Action[AnyContent] = Action {
    controller = Controller(field = Board(), fileIO = null)
    Redirect(routes.GameInteractionController.chess())
  }

  def undoMove: Action[AnyContent] = Action {
    controller.undo()
    Redirect(routes.GameInteractionController.chess())
  }

  def redoMove: Action[AnyContent] = Action {
    controller.redo()
    Redirect(routes.GameInteractionController.chess())
  }

  def makeMove: Action[AnyContent] = Action {
    request =>
      val queryParams = request.queryString.map { case (k,v) => k -> v.mkString }
      val old_pos = queryParams("old")
      val new_pos = queryParams("new")
      controller.domove()
      controller.move_c(old_pos, new_pos)
      Redirect(routes.GameInteractionController.chess())
  }
}
