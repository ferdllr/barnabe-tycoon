	
import React from 'react';

 
	
interface params {
	HasBand?: boolean;
}
	
 
	
const Stage = (values: params)
	
: React.ReactNode => {
    return (<div className="stage"> <img src="stage.png" alt="" /> </div>) //div do palco
	
}
	
 
	
 
	
export default Stage;