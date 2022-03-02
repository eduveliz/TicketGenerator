import createFile from "./modules/createPDF/createPdf";
import express from "express"
import {TicketInterface} from "./Interfaces/ticket";

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/ticket', (req, res) => {

    const ticket: TicketInterface = {
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

    const create = new createFile(ticket.name, ticket.fontFamily, ticket.storeInformation, ticket.data)
    try {
        create.createPdf().then((r) => {
            res.send({
                status: r.status
            });
            console.log(r)
        });
    } catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
