import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('funcionarios')
class Employee{
    @PrimaryGeneratedColumn('increment')
    id:string

    @Column()
    name: string

    @Column()
    email :string

    @Column()
    birth_date: Date

    @Column()
    admission_date: Date

    @Column()
    sector: string

    @Column()
    office:string

    @Column()
    level: string

    @CreateDateColumn()
    audit_date_insert: Date

    @UpdateDateColumn()
    audit_date_update: Date
}

export default Employee