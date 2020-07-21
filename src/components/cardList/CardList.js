import React from 'react';
import './CardList.css';
import {Card} from '../card/Card';

export const CardList = props =>{
    return (
        <div className="cardList">

       {props.monsters.map((element,index) => {
           return <Card monster={element} key={index} />;
       })
    }

    </div>
    );
} 