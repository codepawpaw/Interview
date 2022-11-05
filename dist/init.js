"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
server_1.default.init().then(async (app) => {
    await app.listen();
});
//# sourceMappingURL=init.js.map