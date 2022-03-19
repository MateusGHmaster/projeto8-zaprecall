import React from "react";

export default function Question (props) {
    
    const [collapsed, setCollapsed] = React.useState(true);
    const [flipped, setFlipped] = React.useState(true);
    /* const [question, setQuestion] = React.useState([{incorrect},{partiallyCorrect},{correct}]); */

    return collapsed ? (

        <div className="closed-card" onClick={() => setCollapsed(false)}>
            <div className="to-be-opened">{props.card.cardName}</div>
            <div className="closed-icon">{props.card.cardIcon}</div>
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </div>

    ) : (
    
        flipped ? (

            <div className="opened-card">
                <div className="to-be-closed" >{props.card.cardQuestion}</div>
                <div className="flip-card" onClick={() => setFlipped(false)}><ion-icon name="reload-outline"></ion-icon></div>
            </div>

        ) : (

            <div className="flipped-card">
                <div className="to-be-closed" onClick={() => setCollapsed(true)}>{props.card.cardAnswer}</div>
                <button type="button" className="forgot" onClick={() => props.handleQuestions(props.index, 'incorrect')}>Não lembrei</button>
                <button type="button" className="almost-remembered" onClick={() => props.handleQuestions(props.index, 'partially-correct')}>Quase lembrei</button>
                <button type="button" className="remembered" onClick={() => props.handleQuestions(props.index, 'correct')}>Zap!</button>
            </div>

        )

    );
}