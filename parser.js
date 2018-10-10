const PDFParser = require('pdf2json');

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
		// console.log(pdfData);
    	// console.log(JSON.stringify(pdfData.formImage.Pages));
    	let texts = [];
    	let pageN = pdfData.formImage.Pages.length;
    	for (let i = 0; i < pageN; i++) {
    		let textArr = pdfData.formImage.Pages[i].Texts;
    		// console.log(textArr);
    		for (let j = 0; j < textArr.length; j++) {
    			texts.push(decodeURIComponent(textArr[j].R[0].T));
    			// console.log(decodeURIComponent(textArr[j].R[0].T));
    		}
    	}

    	console.log(texts);
	});

pdfParser.loadPDF("/Users/mac/Downloads/ET17-12-052_W\ JULIETTE\ MULTI\ STRIPE\ DRESS/bulk/BOM/W\ Juliette\ Multi\ Stripe\ Dress\ -\ 3.1\ updated\ gws\ Candy.pdf");