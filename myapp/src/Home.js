import { useState } from "react";

const Home = () => {
    const [name,setName]=useState('adesh');
    const [age,setAge]=useState(30);
    const handleClick=()=>{
        console.log('hello adesh');
        setName('gaurav');
        setAge(25);
    }

    const handleClickAgain=(name)=>{
        console.log('hello'+name);
    }

    return ( 
        <div className="Homepage">
            <h2>homepage</h2>
            <button onClick={handleClick}>click me</button>
            <p>{name} is {age} years old</p>
            <button onClick={
                ()=> handleClickAgain('adesh')
            }>click me again</button>
        </div>
     );
}
 
export default Home;