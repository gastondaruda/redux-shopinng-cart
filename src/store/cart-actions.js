import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchData = () => {
    return async(dispatch) => {
        const fetchHandler = async() => {
            const res = await fetch("'https://redux-http-85f3f-default-rtdb.firebaseio.com/cartItems.json'")

            const data = await res.json()

            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        }
        catch(err){
            dispatch(uiActions.showNotificacion({
                open: true,
                message: "Sending Request Failed",
                type: "error"
            }))
        }
    }
}
export const sendCartData = (cart) => {
    return async(dispatch) => {
        dispatch(uiActions.showNotificacion({
            open: true,
            message: "Sending request",
            type: "warning",
        })
        );
        const sendRequest = async () => {
      // send state as Sending request
    
        const res = await fetch('https://redux-http-85f3f-default-rtdb.firebaseio.com/cartItems.json', {
            method: "PUT",
            body: JSON.stringify(cart),
        }
        );
        const data = await res.json();
        //send state request as Request is successfll
        dispatch(uiActions.showNotificacion({
        open: true,
        message: "Sent Request to Database Successfully",
        type: "success",
        })
        ); 
    };
    try{
        await sendRequest()
    }catch (err){
        dispatch(uiActions.showNotificacion({
            open: true,
            message: "Sending Request Failed",
            type: "error"
        }))
    }
    }
}