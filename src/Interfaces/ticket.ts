export interface ProductModelInterface {
    productName: string;
    quantity: string;
    price: string;
    total: string
}

export interface StoreInformationInterface {
    storeName: string,
    firstAddress: string,
    secondAddress: string,
    logo: string
}

export interface TicketInterface {
    name: string;
    fontFamily: string;
    storeInformation: StoreInformationInterface
    data: ProductModelInterface
}
