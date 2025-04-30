import { PortfolioContext } from "@/PortfolioContext";
import { useContext } from "react";
import Loading from "@/components/Loading/Loading";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const Projects1 = () => {

    const {projectData, isProjectDataLoaded} = useContext(PortfolioContext);

    // image test
    let testProject = isProjectDataLoaded ? projectData[0] : null;

    console.log('projectData in projects1', projectData);

    // TODO show loading icon until project data loads
    return (
        <div className="page-area-1">
            <h1>Projects</h1>
            {isProjectDataLoaded ? (     
                <div>
                    {projectData.map((project, index) => (
                        <ProjectCard key={"projectCard" + index} data={project}/>
                    ))}
                    <img src={`${testProject.image}`} />
                </div>
            ) 
            : 
            (
                <Loading />
            )}

        </div>
    );
}

export default Projects1;