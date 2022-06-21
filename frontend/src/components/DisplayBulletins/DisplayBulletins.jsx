// Import React 
import React from 'react';
// Import our bulletin
import Bulletin from '../Bulletin/Bulletin';

// Const and logic
const DisplayBulletins = (props) => {
    return (
        <div className='display-div'>
            {props.bulletins.map((bulletin) => {
                return(
                    <Bulletin bulletin={bulletin}/>
                )

            })}
        </div>
    );
}
// Export our Displaybulletins prop
export default DisplayBulletins;