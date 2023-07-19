import { useState, useCallback } from 'react';

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handler = useCallback((event) => {
        setValue(event.target.value);
        console.log(value);
    }, []);

    return [value, handler];
}

export default useInput;
