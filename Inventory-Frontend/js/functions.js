const api_url = "api url"; // api url here
// define the callAPI function that takes a first name and last name as parameters
var insertNewItem = (sku,name,stockLevel,itemsSold,lastStocked,orderDate,salePrice,orderPrice)=>{
	// instantiate a headers object
	var myHeaders = new Headers();
	// add content type header to object
	myHeaders.append("Content-Type", "application/json");
	// using built in JSON utility package turn object to string and store in a variable
	//var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
	// create a JSON object with parameters for API call and store in a variable
	var raw = JSON.stringify({
	  'sku': sku,
	  'name': name,
	  'stockLevel': stockLevel,
	  'itemsSold':itemsSold,
	  'lastStocked':lastStocked,
	  'orderDate':orderDate,
	  'salePrice': salePrice,
	  'orderPrice': orderPrice
	})

	var requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	// make API call with parameters and use promises to get response
	// Note: fetch("<api_invoke_url>/add") for this function, delete would be <api_invoke_url>/delete
	fetch(api_url+"add", requestOptions)
	.then(response => response.text())
	.then(result => alert(JSON.parse(result).body))
	.catch(error => console.log('error', error));
}


var deleteItem = (product_sku)=>{
	// instantiate a headers object
	var myHeaders = new Headers();
	// add content type header to object
	myHeaders.append("Content-Type", "application/json");
	// using built in JSON utility package turn object to string and store in a variable
	//var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
	// create a JSON object with parameters for API call and store in a variable
	var raw = JSON.stringify({
		"sku": product_sku
	})
	console.log(raw);
	var requestOptions = {
		method: 'DELETE',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	// make API call with parameters and use promises to get response
	// Note: fetch("<api_invoke_url>/add") for this function, delete would be <api_invoke_url>/delete
	fetch(api_url+"delete", requestOptions)
	.then(response => response.text())
	.then(result => alert(JSON.parse(result).body))
	.catch(error => console.log('error', error));
}

async function PopulateTable() {

    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    //var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
    // create a JSON object with parameters for API call and store in a variable

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    // Note: fetch("<api_invoke_url>/add") for this function, delete would be <api_invoke_url>/delete

    fetch(api_url+"get_products", requestOptions)
    .then(
      res => {
        res.json().then(
          data => {
            if (data.length > 0) {
              var temp = "";
              data.forEach( (dataItem) => {
                temp += "<tr>";
                temp += "<td>" + dataItem.sku + "</td>";
                temp += "<td>" + dataItem.name + "</td>";
                temp += "<td>" + dataItem.stockLevel + "</td>";
                temp += "<td>" + dataItem.itemsSold + "</td>";
                temp += "<td>" + dataItem.lastStocked + "</td>";
                temp += "<td>" + dataItem.orderDate + "</td>";
                temp += "<td>" + dataItem.salePrice + "</td>";
                temp += "<td>" + dataItem.orderPrice + "</td>";
                temp += "<td> <a href='#'' data-toggle='modal' data-target='#form_product_update' class='btn btn-primary'>Update</a></td>";
                temp += "<td> <button type='button' class='btn btn-primary' onclick='deleteItem(\""+dataItem.sku+"\")'>Delete</button></td></tr>";
              });  
              document.getElementById('get_product').innerHTML = temp;
            }
          }
        )
      }
    )
    
  }
