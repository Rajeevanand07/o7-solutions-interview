import { createContext, useState } from "react";

const OrderContext = createContext(null);
const OrderContextProvider = ({children}) => {
    const [order, setOrder] = useState([]);
    const [stationaryTotal, setStationaryTotal] = useState(0);
    const [printingTotal, setPrintingTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    
    return (
        <OrderContext.Provider value={{order, setOrder, stationaryTotal, setStationaryTotal, printingTotal, setPrintingTotal, discount, setDiscount}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider