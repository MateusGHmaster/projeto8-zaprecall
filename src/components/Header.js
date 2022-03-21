import smallLogo from '../media/logo-pequeno.png'

export default function Header () {
    return(

        <header>
            <img className='small-logo' src={smallLogo} alt='small-zap-logo' width={52} height={60} />
            <figcaption className='zap-header'>ZapRecall</figcaption>
        </header>

    );
}