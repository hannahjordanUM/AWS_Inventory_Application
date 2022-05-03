<!-- Modal -->
<div class="modal fade" id="form_products" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add new products</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="product_form" onsubmit="return false">
        
          <div class="form-group">
            <label>Product ID</label>
            <input type="text" class="form-control" id="product_id" placeholder="Enter Product ID" required/>
          </div>

          <div class="form-group">
            <label>Product Name</label>
            <input type="text" class="form-control" id="product_name" placeholder="Enter Product Name" required>
          </div>

          <div class="form-group">
            <label>Product Cost</label>
            <input type="text" class="form-control" id="product_cost" placeholder="Enter Cost of Product" required>
          </div>

          <div class="form-group">
            <label>Product Price</label>
            <input type="text" class="form-control" id="product_price" placeholder="Enter Price of Product" required/>
          </div>

          <div class="form-group">
            <label>Quantity</label>
            <input type="text" class="form-control" id="product_qty" placeholder="Enter Quantity" required/>
          </div>
          <button type="submit" class="btn btn-success" onclick="insertNewItem(
            document.getElementById('product_id').value,
            document.getElementById('product_name').value,
            document.getElementById('product_cost').value,
            document.getElementById('product_price').value,
            document.getElementById('product_qty').value)">Add Product</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>