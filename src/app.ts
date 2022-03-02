import createFile from "./modules/createPDF/createPdf";
import express from "express"
import {PdfOptions} from "./Interfaces/ticket";

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/ticket', (req, res) => {

    console.log(req)

    const mockRequest: PdfOptions = {
        name: req.body.name,
        fontFamily: req.body.fontFamily,
        storeInformation: {
            storeName: req.body.storeInformation.storeName,
            firstAddress: req.body.storeInformation.firstAddress,
            secondAddress: req.body.storeInformation.secondAddress,
            logo: req.body.logo,
        },
        data: req.body.data,
    }

    const create = new createFile(mockRequest.name, mockRequest.fontFamily, mockRequest.storeInformation, mockRequest.data)
    try {
        create.createPdf().then((r) => {
            res.send({
                status: r.status
            });
        });
    } catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
