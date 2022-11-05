"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const server_1 = require("../../server");
beforeAll(() => {
    return server_1.default.init();
});
describe('MenuItemsController', () => {
    it('Menu Item Result Test', async () => {
        const response = await request(server_1.default.getApp().app)
            .get('/menu-items/menu')
            .expect(200);
        const result = response.body;
        expect(result.length).toBe(1);
        expect(result[0].children[0].name).toBe('Laracon');
        expect(result[0].children[0].children[0].url).toBe('/events/laracon/workshops/illuminate');
        expect(result[0].children[0].children[1].url).toBe('/events/laracon/workshops/eloquent');
        expect(result[0].children[1].name).toBe('Reactcon');
        expect(result[0].children[1].children[0].url).toBe('/events/reactcon/workshops/noclass');
        expect(result[0].children[1].children[1].url).toBe('/events/reactcon/workshops/jungle');
    });
});
afterAll(() => {
    return server_1.default.close();
});
//# sourceMappingURL=menu-items.e2e.spec.js.map