/* eslint-disable prettier/prettier */
import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class User {

    @ObjectIdColumn()
    _id: ObjectId;
    
    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    role: string;

}