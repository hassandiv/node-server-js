const url = require("url");

const myUrl = new URL("https://domain.com:8000/hello?id=100&status=active");

//Serialised URL - output https://domain.com:8000/hello?id=100&status=active
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain + port) - output domain.com:8000
console.log(myUrl.host);

//Hostname (root domain without port) - output domain.com
console.log(myUrl.hostname);

//Pathname - output /hello
console.log(myUrl.pathname);

//Serialized query - output ?id=100&status=active
console.log(myUrl.search);

//Params object - output URLSearchParams { 'id' => '100', 'status' => 'active' }
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
