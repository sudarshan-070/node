var url = require('url');
const urlString = "https://primathon.in/service?node=yes&react=yes";

const getUrlString = url.parse(urlString);
console.log(getUrlString);
// get query
console.log(getUrlString.query);
// pathname
console.log(getUrlString.pathname);
// protocol
console.log(getUrlString.protocol);
