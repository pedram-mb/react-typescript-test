import React, { useState } from "react";

interface person{
    name: string,
    age: number | string,
}

const TUseState = () => {
  const [name, setName] = useState("pedram");
//   set generics for useState
  const [age, setAge] = useState<string | number>(23); 
//   interFace in useState
const [user , setUser] = useState<person | null>(null)


  const HandleSetName = (name: string) => {
    setName(name)
  };
  const HandleSetAge = (age: number | string) => {
    setAge(age)
  };

  const HandleSetUser = (user: person)=>{
    setUser(user)
  }
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <button onClick={()=>HandleSetName('pedram.mb')}>setName</button>
      <button onClick={()=>HandleSetAge(24)}>setAge</button>
      <hr></hr>
      <h2>{user?.name} {user?.age}</h2>
      <button onClick={()=>HandleSetUser({name:'ahmad' , age: 20})}>serUser</button>
    </>
  );
};

export default TUseState;
