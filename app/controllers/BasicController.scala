package controllers

import javax.inject._
import play.api.mvc._

@Singleton
class BasicController @Inject()(override val controllerComponents: ControllerComponents) extends AbstractController(controllerComponents) {

  def index: Action[AnyContent] = Action {
    Ok(views.html.index())
  }

  def rules: Action[AnyContent] = Action {
    Ok(views.html.rules())
  }
}
