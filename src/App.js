import React, {useState} from 'react'
import Form from './components/Form'
 
function App() {
const [formdata,setformdata] = useState({username:'',password:''})

console.log(formdata);
function handleChange(e){
    console.log(e.target.name);
setformdata({
    ...formdata,[e.target.name]:(e.target.value)
})
}
  return (
    <div>
        <Form 
        formdata={formdata}
        handleChange= {handleChange}

        />     
    </div>
  )
}

export default App