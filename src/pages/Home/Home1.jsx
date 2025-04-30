import PButton from "@/components/PButton/PButton";
import { useRef } from "react";

const Home1 = () => {

    const testBtnRef = useRef()

    function testAction() {
        console.log('ref current', testBtnRef.current);
        alert('test button clicked');
    }

    return (
        <div className="page-area-1">
            <h2>Test</h2>
            <p>Here is a test paragraph to see what that will look like. The fox jumped over the lazy dog and all of that. Here are some more words.</p>
            <PButton action={testAction} isDisabled={false} size="lg" ref={testBtnRef}>Home 1</PButton>
        </div>
    );
}

export default Home1;