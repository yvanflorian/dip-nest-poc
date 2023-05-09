import { Controller, Get } from "@nestjs/common"
import { CustomerService } from "./customer.service"
import { Customer } from "./customer"

@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get("")
  async findAllCustomers(): Promise<Customer[]> {
    return this.customerService.findAll()
  }
}
