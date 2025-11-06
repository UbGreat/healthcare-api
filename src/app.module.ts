/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EhrsModule } from './ehrs/ehrs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationsModule } from './organizations/organizations.module';
import { AlertsModule } from './alerts/alerts.module';
import { IncidentsModule } from './incidents/incidents.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { DevicesModule } from './devices/devices.module';
import { PatientsModule } from './patients/patients.module';
import { TelemetriesModule } from './telemetries/telemetries.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from 'config/app.config';


@Module({
  imports: [
  UsersModule, 
  MongooseModule.forRoot('mongodb+srv://ubohodickson_db_user:tHAGgOQB2fBxjbHK@cluster0.nwfqmug.mongodb.net/?appName=Cluster0'),
  UsersModule,
  EhrsModule,
  OrganizationsModule,
  PatientsModule,
  AlertsModule,
  IncidentsModule,
  FacilitiesModule,
  DevicesModule,
  TelemetriesModule,
  AuthModule,
  // ✅ Loads environment variables + config
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
