	
import {useMoneyStore, useMesaStore, useBarStore, useChairStore} from '@/app/store/ItemsStore';
import React, { useEffect, useState } from 'react';

 
	
interface params {
}
	
enum ItemType  {
  CHAIR,
  TABLE
}
	
const Game = (values: params)
	
: React.ReactNode => {
    
    //importando variaveis do zustand
    const {tables, addCostumer, removeCostumer} = useMesaStore();
    const {chairs, addChairCostumer, removeChairCostumer} = useChairStore()
    const {addMoney} = useMoneyStore()
    const {open, reputation, setOpen} = useBarStore()


    function createCostumer(){ //função pra adicionar clientes
        if(tables.length != 0) {
          const randomTableNum = Math.floor(Math.random() * tables.length); //seleciona mesa aleatoria
          if (!tables[randomTableNum]) addCostumer(randomTableNum) //adiciona cliente na mesa
        }
        if(chairs.length !=0){
          const randomChairNum = Math.floor(Math.random() * chairs.length)
          if (!chairs[randomChairNum]) addChairCostumer(randomChairNum)
        }
      }
    
      function helpCustomer(val: number, itemType: ItemType){//função para atender clientes
        if(itemType == ItemType.TABLE){
          if(tables.length == 0) return;
          if(!tables[val]) return //verifica se a mesa esta vazia
          removeCostumer(val) //remove cliente
          addMoney(10) //recebe dinheiro do cliente
        }
        if(itemType == ItemType.CHAIR){
          if(chairs.length == 0) return;
          if(!chairs[val]) return //verifica se a mesa esta vazia
          removeChairCostumer(val) //remove cliente
          addMoney(5) //recebe dinheiro do cliente
        }
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
        <h4>atender mesas:</h4>
        <div>
        {tables.map((isFull, index) => (
            <button key={index} onClick={() => helpCustomer(index, ItemType.TABLE)} className="table-interact-buttons">
                Mesa {index + 1}
            </button>
            ))} {/* renderiza o botao de todas as mesas dentro do array "tables" */}
        </div>
        <h4>atender bar:</h4>
        {chairs.map((isFull, index) => (
            <button key={index} onClick={() => helpCustomer(index, ItemType.CHAIR)} className="table-interact-buttons">
                Chairs {index + 1}
            </button>
            ))}
    </div>)
	
}
	
 
	
 
	
export default Game;