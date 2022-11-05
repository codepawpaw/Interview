"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let Workshop = class Workshop extends sequelize_typescript_1.Model {
    start;
    end;
    eventId;
    name;
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Workshop.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Workshop.prototype, "start", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Workshop.prototype, "end", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: 'integer',
        defaultValue: null,
    }),
    __metadata("design:type", Number)
], Workshop.prototype, "eventId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Workshop.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Workshop.prototype, "createdAt", void 0);
Workshop = __decorate([
    (0, sequelize_typescript_1.Table)({
        updatedAt: false,
    })
], Workshop);
exports.default = Workshop;
//# sourceMappingURL=workshop.entity.js.map