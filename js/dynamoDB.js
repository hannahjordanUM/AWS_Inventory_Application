// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
// import { PublishCommand } from "@aws-sdk/client-sns";
// import { snsClient } from "../libs/snsClient.js";
import { dynamoClient } from "../libs/dynamoClient.js";

export const submitData = async () => {
    //Set the parameters
    // Capture the values entered in each field in the browser (by id).
    const name = document.getElementById("name").value;
    const SKU = document.getElementById("SKU").value;
    const stockLevel = document.getElementById("stockLevel").value;
    const numSold = document.getElementById("numsold").value;
    const lastStocked = document.getElementById("lastStocked").value;
    const orderDate = document.getElementById("orderDate").value;
    const salePrice = document.getElementById("salePrice").value;
    const orderPrice = document.getElementById("orderPrice").value;


    //Set the table name.
    const tableName = "Inventory";

    //Set the parameters for the table
    const params = {
        TableName: tableName,
        // Define the attributes and values of the item to be added. Adding ' + "" ' converts a value to
        // a string.
        Item: {
            name: { S: name + "" },
            SKU: { N: SKU + "" },
            stockLevel: { N: stockLevel + "" },
            numSold: { N: numSold + "" },
            lastStocked: { S: lastStocked + "" },
            orderDate: { S: orderDate + "" },
            salePrice: { S: salePrice + "" },
            orderPrice: { S: orderPrice + "" },
        },
    };
    // Check that all the fields are completed.
    if ( name != "" && SKU != "" && stockLevel != "" && numSold != "" && lastStocked != "" && orderDate != ""
    && salePrice != "" && orderPrice != "") {
        try {
            //Upload the item to the table
            const data = await dynamoClient.send(new PutItemCommand(params));
            alert("Data added to table.");

        } catch (err) {
            // Display error message if item is no added to table
            console.error(
                "An error occurred. Check the console for further information",
                err
            );
        }
        // Display alert if all field are not completed.
    } else {
        alert("Enter data in each field.");
    }
};
// Expose the function to the browser
window.submitData = submitData;

export {
    submitData,
}
