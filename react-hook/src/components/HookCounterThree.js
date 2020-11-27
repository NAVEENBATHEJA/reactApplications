import React,{useState} from 'react'

function HookCounterThree() {

 const [name, setName] = useState({firstName:'',lastName:''})

 const setFirstNameHandler = (e) => {
  setName({...name,firstName: e.target.value})
 }

 const setLastNameHandler = (e) => {
  setName({ ...name, lastName: e.target.value })
 }

 return (
  <div>
   <form>
    <input 
       type="text"
       value={name.firstName} 
       onChange={setFirstNameHandler}
    />
    <input 
       type="text" 
       value={name.lastName}
       onChange={setLastNameHandler}
    />
    <h2>Your First Name is {name.firstName}</h2>
    <h2>Your last Name is {name.lastName}</h2>
   </form>
  </div>
 )
}

export default HookCounterThree
