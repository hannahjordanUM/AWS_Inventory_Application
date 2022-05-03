	
var api_url = "https://qpkhslaych.execute-api.us-west-2.amazonaws.com/dev"

var insertNewItem = (productId,productName,productCost,productPrice,productQty)=>{
	// instantiate a headers object
	var myHeaders = new Headers();
	// add content type header to object
	myHeaders.append("Content-Type", "application/json");
	// using built in JSON utility package turn object to string and store in a variable
	//var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
	// create a JSON object with parameters for API call and store in a variable
	var raw = JSON.stringify({
		"id": productId,
		"name": productName,
		"cost": productCost,
		"price": productPrice,
		"quantity": productQty
	})
	
	var requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	// make API call with parameters and use promises to get response
	// Note: fetch("<api_invoke_url>/add") for this function, delete would be <api_invoke_url>/delete
	fetch(api_url+"/add", requestOptions)
	.then(response => response.text())
	.then(result => alert(JSON.parse(result).body))
	.catch(error => console.log('error', error));
}

