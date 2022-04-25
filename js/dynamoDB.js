// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
// import { PublishCommand } from "@aws-sdk/client-sns";
// import { snsClient } from "../libs/snsClient.js";
import { dynamoClient } from "../libs/dynamoClient.js";

export const submitData = async () => {
    //Set the parameters
    // Capture the values entered in each field in the browser (by id).
    const id = document.getElementById("id").value;
    const title = document.getElementById("title").value;
    const name = document.getElementById("name").value;
    const body = document.getElementById("body").value;
    //Set the table name.
    const tableName = "Items";

    //Set the parameters for the table
    const params = {
        TableName: tableName,
        // Define the attributes and values of the item to be added. Adding ' + "" ' converts a value to
        // a string.
        Item: {
            id: { N: id + "" },
            title: { S: title + "" },
            name: { S: name + "" },
            body: { S: body + "" },
        },
    };
    // Check that all the fields are completed.
    if (id != "" && title != "" && name != "" && body != "") {
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
