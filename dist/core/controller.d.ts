declare abstract class Controller {
    abstract intializeRoutes(): any;
    router: import("express-serve-static-core").Router;
}
export default Controller;
