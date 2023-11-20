import "./Register.css";
import { useState } from "react";
import products from '../db/data.js'
import axios from "axios";
function Register() {

  const [productName, setProductName] = useState('');
  const [priceStart, setPriceStart] = useState('');
  const [priceEnd, setPriceEnd] = useState('');
  const [productType, setProductType] = useState('');
  const [imageFile, setImageFile] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const formData = {
        title:productName, prevPrice:priceStart, newPrice:priceEnd, company:productType, category:productType, img:imageFile, id: toString(products.length+1), color:"white", reviews:"123 (reviews)",
      }
      await axios.post('http://localhost:5001/api/saveFormData', formData)
      setProductName('');
      setPriceStart('');
      setPriceEnd('');
      setProductType('');
      setImageFile('');

      alert("Submitted Successfully");

    }
    catch(err){
      console.error(err)
    }

  };

  return (
    <div className="bodys">
      <div className="container">
        <h1 className="title">Register Your Product</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">Product Name</label>
            <input value={productName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setProductName(e.target.value)} required/>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Price Range (START)</label>
              <input value={priceStart} type="number" class="form-control" onChange={(e) => setPriceStart(e.target.value)} id="exampleInputPassword1" required/>
          </div>
          <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Price Range (END)</label>
                <input value={priceEnd} type="number" class="form-control" onChange={(e) => setPriceEnd(e.target.value)} id="exampleInputPassword1" required/>
            </div>
            <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Product Type</label>
                <select value={productType} onChange={(e) => setProductType(e.target.value)} class="bro form-select" aria-label="Default select example" id="sel">
                    <option selected>Select Product Type</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Television">Television</option>
                    <option value="Tablet">Tablet</option>
                </select>
            </div>
            <br />
            {/* <div class="mb-3">
              <label class="form-check-label" for="exampleCheck1">Add the Image of the Product</label> 
              <input type="file" class="file form-control" aria-label="file example" required/>
              <div class="invalid-feedback">Example invalid form file feedback</div>
            </div> */}
            <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter the link of Image of Product</label>
            <input value={imageFile} type="text" onChange={(e) => setImageFile(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
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
