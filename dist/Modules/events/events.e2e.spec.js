"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const request = require("supertest");
const server_1 = require("../../server");
describe('events', () => {
    beforeAll(() => {
        return server_1.default.init();
    });
    it(`GET /events/warmupevents`, async () => {
        const response = await request(server_1.default.getApp().app)
            .get('/events/warmupevents')
            .expect(200);
        const result = response.body;
        const date1 = (0, date_fns_1.format)((0, date_fns_1.subYears)(new Date(), 1), 'yyyy');
        const date2 = (0, date_fns_1.format)((0, date_fns_1.addYears)(new Date(), 1), 'yyyy');
        expect(result.length).toBe(3);
        expect(result[0].name).toBe('Laravel convention ' + date1);
        expect(result[1].name).toBe('Laravel convention ' + date2);
        expect(result[2].name).toBe('React convention ' + date2);
    });
    it('GET /events/events', async () => {
        const date1 = (0, date_fns_1.format)((0, date_fns_1.subYears)(new Date(), 1), 'yyyy');
        const date2 = (0, date_fns_1.format)((0, date_fns_1.addYears)(new Date(), 1), 'yyyy');
        const response = await request(server_1.default.getApp().app)
            .get('/events/events')
            .expect(200);
        const result = response.body;
        expect(result.length).toBe(3);
        expect(result[0].name).toBe('Laravel convention ' + date1);
        expect(result[0].workshops[0].name).toBe('Illuminate your knowledge of the laravel code base');
        expect(result[1].name).toBe('Laravel convention ' + date2);
        expect(result[1].workshops[0].name).toBe('The new Eloquent - load more with less');
        expect(result[1].workshops[1].name).toBe('AutoEx - handles exceptions 100% automatic');
        expect(result[2].name).toBe('React convention ' + date2);
        expect(result[2].workshops[0].name).toBe('#NoClass pure functional programming');
        expect(result[2].workshops[1].name).toBe('Navigating the function jungle');
    });
    it('GET /events/futureevents', async () => {
        const date2 = (0, date_fns_1.format)((0, date_fns_1.addYears)(new Date(), 1), 'yyyy');
        const response = await request(server_1.default.getApp().app)
            .get('/events/futureevents')
            .expect(200);
        const result = response.body;
        expect(result.length).toBe(2);
        expect(result[0].name).toBe('Laravel convention ' + date2);
        expect(result[0].workshops[0].name).toBe('The new Eloquent - load more with less');
        expect(result[0].workshops[1].name).toBe('AutoEx - handles exceptions 100% automatic');
        expect(result[1].name).toBe('React convention ' + date2);
        expect(result[1].workshops[0].name).toBe('#NoClass pure functional programming');
        expect(result[1].workshops[1].name).toBe('Navigating the function jungle');
    });
    afterAll(() => {
        return server_1.default.close();
    });
});
//# sourceMappingURL=events.e2e.spec.js.map