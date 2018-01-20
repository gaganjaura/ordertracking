import { OrderDetailsModel } from '../order-details/order-details.model';

export class MyOrdersModel {
    public OrderNumber: string;
    public OrderName: string;
    public OrderDate: Date;
    public OrderDetails: Array<OrderDetailsModel>;
}


