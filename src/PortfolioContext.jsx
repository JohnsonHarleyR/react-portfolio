import { createContext } from "react";


const PortfolioContext = createContext();

const PortfolioProvider = ({children}) => {


    return <PortfolioContext.Provider value={{}}>
        {children}
    </PortfolioContext.Provider>
}

export {PortfolioContext};
export default PortfolioProvider;