import { Column, Entity, Index, PrimaryColumn } from "typeorm"

@Entity({ name: "customers" })
@Index(["firstName", "lastName"], { unique: true })
export class CustomerEntity {
  @PrimaryColumn()
  readonly id: string

  @Column()
  readonly firstName: string

  @Column()
  readonly lastName: string

  @Column()
  readonly addressLine1: string

  @Column()
  readonly addressLine2: string
}
