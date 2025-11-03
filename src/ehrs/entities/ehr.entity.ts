// /* eslint-disable prettier/prettier */


// import { ObjectId } from 'mongodb';

// import { User } from 'src/users/entities/user.entity';

// export enum Gender {
//   MALE = 'MALE',
//   FEMALE = 'FEMALE',
//   OTHER = 'OTHER',
// }

// export enum BloodGroup {
//   A_POSITIVE = 'A+',
//   A_NEGATIVE = 'A-',
//   B_POSITIVE = 'B+',
//   B_NEGATIVE = 'B-',
//   AB_POSITIVE = 'AB+',
//   AB_NEGATIVE = 'AB-',
//   O_POSITIVE = 'O+',
//   O_NEGATIVE = 'O-',
// }

// @Entity('electronic_health_records')
// export class Ehr {

//   @ObjectIdColumn()
//   _id: ObjectId;

//   // Basic patient info
//   // Many EHRs belong to one user
//   @ManyToOne(() => User, (user) => user.ehrs, { eager: true })
//   patient: User;

//   @Column()
//   fullName: string;

//   @Column({ enum: Gender })
//   gender: Gender;

//   @Column()
//   dateOfBirth: Date;

//   @Column({ nullable: true })
//   phoneNumber?: string;

//   @Column({ nullable: true })
//   email?: string;

//   // Medical info
//   @Column({ enum: BloodGroup, nullable: true })
//   bloodGroup?: BloodGroup;

//   @Column('simple-array', { nullable: true })
//   allergies?: string[]; // e.g. ["Penicillin", "Peanuts"]

//   @Column('simple-array', { nullable: true })
//   chronicDiseases?: string[]; // e.g. ["Diabetes", "Hypertension"]

//   @Column('simple-json', { nullable: true })
//   medications?: { name: string; dosage: string; frequency: string }[];

//   @Column('simple-json', { nullable: true })
//   vaccinations?: { name: string; date: Date }[];

//   @Column('simple-json', { nullable: true })
//   labResults?: { testName: string; date: Date; result: string }[];

//   @Column('simple-json', { nullable: true })
//   visits?: { doctorId: string; date: Date; notes: string }[];

//   @Column({ nullable: true })
//   emergencyContact?: string;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   createdAt: Date;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
//   updatedAt: Date;

 

// }
