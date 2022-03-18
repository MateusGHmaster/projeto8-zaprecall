export default function Questions () {
    
    const flashCards = [
        {cardName: 'Pergunta 1', cardIcon: '<ion-icon name="chevron-forward-circle-outline"></ion-icon>'},
        {cardName: 'Pergunta 2', cardIcon: '<ion-icon name="chevron-forward-circle-outline"></ion-icon>'},
        {cardName: 'Pergunta 3', cardIcon: '<ion-icon name="chevron-forward-circle-outline"></ion-icon>'},
        {cardName: 'Pergunta 4', cardIcon: '<ion-icon name="chevron-forward-circle-outline"></ion-icon>'},
    ];
    const [selected, setSelected] = React.useState(false);
    
    return (

        <>
            <section className="flash-questions">
                
            </section>
        </>

    );
}