import logo from '../media/logo.png';
import React from 'react';
import Questions from './Questions';
import './Firstpage.css';

export default function Firstpage () {
    
    const [visible, setVisible] = React.useState(true);

    return visible ?  (

        <section className="first-page">
            <section className="zap-container">
                <div className="zap-big-logo">
                    <img src={logo} className="first-logo" alt="ZapRecall Logo" height={161} width={136}/>
                </div>
                <div className="zap-name">
                    <p className="zap-recall-name">ZapRecall</p>
                </div>
            </section>
            <section className="start-button" onClick={() => setVisible(false)}>
                <button type="button" className="begin-recall">Iniciar Recall!</button>
            </section>
        </section>
        
    ) : (
        <>
            <Questions/>
        </>
    );
} 