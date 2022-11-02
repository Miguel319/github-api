import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { LoggerModule } from "./logger.module";

const providers = [
  {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  },
];

@Module({
  imports: [
    LoggerModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 360,
    }),
  ],
  providers,
})
export class RootModule {}
