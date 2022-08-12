import "../styles/LandingFooter.css";

const LandingFooter = (props) =>{

    const classes = props.className;

    return(
        <div className={classes}>
            <span className='footer-text'>jbdev - 2022</span>
        </div>
    )

}

export default LandingFooter;