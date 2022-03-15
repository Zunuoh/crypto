import {useState, createContext} from 'react'

export const GlobalContext = createContext()

function GlobalContextProvider(props){
    const [count, setCount] = useState(0)

    function increaseCount(){
        setCount(count + 1)

    }

    function decreaseCount(){
        setCount(count - 1)

    }
    return(
        <GlobalContext.Provider value={{
            count, 
            increaseCount, 
            decreaseCount
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;