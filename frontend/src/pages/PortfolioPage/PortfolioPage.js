import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const PortfolioPage = () => {
  const { registerArt } = useContext(AuthContext);
  const defaultValues = {
    type: "",
    year: "",
    name: "",
    price: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerArt
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Artwork Type:{" "}
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Year:{" "}
          <input
            type='date'
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name:{" "}
          <input
            type='text'
            name="title"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:{" "}
          <input
            type='integer'
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make sure you complete all needed inputs. 
        </p>
        <button>Post!</button>
      </form>
    </div>
  );
};

export default PortfolioPage;