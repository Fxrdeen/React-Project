import "./Register.css";
function Register() {
  return (
    <div className="bodys">
      <div className="container">
        <h1 className="title">Register Your Product</h1>
        <form action="col-md-12" className="form">
          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Price Range (START)</label>
              <input type="number" class="form-control" id="exampleInputPassword1" required/>
          </div>
          <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Price Range (END)</label>
                <input type="number" class="form-control" id="exampleInputPassword1" required/>
            </div>
            <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Product Type</label>
                <select class="bro form-select" aria-label="Default select example" id="sel">
                    <option selected>Select Product Type</option>
                    <option value="1">Mobile</option>
                    <option value="2">Laptop</option>
                    <option value="3">Television</option>
                </select>
            </div>
            <br />
            <div class="mb-3">
              <label class="form-check-label" for="exampleCheck1">Add the Image of the Product</label> 
              <input type="file" class="file form-control" aria-label="file example" required/>
              <div class="invalid-feedback">Example invalid form file feedback</div>
            </div>
            <br />
            <button type="reset" class="clear btn btn-warning">Clear</button> 
            <button type="submit" class="success btn btn-success">Submit</button>  
        </form>
      </div>
    </div>
  );
}
export default Register;
