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
                <img
                src={card,image || card.image_small}
                alt={card.name}
                style={{ width: '100%', display: 'block' }}
                />
            </div>
        );
    }

    return (
        <div style={{
            display: 'flex', gap: '24px',
            background: '#1e1e2e', borderRadius: '16px',
            padding: '24px', maxWidth: '700px'
        }}>
            <img
            src={card.image_uris?.normal || card.image}
            alt={card.name}
            style={{
                width: '250px', borderRadius: '12px',
                boxShadow: '0 8px 24px  rgba(0,0,0,0.4)'
            }}
            />
        </div>
    )

}