
import { Injectable } from '@angular/core';

import { DataService } from '../../service/data-service';
import { MyOrdersModel } from './my-orders.model';
import { OrderDetailsModel } from '../order-details/order-details.model';

const MODEL_NAME = 'Orders';

@Injectable()
export class MyOrdersService {

    constructor(private service: DataService){        
        service.setModel(MODEL_NAME);
    }
    
    public getOrders(customerId: string): Array<MyOrdersModel>  {
        let queryString = "findCustomerOrders?customerId=" + customerId;
        let myOrderList = new Array<MyOrdersModel>();
        this.service
        .getByQueryString<any>(queryString)
        .subscribe((data: any) => {            
            data.forEach(order => {                
                order.order_detail.forEach(orderDetail => {
                    let myOrders: MyOrdersModel = new MyOrdersModel();
                    let myOrderDetails: OrderDetailsModel = new OrderDetailsModel();                    
                    myOrders.OrderNumber = order.id;
                    myOrders.OrderName = orderDetail.order_name;                    
                    myOrders.OrderDate = new Date(order.order_date);
                    myOrderDetails.OrderNumber = order.id;
                    myOrderDetails.OrderDetailNumber = orderDetail.id;
                    myOrderDetails.SequenceNumber = orderDetail.sequence_number;
                    myOrderDetails.OrderName = orderDetail.order_name;
                    myOrderDetails.Quantity = orderDetail.quantity;
                    myOrderDetails.Amount = orderDetail.amount;
                    myOrderDetails.OrderStatus = orderDetail.order_status;
                    myOrderDetails.DeliveryDate = new Date(orderDetail.delivery_date);
                    myOrderDetails.OrderDate = new Date(order.order_date);
                    myOrders.OrderDetails = new Array<OrderDetailsModel>();
                    myOrders.OrderDetails.push(myOrderDetails);
                    myOrderList.push(myOrders);
                })
            });
        },
        error => () => {
            console.log('Error');
        },
        () => {
          console.log('success');
        });

        return myOrderList;
    }    
}