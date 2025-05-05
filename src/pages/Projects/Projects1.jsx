import { PortfolioContext } from "@/PortfolioContext";
import { useContext, useRef, useState, useEffect } from "react";
import Loading from "@/components/Loading/Loading";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import "./Projects.css";
import { SimpleGrid } from "@chakra-ui/react";

const Projects1 = () => {

    const containerRef = useRef();
    const {projectData, isProjectDataLoaded} = useContext(PortfolioContext);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // for detecting changes

    useEffect(() => {
        const handleResize = () => {
            console.log('window change detected');
            setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cardGap = 30;
    const minCardWidth = 280;
    const maxCardWidth = 320;

    const [cardWidth, setCardWidth] = useState(minCardWidth);

    function getCardWidthWithoutGaps(containerWidth, howManyColumns) {
        let newWidth = (containerWidth - 40 - (howManyColumns - 1) * cardGap) / howManyColumns;
        return newWidth;
    }

    function getColumns(containerWidth) {
        // find out how many times it can be divided
        let howManyTimes = Math.floor(containerWidth / minCardWidth);

        // now account for gaps and padding
        let widthWithColumns = minCardWidth * howManyTimes + 40 + (howManyTimes - 1) * cardGap;
        if (containerWidth < widthWithColumns) {
            howManyTimes -= 1;
        }

        // adjust card width according to how much the area width allows, within boundaries
        let allowedCardWidth = getCardWidthWithoutGaps(containerWidth, howManyTimes);
        // if allowedCardWidth is bigger than max card width, change it to max card width
        if (allowedCardWidth > maxCardWidth) {
            allowedCardWidth = maxCardWidth;
        }
        // if allowedCardWidth is not the same as the current card width, change the current width
        if (allowedCardWidth !== cardWidth) {
            setCardWidth(allowedCardWidth);
        }

        return howManyTimes;
    }

    const isDefined = containerRef.current !== undefined;

    const columns = isDefined ? getColumns(containerRef.current.offsetWidth) : 3;

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

            <p className="add-top-padding"><b className="bottom-message">Visit my GitHub at the top to see even more!</b></p>
        </div>
    );
}

export default Projects1;