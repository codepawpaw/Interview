"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const events_controller_1 = require("./Modules/events/events.controller");
const menuItems_controller_1 = require("./Modules/menu-items/menuItems.controller");
class Server {
    static app;
    static getApp() {
        return this.app;
    }
    static async close() {
        await this.getApp().getDataSource().close().then(async () => {
            await this.app.close();
        });
    }
    static async init() {
        if (!this.app) {
            this.app = new app_1.default((app) => {
                return [
                    new events_controller_1.default(app),
                    new menuItems_controller_1.MenuItemsController(app),
                ];
            }, 3000);
        }
        await this.app.init();
        return this.app;
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map