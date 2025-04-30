import { Button } from "@chakra-ui/react";
import './PButton.css';

const PButton = ({
    children,
    onClick = () => {},
    addedClassNames = "",
    isDisabled = false,
    size = "md", // xs, sm, md, lg, xl
    ref = null
}) => {

    const newClassName = isDisabled ? `p-button ${addedClassNames} disabled` : 'p-button ${addedClassNames}';

    return (
        <Button
         className={newClassName}
         onClick={onClick}
         disabled={isDisabled}
         size={size}
         ref={ref}>
            {children}
        </Button>
    );

}

export default PButton;