import { sortedRepos } from "@/js/constants";
import { List } from "@chakra-ui/react";

const Projects2 = () => {

    return (
        <div className="page-area-2 projects">
            <h2>GitHub Repos</h2>
            <p>See more examples of my code, sorted by language. Click below!</p>
            <List.Root as="ul">
                {sortedRepos.map((repo, index) => (
                    <List.Item key={'repo' + index}>
                        <a href={repo.url} target="_blank">{repo.language}</a>
                    </List.Item>
                ))}
            </List.Root>
            <p id="design-p"><a id="design-link" href="https://www.pinterest.com/harleyj2930/_boards/">See some of my UX and design related work here!</a></p>
        </div>
    );
}

export default Projects2;