import { useEffect, useState } from "react";

export default function App() {
  const formData = { username: "", password: "", email: "" };
  const [formval, setFormVal] = useState(formData);
  const [isSubmit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formval));
    setSubmit(true);
    
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formval, [name]: value });
  };
  useEffect(() => {
    if(Object.keys(formError).length === 0 && isSubmit) {
      console.log(formval);
      setFormVal(formData)
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const char = /[a-zA-z]/;
    const num = /[0=9]/;
    const spChar = /[~!@#$%^&*()_+]/;
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length < 3) {
      errors.username = "Username must more then 3 latter!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length > 10 || values.password.length < 4) {
      errors.password = "Password must b/w 4-10 latter!";
    } else if (
      values.password.match(char) === null ||
      values.password.match(num) === null ||
      values.password.match(spChar) === null
    ) {
      errors.password = "Password must have char,Special Char & num!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (values.email.match(regex) === null) {
      errors.email = "Invalid Email!";
    }
    return errors;
  };
  
  return (
    <div className="App">
      <h1>Form Validation</h1>
      {
        (Object.keys(formError).length === 0 && isSubmit)? 
        <p>Form Submitted</p>:""
      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formval.username}
          onChange={handlechange}
        />
        <p>{formError.username}</p>
        <br />
        <input
          type="password"
          value={formval.password}
          name="password"
          placeholder="Password"
          onChange={handlechange}
        />
        <p>{formError.password}</p>
        <br />
        <input
          type="text"
          value={formval.email}
          name="email"
          placeholder="Email"
          onChange={handlechange}
        />
        <p>{formError.email}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
