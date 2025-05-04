import { Image } from "@chakra-ui/react";
import selfie from '../../images/selfie.jpg'

const ProfilePic = ({className="profile-pic primary", shape="square"}) => {

    const borderRadius = shape === "circle" ? "full" : '15px';

    return (
            <Image
                alt="Harley's Photo"
                src={selfie}
                borderRadius={borderRadius}
                border="8px solid var(--secondary-color)"
                className={className}
            />
    );
}

export default ProfilePic;