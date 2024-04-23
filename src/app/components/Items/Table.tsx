	
import React from 'react';

 
	
interface params {
	isFull?: boolean;
}
	
 
	
const Table = (values: params)
	
: React.ReactNode => {
	if (values.isFull) return (<div className="table"> <div className="costumer"></div> </div>) //div da mesa com cliente
  return (<div className="table">  </div>) //div da mesa sem cliente
	
}
	
 
	
 
	
export default Table;