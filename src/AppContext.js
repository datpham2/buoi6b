import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
export const AppContext = createContext({})
export const AppProvider = function({children}) {
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState()
    const [cart, setCart] = useState([])

    
    useEffect(function() {
        axios.get('https://66a08cbc7053166bcabbc9a5.mockapi.io/student')
        .then(function(response) {
            setProducts(response.data)
        })
    }, [])
    function addToCart(id) {
        const product = products.find(function(item) {
            return item.id === id
        })

        setCart([...cart, product])
    }

    return <AppContext.Provider value={{count, setCount, addToCart}}>
        {children}
    </AppContext.Provider>
}