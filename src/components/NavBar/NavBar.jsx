import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h3>Lowin Digital</h3>
            <div>
                <button>Servicios</button>
                <button>Plantillas</button>
                <button>Descargables</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;