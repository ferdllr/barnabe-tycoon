	
import React from 'react';

 
	
interface params {
	isFull?: boolean;
}
	
 
	
const Table = (values: params)
	
: React.ReactNode => {
	if (values.isFull) return (<div className="table"> <img src="tables/fulltable1.png" alt="" /> </div>) //div da mesa com cliente
  return (<div className="table"> <img src="tables/emptytable1.png" alt="" /></div>) //div da mesa sem cliente
	
}
	
 
	
 
	
export default Table;