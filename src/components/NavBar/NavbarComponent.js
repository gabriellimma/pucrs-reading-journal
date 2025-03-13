import './NavbarComponent.css';

function NavbarComponent(props) {
    return (
        <nav className={"navbar"}>
            {props.menuItems.map((item) =>
                <a 
                    href={item.menuLink} 
                    style={{padding: "1em", marginTop: "1em", color: "white", fontWeight: "bold", minHeight: "3vh"}}
                    key={item.menuName}
                >
                    {item.menuName}
                </a>
            )}
        </nav>
    )
}

export default NavbarComponent;