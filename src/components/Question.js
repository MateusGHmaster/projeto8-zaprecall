import React from "react";

export default function Question (props) {
    
    let className = 'initial-class';
    const [collapsed, setCollapsed] = React.useState(true);
    const [flipped, setFlipped] = React.useState(true);

    return collapsed ? (

        <div className="closed-card" onClick={() => setCollapsed(false)}>
            <div className="to-be-opened">{props.card.cardName}</div>
            <div className="closed-icon">{props.card.cardIcon}</div>
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </div>

    ) : (
    
        flipped ? (

            <div className="opened-card">
                <div className={className} >{props.card.cardQuestion}</div>
                <div className="flip-card" onClick={() => setFlipped(false)}><ion-icon name="reload-outline"></ion-icon></div>
            </div>

        ) : (

            <div className="flipped-card">
                <div className="to-be-closed" onClick={() => setCollapsed(true)}>{props.card.cardAnswer}</div>
                <div className="buttons">
                    <button type="button" className="not-zap" onClick={() => {
                        props.handleQuestions(props.index, 'incorrect');
                        setCollapsed(true);
                        className = props.class;
                        }}>Não lembrei</button>
                    <button type="button" className="almost-zap" onClick={() => {
                        props.handleQuestions(props.index, 'partially-correct');
                        setCollapsed(true);
                        className = props.class;
                        }}>Quase lembrei</button>
                    <button type="button" className="zap" onClick={() => {
                        props.handleQuestions(props.index, 'correct');
                        setCollapsed(true);
                        className = props.class;
                        }}>Zap!</button>
                </div>
            </div>

        )

    );
}