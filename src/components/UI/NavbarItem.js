import '../../styles/NavbarItem.css';

const NavbarItem = (props) =>{

    const classes = props.className

    return <div className={classes}>{props.children}</div>;

}

export default NavbarItem;