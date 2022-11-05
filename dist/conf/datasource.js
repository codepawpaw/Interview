"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
exports.dataSourceOptions = {
    dialect: 'sqlite',
    storage: 'database.db',
    synchronize: false,
    logging: console.log,
    define: {
        freezeTableName: true,
    },
    models: [__dirname + '/../**/entities/*.entity.{js,ts}']
};
//# sourceMappingURL=datasource.js.map