import boto3

# initialize dynamodb
dynamodb = boto3.resource('dynamodb')

# point to our inventory table
table = dynamodb.Table('Inventory')

# prints all tables in dynamodb


def print_tables(dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb')

    for table in dynamodb.tables.all():
        print(table.name)


def add_item(item, itemId, price, quantity, description):
    table.put_item(
        Item={
            'Item': item,
            'ItemId': itemId,
            'price': price,
            'quantity': quantity,
            'Description': description
        }
    )


def get_item(item, itemID):
    response = table.get_item(
        Key={
            'Item': item,
            'ItemId': itemID
        }
    )
    item1 = response['Item']
    print(item1)


if __name__ == '__main__':
    print_tables(dynamodb)
# test to access Inventory table
    # print(table.creation_date_time)

    # add_item("test2", 2, 2, 1, "Creating an item from a function call")

    get_item("test2", 2)

