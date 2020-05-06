import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Maratona} from "./maratona/maratona";
import {MaratonaController} from "./maratona.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Maratona]),
    ],
    controllers: [
        MaratonaController
    ],
})
export class MaratonaModule {}
