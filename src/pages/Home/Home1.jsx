import PButton from "@/components/PButton/PButton";
import { useRef } from "react";
import ProfilePic from "@/components/ProfilePic/ProfilePic";

const Home1 = () => {

    const testBtnRef = useRef()

    function testAction() {
        alert('test button clicked');
    }

    return (
        <div className="page-area-1 home">
            <ProfilePic className="profile-pic secondary" shape="circle" />
            <h1>Welcome!</h1>
            <p>
                Hi, my name is Harley and I am a UI/full-stack software developer. I have 2.5 years of professional experience and 12+ years of self-taught experience. I completed a Java bootcamp with Grand Circus to earn a Java certificate. I also completed the Dev-X and UI-X training courses while working at United Wholesale Mortgage. In a college-level Python course in high school, I won the award of "Most Outstanding Programmer".
            </p>
            
            <p>
                Professionally, I’ve built full-stack applications using C#, Java, Python, JavaScript, React, SQL, and other languages. I have a love for UI development, especially writing JavaScript and React, which comes from my artistic background and creativity. I am sharp when it comes to using HTML and CSS to create creative and responsive web pages. I am familiar with frameworks like Material UI, Bootstrap, Chakra UI, 11ty, Spring MVC, and others. I know how to unit test in JavaScript/React.
            </p>

            <p>
                I have built many back-end applications using C#, Java, Python, and other languages too. I’m comfortable working with databases and backend services. I can write SQL to build databases and executing SQL commands to connect them to C# and Java programa. I have experience unit testing in C# and Java as well.
            </p>
            <p>
                I look forward to continue my journey of growth as a developer and artistic person, solving problems and creating software that is both powerful and user-friendly. I'm currently looking for full-time opportunities (open to contract or permanent roles) with teams where I can contribute both my technical skills and my creativity.
            </p>

            <p>
                Thank you for visiting!
            </p>
        </div>
    );
}

export default Home1;