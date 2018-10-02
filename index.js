const mammoth = require('mammoth');
const fs = require('fs');

mammoth.convertToHtml({path: 'testdoc.docx'})
    .then(function(result){
        let html = result.value; // The generated HTML
        let messages = result.messages; // Any messages, such as warnings during conversion
		
		let template = fs.readFileSync('template.html', 'utf8');		
		fs.writeFile("test.html", template.replace('[[content]]', html), function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		}); 
    })
    .done();