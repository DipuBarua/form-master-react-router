// [to create custom hook you have must write 'use' as a prefix]
// [a hook returns 2 elements. first one is value, other one is a function]

import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    // to do more simplified
    const onChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange
    }


    // const handleChange = e => {
    //     setValue(e.target.value);
    // }

    // return [value, handleChange];
}

export default useInputState;