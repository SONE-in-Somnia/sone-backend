import { Module } from '@nestjs/common';
import { PointService } from './point.service';
import { SharedModelModule } from 'src/shared/shared-model.module';
import { PointController } from './point.controller';

@Module({
    imports: [
        SharedModelModule
    ],
    providers: [PointService],
    exports: [PointService],
    controllers: [PointController]
})
export class PointModule { } 