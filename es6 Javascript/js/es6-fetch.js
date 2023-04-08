// fetch ==> HTTP api service
// communicate server form client

// AJAX => Async JavaScript And XML
// HTTP Client => xhr (XML http request)
// fetch

// XHR ==> non promise,
// achieve a communicate need more code
// need to write more for error handling

// Fetch => promise
// if we have a issue ... we handel error in more simple way

// HTTP (browser)80, HTTPs (browser)443 , FTP , SFTP , SMTP ,IMAP ,POP3
let cityName = document.querySelector("#cityName");
async function getData() {
  try {
    let apiUrl = "https://fakestoreapi.com/products";

    let response = await fetch(apiUrl); // GET // 1st promise
    console.log(response);
    // extract data from response
    let data = await response.json(); // extract i.e read data

    console.log(data);
    // cityName.innerHTML = data.sys.country;
  } catch (error) {
    alert("something went wrong, try again");
    console.log(error);
  }
}
getData();

// fetch in return provides => response
// response.json() => extract data from response object

// generator's , closures function, super keyword
