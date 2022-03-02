import {PdfOptions} from "../../Interfaces/ticket";

const pug = require('pug');

export default class PugConverter {
    convert = (ticket : PdfOptions) => {
        const compiledFunction = pug.compileFile('src/modules/PugConverter/template.pug');
        return compiledFunction(ticket)
    }
}


