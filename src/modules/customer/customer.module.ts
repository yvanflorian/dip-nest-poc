import { Module } from "@nestjs/common"
import { CustomerController } from "./customer.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CustomerInterfaceToken } from "./customer.interface"
import { CustomerRepository } from "./customer.repository"
import { CustomerEntity } from "./customer.entity"
import { CustomerService } from "./customer.service"

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    {
      provide: CustomerInterfaceToken,
      useClass: CustomerRepository,
    },
  ],
})
export class CustomerModule {}
