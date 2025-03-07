function NavbarComponent(props) {
    return (
        <nav style={{padding: "1em", backgroundColor: "#282c34", color: "white"}}>
            {props.menuItems.map((item) =>
                <a 
                    href="#_" 
                    style={{padding: "1em", marginTop: "1em", color: "white", fontWeight: "bold", minHeight: "3vh"}}
                    key={item}
                >
                    {item}
                </a>
            )}
        </nav>
    )
}

export default NavbarComponent;