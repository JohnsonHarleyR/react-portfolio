import { createContext, useState } from "react";


const PortfolioContext = createContext();

const PortfolioProvider = ({children}) => {

    const extraPages = ["Projects"];

    function determineInitialPage() {
        let initialPage = "Home";
        for (const page of extraPages) {
            let path = window.location.pathname;
            if (path.includes(page.toLowerCase())) {
              initialPage = page;
              break;
            }
        }
        return initialPage;
    }

    const [currentPage, setCurrentPage] = useState(determineInitialPage());

    return <PortfolioContext.Provider value={{currentPage, setCurrentPage}}>
        {children}
    </PortfolioContext.Provider>
}

export {PortfolioContext};
export default PortfolioProvider;