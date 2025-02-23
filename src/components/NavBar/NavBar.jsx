import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3 className="BrandName">Lowin Digital</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/productos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
                <NavLink to={`/category/servicios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Servicios</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;