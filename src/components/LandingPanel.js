import smaugLogo from '../img/mainlogo2.png';
import smaugLogoSVG from '../img/MainLogoSVG.svg';
import "../styles/LandingPanel.css"

const LandingPanel = (props) =>{

    const classes = props.className;

    return(
        <div className={classes}>
            <img src={smaugLogoSVG} className='main-logo'></img>
             <div>
                <h1>Login Form</h1>
                <p>placeholder placeholder</p>
                <p>placeholder placeholder</p>
                <p>placeholder placeholder</p>
             </div>
        </div>
    )

}

export default LandingPanel;