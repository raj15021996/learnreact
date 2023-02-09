import { useEffect, useState } from "react";


export default function WithdrawForm() {
  const initiateVal = {
    user: "",
    amount: "",
    email: "",
    mobile: "",
    account: "",
    conformAcc: ""
  };
  const [formData, setFormData] = useState(initiateVal);
  const [amount, setAmount] = useState(5000);
  const [isSubmit, setSubmit] = useState(false);
  const [formErr, setFormErr] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setFormErr(validate(formData));
   
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(()=>{
   if(Object.keys(formErr).length===0 && isSubmit){
    setAmount(amount - formData.amount);
    setFormData(initiateVal);
    console.log(formData);
   }
  },[formErr])

  const validate = (val) => {
    console.log(`pesa:${amount-val.amount}`);
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!val.user) {
      error.user = "empty";
    }
    if (!val.amount) {
      error.amount = "empty";
    }
    else if(amount < val.amount) {
      error.amount = "insufficient funds";
    }
    else if((amount - val.amount) < 1000) {
     alert("Balance is less then 1000");
     error.amount ="Balance is less then 1000";
    }
    
    if (!val.mobile) {
      error.mobile = "empty";
    } else if (val.mobile < 1000000000) {
      error.mobile = "invalid mobile no";
    }
    if (!val.email) {
      error.email = "empty";
    } else if (val.email.match(regex) === null) {
      error.email = "invalid email";
    }

    if (!val.account) {
      error.account = "empty";
    }

    if (!val.conformAcc) {
      error.conformAcc = "empty";
    }else if (val.account !== val.conformAcc) {
      error.conformAcc = "Not matched";
    }
    return error;
  };

  return (
    <div className="App">
      
      <h1>Balance Withdraw Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={formData.user}
          name="user"
          onChange={handleChange}
        />
        <p>{formErr.user}</p>
      
        <span>Avail amount:{amount}</span>
        <br /><br />
        <input
          type="text"
          placeholder="Amout to be deducted"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <p>{formErr.amount}</p>
        
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{formErr.email}</p>
     
        <input
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <p>{formErr.mobile}</p>
        
        <input
          type="text"
          placeholder="Account No"
          name="account"
          value={formData.account}
          onChange={handleChange}
        />
        <p>{formErr.account}</p>
       
        <input
          type="text"
          placeholder="Conform Account no"
          name="conformAcc"
          value={formData.conformAcc}
          onChange={handleChange}
        />
        <p>{formErr.conformAcc}</p>
       
        <button type="submit">Submit</button>
      </form>
      {
        (Object.keys(formErr).length===0 && isSubmit)?
        <p>Successful Withdraw</p>:''
      }
    </div>
  );
}
