	
import React from 'react';

 
	
interface params {
    HaveStage?: boolean;
	HasBand?: boolean;
}
	
 
	
const Stage = (values: params)
	
: React.ReactNode => {
    if(values.HaveStage){
        return (<div className="stage">  </div>)
    }
    return(<div></div>)
	
}
	
 
	
 
	
export default Stage;