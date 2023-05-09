import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({ name: "customers" })
export class CustomerEntity {
  @PrimaryColumn()
  readonly id: string

  @Column({ unique: true })
  readonly name: string

  @Column()
  readonly firstName: string

  @Column()
  readonly lastName: string

  @Column()
  readonly addressLine1: string

  @Column()
  readonly addressLine2: string
}
