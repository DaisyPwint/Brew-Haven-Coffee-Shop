import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
    totalPrice: 0
}

const addItemToCart = (state,item) => {
    let newItem = {
        id: nanoid(),
        image: item.image,
        name: item.name,
        type: item.type,
        price: item.price,
        amount: parseInt(item.amount),
        options: item.options
    }

    const items = [...state.items,newItem];

    const uniqueItems = items.reduce((uniqueObj, item) => {
        if (item.options === undefined || (Array.isArray(item.options) && item.options.length === 0)) {
          // Check if there's already an item for empty options
          if (!uniqueObj.emptyOptionsItem) {
            uniqueObj.emptyOptionsItem = { ...item, amount: 0 };
          }
          uniqueObj.emptyOptionsItem.amount += item.amount;
        } else {
          const sameValue = item.name + JSON.stringify(item.options);
          // if same item name and option , sum their amount ,else if show only their item value
          if (uniqueObj[sameValue]) {
            uniqueObj[sameValue].amount += item.amount;
          } else {
            uniqueObj[sameValue] = { ...item };
          }
          
        }
        return uniqueObj;
      }, {})

      const cartItems = Object.values(uniqueItems);
      
    return {
        ...state,
        items: cartItems,
        totalAmount: state.totalAmount + newItem.amount,
        totalPrice: state.totalPrice + newItem.price * newItem.amount
    }
}

const updateCartItem = (state,item,type) => {
    const itemIndex = state.items.findIndex((cart) => cart.id === item.id);
    
    const existingItem = state.items[itemIndex];

    let updatedItems;
    if(existingItem){
        switch(type){
            case 'increase':
                updatedItems = [...state.items];
                updatedItems[itemIndex] = {...existingItem,amount: existingItem.amount + 1};
                break;
            case 'decrease': 
                if(existingItem.amount === 1){
                    updatedItems = state.items.filter(cart => cart.id !== item.id);
                }else{
                    updatedItems = [...state.items];
                    updatedItems[itemIndex] = {...existingItem,amount: existingItem.amount -1};
                }
                break;
            default:
                updatedItems = state.items;
                break;
        }
    }else{
        updatedItems = state.items;
    }

    const updatedAmount = updatedItems.reduce((total,item) => total + item.amount,0);
    const updatedPrice = updatedItems.reduce((total,item) => total + item.price * item.amount,0);

    return {
        ...state,
        items: updatedItems,
        totalAmount: updatedAmount,
        totalPrice: updatedPrice
    }

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,{payload}) => addItemToCart(state,payload),
        removeFromCart: (state,{payload}) => {
            console.log(payload);
            const item = payload;
            const filteredItems = state.items.filter((cart) => cart.id !== item.id);

            return {
                ...state,
                items: filteredItems,
                totalAmount: state.totalAmount - item.amount
            }
        },
        increase: (state,{payload}) => updateCartItem(state,payload,'increase'),
        decrease: (state,{payload}) => updateCartItem(state,payload,'decrease')
    }
})

export const {addToCart,removeFromCart,increase,decrease} = cartSlice.actions;

export default cartSlice.reducer;
