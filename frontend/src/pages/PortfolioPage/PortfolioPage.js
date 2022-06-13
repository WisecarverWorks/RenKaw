import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

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
    <div>
      <header>
        <h1 style={{
          postion: 'center',
        }}>
          Rennie's Portfolio
        </h1>
          </header>
          <table>
            <thead>
            <tr>
              <div> 
              <th>Artwork Type</th>
              <input type='text' defaultValue={" "} onChange={{formData, handleInputChange}} onSubmit={{handleSubmit}}/>
              <th>Title</th>
              <td>...'Tahoe'</td>  
              <input type='text' defaultValue={" "}/>
              <th>Price</th>
              <td>...ex:$175.00</td>  
              <input type='currency' deaultValue={" "}/>
              </div>
              <button type='submit' onSubmit={handleSubmit}>POST</button>
            </tr>
            </thead>
           <label>Bulliten Board</label>
           <input type='textarea'></input>
          </table>
    </div>
  );
};
export default PortfolioPage;