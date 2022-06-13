

const DisplayPost = (props) => {
    return ( 
        <div>
            <table>
            <thead>
            <tr>
              <div> 
              <th>Artwork Type</th>
              <input type='text' defaultValue={" "}/>
              </div>
              <div>
              <th>Title</th>
              <input type='text' defaultValue={" "}/>
              </div>
              <div>
              <th>Price</th>
              <input type='currency' deaultValue={" "}/>
              </div>
            </tr>
            </thead>
            <button type='submit' >POST!</button>
            <tbody>
              <td>...painting ...birdhouses</td>  
              <td>...'Tahoe'</td>  
              <td>...ex:$175.00</td>  
            </tbody>
          </table>
        </div>

     );
}

export default DisplayPost;