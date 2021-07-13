﻿namespace SerenBasic.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'SerenBasic.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
