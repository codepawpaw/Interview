"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../../core/controller");
const events_service_1 = require("./events.service");
class EventController extends controller_1.default {
    path = '/events';
    eventsService;
    _app;
    constructor(app) {
        super();
        this._app = app;
        this.intializeRoutes();
        this.eventsService = new events_service_1.EventsService();
    }
    intializeRoutes() {
        this.router.get(this.path.concat('/warmupevents'), this.getWarmupEvents.bind(this));
        this.router.get(this.path.concat('/events'), this.getEventsWithWorkshops.bind(this));
        this.router.get(this.path.concat('/futureevents'), this.getFutureEventWithWorkshops.bind(this));
    }
    async getWarmupEvents(req, res, next) {
        return await this.eventsService.getWarmupEvents()
            .then((data) => {
            res.json(data);
        })
            .catch((e) => {
            next(e);
        });
    }
    async getEventsWithWorkshops(req, res, next) {
        return await this.eventsService.getEventsWithWorkshops()
            .then((data) => {
            res.json(data);
        })
            .catch((e) => {
            next(e);
        });
    }
    async getFutureEventWithWorkshops(req, res, next) {
        return await this.eventsService.getFutureEventWithWorkshops()
            .then((data) => {
            res.json(data);
        })
            .catch((e) => {
            next(e);
        });
    }
}
exports.default = EventController;
//# sourceMappingURL=events.controller.js.map