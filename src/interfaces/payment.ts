

export interface IPayment {
    checkout_id: string
    buyer_info: {},
    credit_card_info: {}
    payment_orders: PaymentOrder[]
}


type PaymentOrder = {
    seller_account: string
    amount: string
    currency: string
    payment_order_id: string
}

