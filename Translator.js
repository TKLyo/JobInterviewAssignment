//Code written in Microsoft Visual Code
//Create, Request & Response
var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Translator"
   response.end('Translator 1.0\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
//Type "node Translator.js" to run

//---------------------------------------------------------------------------
//App
const header = {header: "Welcome to the Translator 1.0 by Lionel Yap"};
const info = {info: "This is a translator that was made to help translate English to Indonesian. Please fill in the blanks below."};
const translateheader = required('translateheader');
const translateinfo = required('translateinfo');
console.translatedlog = console.log;
var noinputs = 0

//Start of the App
console.log("---------------------------------------------------------")
//Preview Header
console.log(header)
//translation Header
translateheader('Welcome to the Translator 1.0 by Lionel Yap', {to: 'id'}).then(res => {
  console.log(res.text);
}).catch(err => {
  console.error(err);
})
console.log("---------------------------------------------------------")
//Preview info
console.log(info)
//translation Info
translateinfo('This is a translator that was made to help translate English to Indonesian. Please fill in the blanks below.', {to: 'id'}).then(res2 => {
  console.log(res2.text);
}).catch(err => {
  console.error(err);
})

//Breaker Line
console.log("---------------------------------------------------------")

//Insert Input
console.log = function(value)
{
  console.translatedlog(value);
  window.$translatedlog = value; //$translatedlog contains log value now
  noinputs + 1 
};

//Validation & Previewing Error Messages
if ($translatedlog) {
  noinputs - 1
  if ($translatedlog.string("en")) { //Check if texts is in English
    if (noinputs < 1) { //Check if no.of inputs
      if (/^\s+$/.test($translatedlog)) { //Contains Space
        if ($($translatedlog.length) > 160) { //check if text is more than 160 characters
          console.log("THE GIVEN SENTENCE EXCEEDED THE CHARACTER LIMIT"); //preview error
        }
        else {
          translateinfo($translatedlog, {to: 'id'}).then(res3 => {
            console.log(res3.text);
          }).catch(err => {
            console.error(err);
          })
        }
      }
      else { //Preview Error, no spaces used
        console.log("PLEASE ADD SPACES")
      }
    }
    else { //Preview ERROR, too many inputs
      console.log("TOO MANY INPUTS");
    }
  }
  else { //Preview Error, texts arent in English
    console.log("THE GIVEN SENTENCE WAS NOT IN ENGLISH")
  }
}
else { //No inputs given
    console.log('NO INPUTS!')
};
console.log("---------------------------------------------------------")