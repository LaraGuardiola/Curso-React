import React from 'react';
import BossDetails from './BossDetail';

const BossList = ({bosses}) => {
    const renderedList = bosses.map(boss => {
        return <BossDetails key={boss.id} boss={boss} />
    })
    return <div>{renderedList}</div>
}

export default BossList;