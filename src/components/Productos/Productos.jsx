import React from 'react'
import "./Productos.css"
import BotonComprar from '../BotonCompra/BotonCompra'
import { NavLink } from 'react-router'

export const Productos2 = ({id, titulo, img, precioAntes, precioFinal, descuento}) => {
    return (
    <>
        <body className='body-card'>
            <div className="card-container">
                <div className="card">
                    <div className="imgBox">
                        <span className='discount'>-{descuento}%</span>
                        <img
                        src={img}
                        alt={id}
                        className="mouse"
                        />
                    </div>
                    <div className="contentBox">
                        <h3>{titulo}</h3>
                        <h2 className="price">
                        <span className='preciof'>${precioFinal}</span><span className='precioa'>${precioAntes}</span>
                        </h2>
                        <div className="botones-card">
                            <button className="button"><BotonComprar type="button" >COMPRAR</BotonComprar></button>
                            <button className="button"><NavLink to={`/products/${id}`}>Ver detalle</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </>

    )
}

export default Productos2