import PButton from "@/components/PButton/PButton";
import { useRef } from "react";

const Home1 = () => {

    const testBtnRef = useRef()

    function testAction() {
        alert('test button clicked');
    }

    return (
        <div className="page-area-1 home">
            <h2>Test</h2>
            <p>Here is a test <b>paragraph</b> to see what that will look like. The fox jumped over the lazy dog and all of that. Here are some more words.</p>
            <PButton onClick={testAction} isDisabled={false} size="lg" ref={testBtnRef}>Home 1</PButton>
        </div>
    );
}

export default Home1;