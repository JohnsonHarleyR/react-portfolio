import { createContext, useEffect, useState } from "react";
import { fetchAllProjectData } from "./js/fetch-data";


const PortfolioContext = createContext();

const PortfolioProvider = ({children}) => {

    const extraPages = ["Projects", "Contact"];

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
    const [projectData, setProjectData] = useState(null);

    const isProjectDataLoaded = projectData !== null;

    useEffect(() => {
        //load the project data
        fetchAllProjectData(setProjectData);
    }, []);

    useEffect(() => {
        console.log('projectData', projectData);
    }, 
    [projectData]);

    return <PortfolioContext.Provider value={{
        currentPage, setCurrentPage, projectData, isProjectDataLoaded,
        }}>
        {children}
    </PortfolioContext.Provider>
}

export {PortfolioContext};
export default PortfolioProvider;