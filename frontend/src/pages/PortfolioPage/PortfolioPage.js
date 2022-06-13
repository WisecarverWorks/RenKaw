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
          Rennie's Post Artwork Page
        </h1>
          </header>
          <table>
            <thead>
            <tr>
              <div> 
              <th>Artwork Type</th>
              <input type='text' defaultValue={" "} onChange={{formData, handleInputChange}} onSubmit={{handleSubmit}}/>
              </div>
              <div>
              <th>Title</th>
              <td>...'Tahoe'</td>  
              <input type='text' defaultValue={" "}/>
              </div>
              <div>
              <th>Price</th>
              <td>...ex:$175.00</td>  
              <input type='currency' deaultValue={" "}/>
              </div>
            </tr>
            </thead>
          </table>
    </div>
  );
};
export default PortfolioPage;