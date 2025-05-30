import "./ProjectCard.css";
import { Card, Image, Text } from "@chakra-ui/react";
import PButton from "../PButton/PButton";

const ProjectCard = ({data, cardWidth=280}) => {

    const {image, title, languages, description, codeLink, hasWebLink, webLink} = data;

    function mapLanguages() {
        let languagesString = '';
        for (let i = 0; i < languages.length; i++) {
            let stringToAdd = i === 0 ? languages[i] : `, ${languages[i]}`;
            languagesString += stringToAdd;
        }
        return languagesString;
    }

    function createLinkButton(text, link, isDisabled = false) {
        let modifiedLink = isDisabled ? "" : link;
        let linkArea = !isDisabled ? 
            (<a className="button-link-area" href={modifiedLink} target="_blank">{text}</a>)
            : (<>{text}</>)
        return (
            <PButton size="md" isDisabled={isDisabled}>
                {linkArea}
            </PButton>
        );
    }

    function getButtons() {
        return (
            <>
                {createLinkButton("See Code", codeLink)}
                {createLinkButton("Preview", webLink, !hasWebLink)}
            </>
        );
    }
    
    return (
        <>
            <Card.Root className="card-root" width={`${cardWidth}px`} variant="elevated">
                <Card.Body gap="2" className="project-card">
                    <Card.Title className="card-title">{title}</Card.Title>
                    <Image src={image} />
                    <Text className="text-color">
                        <b>Languages: </b>
                        <br></br>
                        {mapLanguages()}
                    </Text>
                    <Card.Description className="description text-color">
                        {description}
                    </Card.Description>
                    <Card.Footer className="increase-top-margin" justifyContent="center">
                        {getButtons()}
                    </Card.Footer>
                    
                </Card.Body>
            </Card.Root>
        </>
    );
}

export default ProjectCard;