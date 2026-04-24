import React, { useState} from "react";
import GameBoard from './components/GameBoard';
import MtgSearch from './components/MtgSearch';
import MtgRandomCard from "./components/MtgRandomCard";

function App() {
    const [activeTab, setActiveTab] = useState ('deck');

    const tabStyle = (tab) => ({
        padding: '12px 28px', fontSiez: '1rem', fontWeight: 600,
        border: 'none', cursor: 'pointer', borderRadius: '8px 8px 0 0',
        background: activeTab === tab ? '#1e1e2e' : '#0d0d1a',
        color: activeTab === tab ? '#fff' : '#666',
        borderBotton: activeTab === tab ? '3p solid #7c3aed' : 'none'
    });

    return(
        <div style={{
            minHeight: '100vh', background: '#0d0d1a',
            color: '#eee', fontFamily: "'Segoe UI', sans-serif"
        }}>
            {/* Tab de navegación*/}
            <div style={{
                display: 'flex', justifyContent: 'center',
                gap: '4px', padding: '20px 20px 0'
            }}>
                <button onClick={() => setActiveTab('deck')}
                style={tabStyle('deck')}>
                    Deck of Cards
                </button>
                <button onClick={() => setActiveTab('random')}
                style={tabStyle('search')}>
                    Buscar MTG
                </button>
                <button onClick={() => setActiveTab('random')}
                style={tabStyle('random')}>
                    Carta Aleatoria
                </button>
            </div>
        </div>
    )
}