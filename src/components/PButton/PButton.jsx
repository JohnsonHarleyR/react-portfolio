import { Button } from "@chakra-ui/react";
import './PButton.css';

const PButton = ({
    children,
    action = () => {},
    className = "p-button",
    isDisabled = false,
    size = "md", // xs, sm, md, lg, xl
    ref = null
}) => {

    const newClassName = isDisabled ? `${className} disabled` : className;

    return (
        <Button
         className={newClassName}
         onClick={action}
         disabled={isDisabled}
         size={size}
         ref={ref}>
            {children}
        </Button>
    );

}

export default PButton;