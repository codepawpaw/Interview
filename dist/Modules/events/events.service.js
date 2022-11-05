"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const event_entity_1 = require("./entities/event.entity");
class EventsService {
    async getWarmupEvents() {
        return await event_entity_1.default.findAll();
    }
    async getEventsWithWorkshops() {
        throw new Error('TODO task 1');
    }
    async getFutureEventWithWorkshops() {
        throw new Error('TODO task 2');
    }
}
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map