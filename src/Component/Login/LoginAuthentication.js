import { useEffect, useState } from "react";
import LoginHome from './LoginHome'

export default function LoginAuthentication() {
    const initialVal = {
        username: "",
        password: "",
    };
    const [input, setInput] = useState(initialVal);
    const [err, setErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(validate(input));
        setIsSubmit(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };
    
    const validate = (values) => {
        const error = {};

        if (!values.username) {
            error.username = "empty input box";
        } else if (values.username.length < 3) {
            error.username = "must greater then 3 letter";
        } else if (values.username !== 'raj') {
            error.username = 'worng username';
        }
        if (!values.password) {
            error.password = "empty input box";
        } else if (values.password !== '12345') {
            error.password = 'Worng password'
        }

        return error;
    };

    const user = localStorage.getItem("Username");
    const pass = localStorage.getItem("Password");
    useEffect(() => {
        if (Object.keys(err).length === 0 && isSubmit) {
            console.log(input);
            if (input.username === "raj" && input.password === "12345") {
                localStorage.setItem("Username", "raj");
                localStorage.setItem("Password", "12345");
            }
            setInput(initialVal);
        }
    }, [err]);
    return (
        <div className="App">
            {Object.keys(err).length === 0 && isSubmit ? (
                <span>Log in Successfully</span>
            ) : (
                ""
            )}
            {user && pass ? (
                <LoginHome />
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>Log in form</h1>
                    <input
                        type="text"
                        name="username"
                        value={input.username}
                        placeholder="username"
                        onChange={handleChange}
                    />
                    <p>{err.username}</p>
                    <input
                        type="password"
                        name="password"
                        value={input.password}
                        placeholder="password"
                        onChange={handleChange}
                    />
                    <p>{err.password}</p>

                    <button type="submit">Log in</button>
                </form>
            )}
        </div>
    );
}
