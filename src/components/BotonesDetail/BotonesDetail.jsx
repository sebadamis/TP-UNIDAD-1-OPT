import React from 'react'
import "../ProdDetailCard/ProdDetailCard.css";
import { FaPlus, FaMinus, FaDollarSign } from "react-icons/fa";
import BotonComprar from '../BotonCompra/BotonCompra';



    class BotonesDetail extends React.Component{
        constructor(props){
            super(props);
            this.state ={
            counter : 1
            }
            this.Increment= this.Increment.bind(this);
            this.Decrement=this.Decrement.bind(this);
        }
        Increment(){
            this.setState({counter: this.state.counter + 1})
        }
        Decrement(){
            this.setState({counter : this.state.counter - 1})
        }
        render(){
            return(
                <>
                    <div className="btn-group">
                        <div className="counter-wrapper">
                            <button onClick={this.Increment} className="counter-btn">
                                <FaPlus name="add-outline" />
                            </button>
                            <span type="text" className="span" value={this.state.counter}>                                           {this.state.counter}
                            </span>
                            <button onClick={this.Decrement} className="counter-btn">
                                <FaMinus name="remove-outline" />
                            </button>
                        </div>
                        <div className="cart-btn">
                            <BotonComprar>
                                <span>
                                    <FaDollarSign name="bag-handle-outline" aria-hidden="true" />
                                </span>
                                {/* <FaDollarSign name="bag-handle-outline" aria-hidden="true" /> */}
                                {/* <span className="span">Add to cart</span> */}
                            </BotonComprar>
                        </div>
                    </div>
                </>
                                
            );
        }
    }

export default BotonesDetail