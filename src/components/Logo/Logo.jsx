import logoHighlight from './images/logo-highlight-primary.png';
import logoSecondary from './images/logo-secondary.png';
import logoPrimary from './images/logo-primary.png';
import logoAccent from './images/logo-accent-secondary.png';
import { Image } from '@chakra-ui/react';
import './logo.css';

const Logo = ({
    type="primary"
}) => {

    const width = type === "primary" ? "150px" : "100px";
    const logo = type === "primary" ? logoSecondary : logoSecondary;

    return (
        <Image 
        className='logo'
        src={logo} 
        width={width}
        />
    );

}

export default Logo;