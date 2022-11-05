/// <reference types="node" />
import * as express from 'express';
import Controller from "./core/controller";
import { Application } from "express";
import http from "http";
import { Sequelize } from "sequelize-typescript";
declare class App {
    readonly app: express.Application;
    private server;
    private dataSource;
    port: number;
    private controllers;
    private readonly controllersCallback;
    get getApp(): Application;
    get getServer(): http.Server;
    getDataSource(): Sequelize;
    constructor(callback: (app: App) => Controller[], port: number);
    init(): Promise<void>;
    private initializeControllers;
    close(): Promise<void>;
    listen(): Promise<express.Application>;
}
export default App;
