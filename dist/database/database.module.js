"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
const env_file_path_1 = require("../constants/env-file-path");
const product_entity_1 = require("./entities/product.entity");
dotenv.config({ path: env_file_path_1.ENV_FILE_PATH });
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: process.env.POSTGRES_HOST,
                port: +process.env.POSTGRES_PORT,
                password: process.env.POSTGRES_PASSWORD,
                username: process.env.POSTGRES_USER,
                database: process.env.POSTGRES_DATABASE,
                synchronize: Boolean(process.env.POSTGRES_SYNCHRONIZE),
                autoLoadEntities: true,
                logging: false,
            }),
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.ProductEntity]),
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map