	
import React from 'react';

 
	
interface params {
	isFull?: boolean;
}
	
 
	
const Table = (values: params)
	
: React.ReactNode => {
	if (values.isFull) return (<div className="table"> <div className="costumer"></div> </div>)
  return (<div className="table">  </div>)
	
}
	
 
	
 
	
export default Table;