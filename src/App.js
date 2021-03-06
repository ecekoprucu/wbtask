import React, {useState} from 'react';
import SearchComponent from "./components/SearchComponent";
import './App.css';

function App () {
    const [componentType, setComponentType] = useState("stay");
    const [focusedInput, setFocusedInput] = useState('stay');

    function setStates (type) {
        setComponentType(type);
        setFocusedInput(type);
    }

    return (
        <div className="App">
            <div className="typesContainer">
                <div className="typeContainer" onClick={() => setStates('stay')}>
                    {focusedInput==='stay' ? <span className="dot"/> : null}
                    <p className={focusedInput==='stay' ? 'boldText' : ''}>Stay</p>
                </div>
                <div className="typeContainer" onClick={() => setStates('experience')}>
                    {focusedInput==='experience' ? <span className="dot"/> : null}
                    <p className={focusedInput==='experience' ? 'boldText' : ''}>Experiences</p>
                </div>
                <div className="typeContainer" onClick={() => setStates('rental')}>
                    {focusedInput==='rental' ? <span className="dot"/> : null}
                    <p className={focusedInput==='rental' ? 'boldText' : ''}>Rental Car</p>
                </div>
            </div>
            <SearchComponent type={componentType}/>
        </div>
    )
}

export default App;
