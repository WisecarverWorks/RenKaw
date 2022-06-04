import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import UploadFile from "../../components/UploadFile/UploadFile";
// We need to be able to upload new art work to share.
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
        <body>
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
            name="name"
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
         <h3 UploadFile> </h3>
        <label>
          Upload File:{" "}
          <input
            type= 'file'
            name='Upload'
            value={formData.upload}
            onChange={handleInputChange}
          />
          <textarea 
            type='text'
            name='art'
            value={formData.artwork}
            onChange={handleInputChange} /> 

        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make sure you complete all needed inputs. 
        </p>
        <button>Post!</button>
        </body>
      </form>
    </div>
  );
};
console.log(PortfolioPage)

export default PortfolioPage;