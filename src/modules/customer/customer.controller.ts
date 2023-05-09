import { Body, Controller, Get, Post } from "@nestjs/common"
import { CustomerService } from "./customer.service"
import { Customer, CustomerProps } from "./customer"

@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get("")
  async findAllCustomers(): Promise<Customer[]> {
    return this.customerService.findAll()
  }

  @Post("create")
  async createCustomer(@Body() customer: CustomerProps): Promise<Customer> {
    return this.customerService.create(customer)
  }
}
