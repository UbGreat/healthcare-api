/* eslint-disable prettier/prettier */
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from 'mongodb';

export enum Role {
  PATIENT = 'PATIENT',
  CARE_GIVER = 'CARE_GIVER',
  NURSE = 'NURSE',
  LAB_SCIENTIST = 'LAB_SCIENTIST',
  PHARMACIST = 'PHARMACIST',
  SUPPLIER = 'SUPPLIER',
  GUARDIAN = 'GUARDIAN',
  DOCTOR = 'DOCTOR',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}



@Entity()
export class User {

    @ObjectIdColumn()
    _id: ObjectId;
    
    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column({ enum: Role })
    role: Role;

}