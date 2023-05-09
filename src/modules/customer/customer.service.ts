import { Inject, Injectable } from "@nestjs/common"
import { CustomerInterface, CustomerInterfaceToken } from "./customer.interface"
import { Customer, CustomerProps } from "./customer"

@Injectable()
export class CustomerService {
  constructor(
    @Inject(CustomerInterfaceToken)
    private readonly customerRepo: CustomerInterface
  ) {}

  async findById(id: string): Promise<Customer | null> {
    return this.customerRepo.findById(id)
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepo.findAll()
  }

  async create(customer: CustomerProps): Promise<Customer> {
    return this.customerRepo.create(customer)
  }
}
