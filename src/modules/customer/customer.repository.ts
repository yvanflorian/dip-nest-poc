import { Injectable } from "@nestjs/common"
import { CustomerInterface } from "./customer.interface"
import { InjectRepository } from "@nestjs/typeorm"
import { CustomerEntity } from "./customer.entity"
import { Repository } from "typeorm"
import { Customer, CustomerProps } from "./customer"

// @Injectable()
export class CustomerRepository implements CustomerInterface {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepo: Repository<CustomerEntity>
  ) {}

  async findById(id: string): Promise<Customer | null> {
    const customer = await this.customerRepo.findOne({ where: { id: id } })
    return customer
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerRepo.find()
  }

  async create(props: CustomerProps): Promise<Customer> {
    return await this.customerRepo.save(props)
  }
}
