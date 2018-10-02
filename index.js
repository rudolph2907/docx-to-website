const mammoth = require('mammoth');
const fs = require('fs');

const wordDoc = 'testdoc.docx';
const templateFile = 'template.html';
const outputFile = 'test.html';

mammoth.convertToHtml({path: wordDoc})
    .then(function(result){
        let html = result.value; // The generated HTML
        let messages = result.messages; // Any messages, such as warnings during conversion
		
		let template = fs.readFileSync(templateFile, 'utf8');		
		fs.writeFile(outputFile, template.replace('[[content]]', html), function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		}); 
    })
    .done();
