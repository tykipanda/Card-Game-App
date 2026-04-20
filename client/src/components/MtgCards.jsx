import React from "react";

export default function MtgCard({ card, compact = false }) {
    if (!card) return null;

    if (compact) {
        return (
            <div style={{
                width: '200px', borderRadius: '12px',
                overflow: 'hidden', cursor: "pointer",
                transition: 'transform 0.2s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}>
                
            </div>
        )
    }

}