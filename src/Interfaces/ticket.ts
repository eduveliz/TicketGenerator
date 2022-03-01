export interface PdfOptions {
    name: string;
    fontFamily: string;
    storeInformation: {
        storeName: string,
        firstAddress: string,
        secondAddress: string,
        logo: string
    }
    data: any
}
