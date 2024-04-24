	
import {useMoneyStore, useMesaStore, useBarStore} from '@/app/store/ItemsStore';
import React, { useEffect, useState } from 'react';

 
	
interface params {
}
	
 
	
const Game = (values: params)
	
: React.ReactNode => {
    
    //importando variaveis do zustand
    const {tables, addCostumer, removeCostumer} = useMesaStore();
    const {addMoney} = useMoneyStore()
    const {open, reputation, setOpen} = useBarStore()


    function createCostumer(){ //função pra adicionar clientes
        const randomNum = Math.floor(Math.random() * tables.length); //seleciona mesa aleatoria
        if (!tables[randomNum]) addCostumer(randomNum) //adiciona cliente na mesa
        
      }
    
      function helpCustomer(val: number){//função para atender clientes
        if(!tables[val]) return //verifica se a mesa esta vazia
        removeCostumer(val) //remove cliente
        addMoney(20) //recebe dinheiro do cliente
      }

      function customerButton(){
        if (reputation == 0) return (<h3>compre uma mesa para iniciar o jogo!</h3>)
        if (open) return (<button className='main-buttons-fechar' onClick={() => setOpen(false)}>fechar</button>)
        else return (<button className='main-buttons-abrir' onClick={() => setOpen(true)}>abrir</button>)
      }
      
      useEffect(() => {
        var repCalc = ((10 - reputation) * 500)
        if (!open) return;
        const intervalId = setInterval(createCostumer, repCalc);
        console.log(repCalc)
        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, [open]); // Chama useEffect sempre que 'open' mudar


    return (
    <div className="main-inputs">
        {customerButton()}
        <h4>atender clientes:</h4>
        <div>
        {tables.map((isFull, index) => (
            <button key={index} onClick={() => helpCustomer(index)}>
                Mesa {index + 1}
            </button>
            ))} {/* renderiza o botao de todas as mesas dentro do array "tables" */}
        </div>
    </div>)
	
}
	
 
	
 
	
export default Game;