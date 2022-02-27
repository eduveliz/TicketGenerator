import createFile from "./modules/createPDF/createPdf";
import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const create = new createFile('test')
    create.createPdf().then((r) => {
        console.log('Status: ' + r.status)
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
