import { useState, useRef, useEffect } from 'react';


const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState(initialValue);

    const toggleValue = () => {
        setValue(prevValue => !prevValue);
    };

    return [value, toggleValue];
}

const usePrevious = <T,>(value: T): T | undefined => {

    const ref = useRef<T>();

    useEffect(() => {

        ref.current = value;
    }, [value]);

    return ref.current;
};


export {
    useToggle,
    usePrevious
}