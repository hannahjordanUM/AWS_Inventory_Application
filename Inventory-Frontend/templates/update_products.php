<!-- Modal -->

<div class="modal fade" id="form_product_update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <form id="form_product_update">

          <div class="form-group">
              <label>SKU:</label>
              <input type="text" class="form-control" id="product_update_sku" placeholder="Enter SKU" required/>
            </div>
  
            <div class="form-group">
              <label>Name:</label>
              <input type="text" class="form-control" id="product_update_name" placeholder="Enter Product Name" >
            </div>
  
            <div class="form-group">
              <label>Stock Level:</label>
              <input type="text" class="form-control" id="product_update_stockLevel" placeholder="Enter Stock Level" >
            </div>
  
            <div class="form-group">
              <label>Items Sold:</label>
              <input type="text" class="form-control" id="product_update_itemsSold" placeholder="Enter Number of Items Sold" >
            </div>
  
            <div class="form-group">
              <label>Last Stocked:</label>
              <input type="date" class="form-control" id="product_update_lastStocked" placeholder="Enter Date that Product was Last Stocked" >
            </div>
  
            <div class="form-group">
              <label>Date Ordered:</label>
              <input type="date" class="form-control" id="product_update_orderDate" placeholder="Enter Date that Product was Ordered" >
            </div>
  
            <div class="form-group">
              <label>Sale Price</label>
              <input type="text" class="form-control" id="product_update_salePrice" placeholder="Enter Retail Price of Product" />
            </div>
    
            <div class="form-group">
              <label>Order Price</label>
              <input type="text" class="form-control" id="product_update_orderPrice" placeholder="Enter Order Price of Product" />
            </div>
            <button type="button" class="btn btn-success" onclick="insertNewItem(
              document.getElementById('product_update_sku').value,
              document.getElementById('product_update_name').value,
              document.getElementById('product_update_stockLevel').value,
              document.getElementById('product_update_itemsSold').value,
              document.getElementById('product_update_lastStocked').value,
              document.getElementById('product_update_orderDate').value,
              document.getElementById('product_update_salePrice').value,
              document.getElementById('product_update_orderPrice').value
          )">Update Product</button>

        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>