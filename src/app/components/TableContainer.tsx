	
import React from 'react';
import Table from './Table';
 
	
interface params {
	TablesAmount?: number;
}
	
 
	
const TableContainer = (values: params)
	
: React.ReactNode => {

    
	
  return (<div className='table-container'>{addTable()}</div>)
	
  function addTable(){
    switch(values.TablesAmount){
        case 1:
            return(<Table></Table>)
        case 2:
            return(<section className= "tables-section"><Table></Table><Table></Table></section>)
        case 3:
          return(<section className= "tables-section"><Table></Table><Table></Table><Table></Table></section>)
        case 4:
          return(<section className= "tables-section"><Table></Table><Table></Table><Table></Table><Table></Table></section>)
        default:
          return(<section className= "tables-section"><Table></Table><Table></Table><Table></Table><Table></Table></section>)
    }
  }
}
	
 

 
	
export default TableContainer;