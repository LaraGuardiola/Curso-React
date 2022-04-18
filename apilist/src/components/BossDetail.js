import React from 'react';
import '../css/BossDetail.css';

const BossDetail = ({boss}) => {
    if(boss.name === 'Abductor Virgins'){
        return (
            <div className="boss-detail">
                <h1>{boss.name}</h1>
                <img src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/maxresdefault.jpg" alt={boss.description} />
                <p>{boss.description}</p>
                <p>Location: {boss.location}</p>
                <p>Drops: {boss.drops.map((drop,index) => {
                    if(boss.drops.length === index + 1) {
                        return `${drop}.`
                    }
                    return `${drop}, `
                })}
                </p>
            </div>
        )
    }
    return (
        <div className="boss-detail">
            <h1>{boss.name}</h1>
            <img src={boss.image} alt={boss.description} />
            <p>{boss.description}</p>
            <p>Location: {boss.location}</p>
            <p>Drops: {boss.drops.map((drop,index) => {
                if(boss.drops.length === index + 1) {
                    return `${drop}.`
                }
                return `${drop}, `
            })}
            </p>
        </div>
    )
}

export default BossDetail;