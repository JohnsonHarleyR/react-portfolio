import { PortfolioContext } from "@/PortfolioContext";
import { useContext, useRef } from "react";
import Loading from "@/components/Loading/Loading";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import "./Projects.css";
import { SimpleGrid } from "@chakra-ui/react";

const Projects1 = () => {

    const containerRef = useRef();
    const {projectData, isProjectDataLoaded} = useContext(PortfolioContext);
    const cardGap = 30;
    const cardWidth = 280;

    function getColumns(containerWidth) {
        // find out how many times it can be divided
        let howManyTimes = Math.floor(containerWidth / cardWidth);

        // now account for gaps and padding
        let widthWithColumns = cardWidth * howManyTimes + 40 + (howManyTimes - 1) * cardGap;
        console.log('widthWithColumns', widthWithColumns);
        if (containerWidth < widthWithColumns) {
            howManyTimes -= 1;
        }

        return howManyTimes;
    }

    const isDefined = containerRef.current !== undefined;

    const columns = isDefined ? getColumns(containerRef.current.offsetWidth) : 3;

    console.log('area width: ' + (isDefined ? containerRef.current.offsetWidth : 'null') + ' columns: ' + columns);

    // TODO show loading icon until project data loads
    return (
        <div ref={containerRef} className="page-area-1 projects">
            <h1>Projects</h1>
            {isProjectDataLoaded ? (     
                <SimpleGrid  columns={columns} gap={`${cardGap}px`}>
                    {projectData.map((project, index) => (
                        <ProjectCard key={"projectCard" + index} data={project} cardWidth={cardWidth} />
                    ))}
                </SimpleGrid>
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