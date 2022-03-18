import React from "react";
import Question from "./Question";

const flashCards = [
    {cardName: 'Pergunta 1', cardIcon: '<ion-icon name="chevron-forward-circle-outline"></ion-icon>', status: ''},
    {cardName: 'Pergunta 2', cardIcon: '<ion-icon name="chevron-forward-circle-outline"></ion-icon>', status: ''},
    {cardName: 'Pergunta 3', cardIcon: '<ion-icon name="chevron-forward-circle-outline"></ion-icon>', status: ''},
    {cardName: 'Pergunta 4', cardIcon: '<ion-icon name="chevron-forward-circle-outline"></ion-icon>', status: ''},
];

export default function Questions () {
        
    const [cardData, setCardData] = React.useState(flashCards);
    const [selected, setSelected] = React.useState(false);
    console.log(setCardData);
    
    console.log(flashCards, selected, setSelected);
    
    return (

        <>
            <section className="flash-questions">
                {cardData.map(card => <Question card={card} />)}
            </section>
        </>

    );
}