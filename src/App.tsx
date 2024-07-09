import React, { FC, useEffect, useState } from 'react';
import './App.css';
import {usePrevious, useToggle} from "./services/hooks.api.services";



const App: FC = () => {

    const [isToggled, toggle] = useToggle();
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <>
            <div>
                <p>{isToggled ? 'True' : 'False'}</p>
                <button onClick={toggle}>Toggle</button>
            </div>
            <div>
                <p>Current count: {count}</p>
                <p>Previous count: {prevCount}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    );
};

export default App;
