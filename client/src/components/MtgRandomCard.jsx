import React, { use } from "react";
import { useScryfall } from "../hooks/useScryfall";
import MtgCard from "./MtgCards";

export default function MtgRandomCard() {
    const { randomCard, loading, fetchRandom } = useScryfall();

    return (
        <div style={{ textAlign: 'center', padding: '20px'}}>
            <h2 style={{ color: '#fff' }}>Carta Aleatoria</h2>
            <div  style={{ display: 'flex', gap: '12px',
                justifyContent: 'center', marginBottom: '24px'}}>
                    
                </div>
        </div>
    )
}