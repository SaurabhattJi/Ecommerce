import React from 'react'
import FormatPrice from './helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from './context/cart_context';

const CartItem = ({id,name,price,image,color,amount}) => {
    const setDecrease = () => {
        // amount > 1 ? setAmount(amount-1) : setAmount(1);
    };
    const setIncrease = () => {
        // amount < stock ? setAmount(amount+1) : setAmount(stock);
    };

    const {removeItem} = useCartContext();
  return (
    <div className='card_heading grid grid-five-column'>
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>Color:</p>
                    <div className="color-style" style={{backgroundColor:color , color:color}}></div>
                </div>
            </div>
        </div>
        <div className='cart-hide'>
            <p><FormatPrice price={price}/></p>
        </div>
        <CartAmountToggle
    amount={amount}
    setDecrease={setDecrease}
    setIncrease={setIncrease} 
    />

    <div className="cart-hide">
        <p><FormatPrice price={price*amount}/></p>
    </div>

    <div>
        <FaTrash className='remove_icon' onClick={()=>removeItem(id)}/>
    </div>

    </div>
  )
}

export default CartItem;
