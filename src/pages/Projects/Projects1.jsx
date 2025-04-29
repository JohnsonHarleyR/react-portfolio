import { PortfolioContext } from "@/PortfolioContext";
import { useContext } from "react";


const Projects1 = () => {

    const {projectData, isProjectDataLoaded} = useContext(PortfolioContext);

    let testProject = isProjectDataLoaded ? projectData[0] : null;
    console.log('isProjectDataLoaded in Projects1?', isProjectDataLoaded);
    console.log('testProject', testProject);

    // TODO show loading icon until project data loads
    return (
        <div className="page-area-1">
            <button>Projects1</button>
            <h2>Test</h2>
            {isProjectDataLoaded ? (
                <img src={`${testProject.image}`} />
            ) 
            : 
            (
                <p>Loading</p>
            )}

        </div>
    );
}

export default Projects1;