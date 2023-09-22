import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('abcde')

    const emailState = useInputState('Rajani@gamil.com')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('change data:', emailState.value);
    }
    return (
        <div>
            <h2>Form:4 -using Custom Hook</h2>

            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;