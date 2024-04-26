import { useMoneyStore } from '@/app/store/ItemsStore';
import React, { useState } from 'react';
import './f1.css'; // Ensure you have appropriate styles defined here

const F1 = () => {
    const { money, addMoney, removeMoney } = useMoneyStore();
    const [inputValue, setInputValue] = useState('');
    const [colorSelected, setColorSelected] = useState('');
    const [winner, setWinner] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [redSpeed, setRedSpeed] = useState(5);
    const [whiteSpeed, setWhiteSpeed] = useState(5);
    const [blueSpeed, setBlueSpeed] = useState(5);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleBetClick = () => {
        const speeds = [Math.random() * 3 + 3, Math.random() * 3 + 3, Math.random() * 3 + 3];
        setRedSpeed(speeds[0]);
        setWhiteSpeed(speeds[1]);
        setBlueSpeed(speeds[2]);

        const randomIndex = Math.floor(Math.random() * 3);
        const colors = ['red', 'white', 'blue'];
        setWinner(colors[randomIndex]);
        console.log("vencedor:" + winner)
        const betAmount = parseInt(inputValue);
        if (isNaN(betAmount) || money < betAmount) return;
        
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
            if (colorSelected === winner) {
                addMoney(betAmount);
            } else {
                removeMoney(betAmount);
            }
        }, Math.max(...speeds) * 1000 + 1000); // Make sure all animations are likely done
    };

    return (
        <div className="betMachine-principal-page">
            <div className="betMachine-cockpit-container">
                <div className="speedway">
                    <div className="lane">
                        <img src="F1/red.png" alt="" className={`runner ${isAnimating ? 'animate' : ''} ${winner === 'red' ? 'winner' : ''}`} style={{ animationDuration: `${redSpeed}s` }} />
                    </div>
                    <div className='line'></div>
                    <div className="lane">
                        <img src="F1/white.png" alt="" className={`runner ${isAnimating ? 'animate' : ''} ${winner === 'white' ? 'winner' : ''}`} style={{ animationDuration: `${whiteSpeed}s` }} />
                    </div>
                    <div className='line'></div>
                    <div className="lane">
                        <img src="F1/blue.png" alt="" className={`runner ${isAnimating ? 'animate' : ''} ${winner === 'blue' ? 'winner' : ''}`} style={{ animationDuration: `${blueSpeed}s` }} />
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
    );
};

export default F1;
