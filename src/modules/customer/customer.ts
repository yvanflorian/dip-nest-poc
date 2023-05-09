import { v4 as uuid } from "uuid"

export type CustomerProps = {
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2: string
}

export class Customer {
  readonly id: string
  readonly lastName: string
  readonly addressLine1: string
  readonly addressLine2: string
  constructor(props: CustomerProps, id?: string) {
    this.id = id ? id : uuid()
    Object.assign(this, props)
  }
}
