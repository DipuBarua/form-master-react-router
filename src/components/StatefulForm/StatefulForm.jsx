import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState('@gmail.com');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // validation 
        if (password.length < 6) {
            setError('password must be more then 6 or longer.')
        }
        else {
            setError('');
            console.log(name, email, password);
        }

    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
        // console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameChange} name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" value={email}
                    name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                <br />
                <input type="submit" value="submit" />
            </form>

            {
                error && <p>{error}</p>
            }

        </div>
    );
};

export default StatefulForm;