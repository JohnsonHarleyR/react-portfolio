import logoHighlight from './images/logo-highlight-primary.png';
import logoSecondary from './images/logo-secondary.png';
import logoPrimary from './images/logo-primary.png';
import { Image } from '@chakra-ui/react';

const Logo = ({
    type="primary"
}) => {

    const width = type === "primary" ? "150px" : "50px";
    const logo = type === "primary" ? logoSecondary : logoHighlight;

    return (
        <Image 
        src={logo} 
        width={width}
        />
    );

}

export default Logo;