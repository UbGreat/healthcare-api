// /* eslint-disable prettier/prettier */
// import { ObjectId } from 'mongodb';
// import { Ehr } from "src/ehrs/entities/ehr.entity";


// export enum Role {
//   PATIENT = 'PATIENT',
//   CARE_GIVER = 'CARE_GIVER',
//   NURSE = 'NURSE',
//   LAB_SCIENTIST = 'LAB_SCIENTIST',
//   PHARMACIST = 'PHARMACIST',
//   SUPPLIER = 'SUPPLIER',
//   GUARDIAN = 'GUARDIAN',
//   DOCTOR = 'DOCTOR',
//   ADMIN = 'ADMIN',
//   SUPER_ADMIN = 'SUPER_ADMIN',
// }

// @Entity()
// export class User {

//     @ObjectIdColumn()
//     _id: ObjectId;
    
//     @Column()
//     fname: string;

//     @Column()
//     sname: string;

//     @Column()
//     oname: string;

//     @Column()
//     email: string;
    
//     @Column({ enum: Role })
//     role: Role;

//     @CreateDateColumn()
//     createdAt: Date;

//     @UpdateDateColumn()
//     updatedAt: Date;

//     // One user can have many EHRs
//   @OneToMany(() => Ehr, (ehr) => ehr.patient)
//   ehrs: Ehr[];

// }