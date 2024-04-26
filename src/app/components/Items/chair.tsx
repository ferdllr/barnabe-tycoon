	
import React from 'react';

 
	
interface params {
	isFull?: boolean;
}
	
 
	
const Chair = (values: params)
	
: React.ReactNode => {
	if (values.isFull) return (<div className="table"> <img src="fullchair.png" alt="" /> </div>) //div da mesa com cliente
  return (<div className="table"> <img src="emptyChair.png" alt="" /> </div>) //div da mesa sem cliente
	
}
	
 
	
 
	
export default Chair;