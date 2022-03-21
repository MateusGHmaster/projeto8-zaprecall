import React from "react";
import Question from "./Question";
import Footer from "./Footer";
import './Questions.css';

const flashCards = [
    {cardName: 'Pergunta 1', status: '', cardQuestion: 'O que é JSX?',cardAnswer: 'Contúdo HTML inserido por JavaScript, através do React.'}, 
    {cardName: 'Pergunta 2', status: '', cardQuestion: 'Complete a frase "HTML é uma linguagem de..."', cardAnswer: 'marcação'},
    {cardName: 'Pergunta 3', status: '', cardQuestion: 'O que é CSS?', cardAnswer: '*termo técnico de CSS aqui*'},
    {cardName: 'Pergunta 4', status: '', cardQuestion: 'Complete a frase "Miyazaki..." ', cardAnswer: 'Por favor, não tire minha casa!'}
];

export default function Questions () {
        
    const [cardData, setCardData] = React.useState(flashCards);
    const [selected, setSelected] = React.useState(false);
    console.log(setCardData);
    
    console.log(flashCards, selected, setSelected);
    
    function handleQuestions (index, type) {
        console.log(index);
        const copyCardData = cardData;
        copyCardData[index].status = type;
        setCardData([...copyCardData]);
    }

    return (

        <>
            <section className="flash-questions">
                {cardData.map((card, index, type) => <Question card={card} handleQuestions={handleQuestions} index={index} type={type} class={card.status}/>)}
            </section>
            <section className="footer">
                <Footer cardData={cardData} />
            </section>
        </>

    );
}