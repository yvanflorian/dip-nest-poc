import { Customer, CustomerProps } from "./customer"

export const CustomerInterfaceToken = Symbol("CustomerInterface")
export interface CustomerInterface {
  findById: (id: string) => Promise<Customer | null>
  findAll: () => Promise<Customer[]>
  create: (pro: CustomerProps) => Promise<Customer>
  // removeById: (id: string) => Promise<void>
}
