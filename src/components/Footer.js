import React from "react";

export default function Footer (props) {

    const toBePlayed = props.cardData.filter(item => item.status !== '').length;
    console.log(toBePlayed);

    return (

        <div className="footer-counter">{toBePlayed}/4 CONCLUÍDOS</div>

    );

}