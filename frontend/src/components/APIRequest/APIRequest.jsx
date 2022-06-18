// const fetchArt = async () => {
//     try {
//         let response = await axios.get("http://127.0.0.1:8000/api/artcollection/", {
//             headers: {
//                 Authorization: "Bearer " + token,
//             },
//         });
//     }   catch (error) {
//         console.log(error.message);
//     }
// };
// fetchArt();

import React, { useEffect } from "react";
import axios from 'axios';

function GetArt() {

    useEffect(() => {
        makeGetRequest();
    }, [])

    async function makeGetRequest(){
        try{
            let response = await axios.get("http://127.0.0.1:8000/api/artcollection/");

            console.log(response.data);
        } catch (ex) {
            console.log('Error in makeGetRequest');
        }
    }

    return (
        <div>
            <h1>Async Await</h1>
            <button onClick={makeGetRequest}>Remake Api Call</button>
        </div>
    );
}

export default GetArt;

