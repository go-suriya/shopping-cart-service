import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import { ENV_FILE_PATH } from "src/constants/env-file-path";
import { ProductEntity } from "./entities/product.entity";

dotenv.config({ path: ENV_FILE_PATH });

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    TypeOrmModule.forFeature([ProductEntity]),
  ],
})
export class DatabaseModule {}
