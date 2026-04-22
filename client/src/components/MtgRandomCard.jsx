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
            <button onClick={() => fetchRandom()} disabled={loading}
            style={{
                padding: '10px 24px', borderRadius: '8px',
                background: '#7c3aed', color: '#fff',
                border: 'none', cursor: 'pointer'}}>
            Cualquier Carta
            </button>
            <button onClick={() => fetchRandom('is:commander')}
            disabled={loading}
            style={{
                padding: '10px 24px', borderRadius: '8px',
                background: '#ea580c', color: '#fff',
                border: 'none', cursor: 'pointer' }}>
            Comandante Aletorio
            </button>
            <button onClick={() => fetchRandom ('r:mythic')}
            disabled={loading}
            style={{
                padding: '10px 24px', borderRadius: '8px',
                background: '#eab308', color: '#000',
                border: 'none', cursor: 'pointer' }}>
            Mítica Aleatoria
            </button>
            </div>

            {randomCard && (
                <div style={{ display: 'flex', justifyContent: 'center'}}
            )}
        </div>
    )
}