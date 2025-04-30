import { PortfolioContext } from "@/PortfolioContext";
import { useContext } from "react";
import Loading from "@/components/Loading/Loading";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import "./Projects.css";

const Projects1 = () => {

    const {projectData, isProjectDataLoaded} = useContext(PortfolioContext);

    // TODO show loading icon until project data loads
    return (
        <div className="page-area-1 projects">
            <h1>Projects</h1>
            {isProjectDataLoaded ? (     
                <div>
                    {projectData.map((project, index) => (
                        <ProjectCard key={"projectCard" + index} data={project}/>
                    ))}
                </div>
            ) 
            : 
            (
                <Loading />
            )}

            <p><b className="bottom-message">Visit my GitHub at the top to see even more!</b></p>
        </div>
    );
}

export default Projects1;