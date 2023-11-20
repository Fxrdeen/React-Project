import Button from "../components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Mobile" title="Mobile" />
          <Button onClickHandler={handleClick} value="Laptop" title="Laptops" />
          <Button onClickHandler={handleClick} value="Tablet" title="Tablets" />
          <Button onClickHandler={handleClick} value="Television" title="Television" />
        </div>
      </div>
    </>
  );
};

export default Recommended;