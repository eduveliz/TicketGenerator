import puppeteer from 'puppeteer'
import {PdfOptions} from "../../Interfaces/ticket";
import PugConverter from "../PugConverter/pugConverter";

export default class createFile implements PdfOptions {
    constructor(
        public name: string,
        public fontFamily: string,
        public storeInformation: {
            storeName: string;
            firstAddress: string;
            secondAddress: string;
            logo: string;
        },
        public data: any
    ) {
    }

    //function
    createPdf = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const html = new PugConverter
        await page.setContent(html.convert({
            name: this.name,
            fontFamily: this.fontFamily,
            storeInformation: this.storeInformation,
            data: this.data
        }));

        const dimensions = await page.evaluate(() => {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                deviceScaleFactor: window.devicePixelRatio,
            };
        });

        await page.setViewport({
            width: dimensions.width,
            height: dimensions.height,
            deviceScaleFactor: 1,
        });


        await page.pdf({path: `src/files/${this.name}.pdf`, format: 'a6'});
        await browser.close();

        return {
            status: 'complete'
        }

    }
}
