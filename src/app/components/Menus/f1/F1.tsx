	
import { useMoneyStore } from '@/app/store/ItemsStore';
import React, { useState } from 'react';
 
	
interface params {
}
	
 
	
const F1 = (values: params)
	
: React.ReactNode => {
    //importando variaveis do zustand
    const {money, addMoney, removeMoney} = useMoneyStore()
    const [inputValue, setInputValue] = useState('')
    const [colorSelected, setColorSelected] = useState('')
    const [winner, setWinner] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleBetClick = () => {
        const randomIndex = Math.floor(Math.random() * 3);

            // Defina o vencedor com base no número aleatório
            if (randomIndex === 0) {
                setWinner('red');
            } else if (randomIndex === 1) {
                setWinner('white');
            } else {
                setWinner('blue');
            }
        const betAmount = parseInt(inputValue);
        if(isNaN(betAmount)) return
        if(money < betAmount) return
        setIsAnimating(true);
        // Faça o que for necessário com o valor do input aqui
        console.log(inputValue);
        console.log(colorSelected)

        setTimeout(() => {
            setIsAnimating(false); // Define o estado de animação como false após a animação
            if(colorSelected == winner) addMoney(betAmount)
            else removeMoney(betAmount)
        }, 5000);
    };

    return (
    <div className="betMachine-principal-page">
        <div className="betMachine-cockpit-container">
            <div className="speedway">
                <div className="lane">
                    <img src="F1/red.png" alt="" className={`runner ${isAnimating ? 'animate' : ''} ${winner === 'red' ? 'winner' : ''}`}/>
                </div>
                <div className='line'></div>
                <div className="lane">
                    <img src="F1/white.png" alt="" className={`runner ${isAnimating ? 'animate' : ''} ${winner === 'white' ? 'winner' : ''}`}/>
                </div>
                <div className='line'></div>
                <div className="lane">
                    <img src="F1/blue.png" alt="" className={`runner ${isAnimating ? 'animate' : ''} ${winner === 'blue' ? 'winner' : ''}`}/>
                </div>
                <div className='line'></div>
            </div>
            <div className='final-line'></div>
        </div>
        <div className="betMachine-buttons-container">
            <button className="betMachine-redButton" onClick={() => setColorSelected('red')}>2x</button>
            <button className="betMachine-whiteButton" onClick={() => setColorSelected('white')}>2x</button>
            <button className="betMachine-blueButton" onClick={() => setColorSelected('blue')}>2x</button>
        </div>
        <h4 className='betMachine-multiplier-display'>2x</h4>
        <input
                type="number"
                className="betMachine-num-input"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Digite aqui"
            />
        <button className="betMachine-startBet-button" onClick={handleBetClick}>APOSTAR!</button>
    </div>
)
	
}
export default F1;