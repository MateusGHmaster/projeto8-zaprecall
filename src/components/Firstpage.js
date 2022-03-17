import logo from './media/logo.png';

export default function Firstpage () {
    return (

        <section className="first-page">
            <section className="zap-container">
                <div className="zap-big-logo">
                    <img src={logo} className="first-logo" alt="ZapRecall Logo"/>
                </div>
                <div className="zap-name">
                    <p className="zap-recall-name">ZapRecall</p>
                </div>
            </section>
            <section className="start-button">
                <button type="button" className="begin-recall">Iniciar Recall!</button>
            </section>
        </section>
        
    );
}