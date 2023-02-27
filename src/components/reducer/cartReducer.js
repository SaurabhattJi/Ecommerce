const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
      let cartProduct;

      let existingProduct = state.cart.find((curItem)=>
        curItem.id === id + color
      )
      if(existingProduct){
        let updatedProduct = state.cart.map((curlElem)=>{
          if(curlElem.id === id+color){
            let newAmount = curlElem.amount + amount;
            if(newAmount>=curlElem.max){
              newAmount = curlElem.max
            }
          return{
            ...curlElem,
            amount:newAmount,
          }
        }else{
          return curlElem;
        }
        })
        return{
          ...state,
          cart: updatedProduct,
        };

      }else{
      cartProduct= {
        id: id + color,
        name: product.name,
        color,
        amount,
        image : product.image[0].url,
        price: product.price,
        max: product.stock
      };
      return{
        ...state,
        cart:[...state.cart,cartProduct]
      };
    }
  }

  if(action.type === "SET_DECREMENT"){
    let updatedProduct = state.cart.map((curlElem)=>{
      if(curlElem.id === action.payload){
        let decrementAmount = curlElem.amount-1;
        if(decrementAmount <= 0){
          decrementAmount = 1;
        }
        return{
          ...curlElem,
          amount:decrementAmount,
        }
      }else{
        return curlElem;
      }
    })
    return {
      ...state,
      cart:updatedProduct,
    }
  }
  if(action.type === "SET_INCREMENT"){
    let updatedProduct = state.cart.map((curlElem)=>{
      if(curlElem.id === action.payload){
        let incrementAmount = curlElem.amount+1;
        if(incrementAmount >= curlElem.max){
          incrementAmount = curlElem.max;
        }
        return{
          ...curlElem,
          amount:incrementAmount,
        }
      }else{
        return curlElem;
      }
    })
    return {
      ...state,
      cart:updatedProduct,
    }
  }
       
    if(action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
          (curItem) => curItem.id !== action.payload
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
    if(action.type === "CLEAR_CART"){
      return{
        ...state,
        cart:[],
      }
    }

   
  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

      return state;
    }


export default cartReducer
