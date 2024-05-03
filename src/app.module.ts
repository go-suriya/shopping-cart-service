import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { ModulesModule } from "./modules/modules.module";
import { RepositoriesModule } from './repositories/repositories.module';
import { UsecasesModule } from './usecases/usecases.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: `src/config/env/${process.env.NODE_ENV || "dev"}.env`,
    }),
    DatabaseModule,
    ModulesModule,
    RepositoriesModule,
    UsecasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
