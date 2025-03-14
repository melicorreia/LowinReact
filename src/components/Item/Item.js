import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            
            <Link to={`/item/${id}`} className='Option'><button className='ItemFooter'>Ver detalle</button></Link>
            
        </article>
    )
}

export default Item;