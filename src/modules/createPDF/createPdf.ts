import puppeteer from 'puppeteer'

interface PdfOptions {
    name: string;
}

export default class createFile implements PdfOptions {
    constructor(public name: string) {
    }

    //function
    createPdf = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ticket</title>

    <style>
        .center-content {
            width: 100%;
            display: grid;
            place-content: center
        }
    </style>

</head>
<body style="width: 100vw; height: 100vh;background-color: wheat">


<div class="center-content">
    <h1>Receipt</h1>
</div>


<div class="center-content">
    <h3>Thanks for your visit</h3>
</div>

<div class="center-content">
    <img height="50" width="50" src="https://s2.coinmarketcap.com/static/img/coins/200x200/74.png" alt="">
</div>

<div class="center-content">
    <h3 style="margin-bottom: 0">1 Rocket Rd, Hawthorne</h3>
</div>

<div class="center-content" >
    <h3 style="margin: 0"> CA 90250, USA</h3>
</div>

<div style="margin-top: 10px;width: 100%">
    <div style="display: flex;justify-content: space-around;width: 100%;">
        <div style="width: 25%">Product</div>
        <div style="width: 25%;text-align: center">Unit Price</div>
        <div style="width: 25%;text-align: center">Qty</div>
        <div style="width: 25%;text-align: center">Total</div>
    </div>

    <div style="margin-top: 10px">
        <div style="display: flex;justify-content: space-around;width: 100%;">
            <div style="width: 25%">Americano</div>
            <div style="width: 25%;text-align: center">3.00</div>
            <div style="width: 25%;text-align: center">2</div>
            <div style="width: 25%;text-align: center">6.00</div>
        </div>
        <div style="display: flex;justify-content: space-around;width: 100%;">
            <div style="width: 25%">Cappuccino</div>
            <div style="width: 25%;text-align: center">3.00</div>
            <div style="width: 25%;text-align: center">2</div>
            <div style="width: 25%;text-align: center">6.00</div>
        </div>
        <div style="display: flex;justify-content: space-around;width: 100%;">
            <div style="width: 25%">Latte</div>
            <div style="width: 25%;text-align: center">3.00</div>
            <div style="width: 25%;text-align: center">2</div>
            <div style="width: 25%;text-align: center">6.00</div>
        </div>
        <div style="display: flex;justify-content: space-around;width: 100%;">
            <div style="width: 25%">Mocha</div>
            <div style="width: 25%;text-align: center">3.00</div>
            <div style="width: 25%;text-align: center">2</div>
            <div style="width: 25%;text-align: center">6.00</div>
        </div>

        <div style="display: flex;justify-content: space-around;width: 100%;">
            <div style="width: 25%"></div>
            <div style="width: 25%;text-align: center"></div>
            <div style="width: 25%;text-align: center"></div>
            <div style="width: 25%;text-align: center">24.00</div>
        </div>
    </div>

    <div class="center-content" style="margin: 0">
        <h3>Thanks for your visit</h3>
    </div>


</div>

</body>
</html>
`);


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


        await page.pdf({path: 'src/files/ticket2.pdf', format: 'a6'});
        await browser.close();

        return {
            status: 'complete'
        }

    }
}
