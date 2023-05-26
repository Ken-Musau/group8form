import React, { useState } from "react";
import Form from "./components/Form";
// import './index.css';

function App() {
  const [formdata, setformdata] = useState({ username: "", password: "" });

  function handleChange(e) {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitForm(e) {
    e.preventDefault()
    console.log(formdata.username, formdata.password);
  }
  return (
    <div>
      <Form
        formdata={formdata}
        handleChange={handleChange}
        onSubmitForm={onSubmitForm}
      />
    </div>
  );
}

export default App;
