"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const datasource_1 = require("./conf/datasource");
const sequelize_typescript_1 = require("sequelize-typescript");
class App {
    app;
    server;
    dataSource;
    port;
    controllers;
    controllersCallback;
    get getApp() {
        return this.app;
    }
    get getServer() {
        return this.server;
    }
    getDataSource() {
        return this.dataSource;
    }
    constructor(callback, port) {
        this.app = express();
        this.port = port;
        this.controllersCallback = callback;
    }
    async init() {
        await this.initializeControllers();
    }
    async initializeControllers() {
        this.dataSource = new sequelize_typescript_1.Sequelize(datasource_1.dataSourceOptions);
        await this.dataSource.authenticate();
        this.controllers = this.controllersCallback(this);
        this.controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    async close() {
        if (this.server) {
            this.server.close();
        }
    }
    async listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`🚀 Server is running on port ${this.port}`);
        });
        return this.app;
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map