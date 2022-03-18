import React from "react";

export default function Question (props) {
    
    const [collapsed, setCollapsed] = React.useState(true);
    return collapsed ? <div onClick={() => setCollapsed(false)}>{props.card.cardName}</div> : <div onClick={() => setCollapsed(true)}>expanded</div>

}