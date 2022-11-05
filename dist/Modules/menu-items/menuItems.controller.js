"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsController = void 0;
const controller_1 = require("../../core/controller");
const menu_items_service_1 = require("./menu-items.service");
class MenuItemsController extends controller_1.default {
    path = '/menu-items';
    menuItemService;
    _app;
    constructor(app) {
        super();
        this._app = app;
        this.intializeRoutes();
        this.menuItemService = new menu_items_service_1.MenuItemsService();
    }
    intializeRoutes() {
        this.router.get(this.path.concat("/menu"), this.getMenuItems.bind(this));
    }
    async getMenuItems(req, res, next) {
        return await this.menuItemService.getMenuItems()
            .then((data) => {
            console.log(data);
            res.json(data);
        })
            .catch((e) => {
            next(e);
        });
    }
}
exports.MenuItemsController = MenuItemsController;
//# sourceMappingURL=menuItems.controller.js.map