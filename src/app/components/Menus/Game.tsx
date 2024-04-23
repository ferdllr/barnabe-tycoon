	
import {useMoneyStore, useMesaStore} from '@/app/store/ItemsStore';
import React from 'react';

 
	
interface params {
}
	
 
	
const Game = (values: params)
	
: React.ReactNode => {
    //importando variaveis do zustand
    const {tables, addCostumer, removeCostumer} = useMesaStore();
    const {addMoney} = useMoneyStore()


    function createCostumer(){ //função pra adicionar clientes
        console.log(tables)
        const randomNum = Math.floor(Math.random() * tables.length); //seleciona mesa aleatoria
        if (tables[randomNum]) return //se a mesa ja estiver ocupada, nada acontece
        addCostumer(randomNum) //adiciona cliente na mesa
        
      }
    
      function helpCustomer(val: number){//função para atender clientes
        if(!tables[val]) return //verifica se a mesa esta vazia
        removeCostumer(val) //remove cliente
        addMoney(20) //recebe dinheiro do cliente
      }


    return (
    <div className="main-inputs">
        <button className='main-buttons-fechar'>fechar</button>
        <h4>atender clientes:</h4>
        <div>
        {tables.map((isFull, index) => (
            <button key={index} onClick={() => helpCustomer(index)}>
                Mesa {index + 1}
            </button>
            ))} {/* renderiza o botao de todas as mesas dentro do array "tables" */}
        </div>
        <button onClick={createCostumer}> gerar cliente</button> 
    </div>)
	
}
	
 
	
 
	
export default Game;