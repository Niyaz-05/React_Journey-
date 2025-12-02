import React from 'react'


function  SOn(props){
   return (
    <div style={{backgroundColor:"lightgreen", color:"black"}}>
        <h1>Son</h1>
        <p>Property Distruibuted to son Kiran is in equal portion according court </p>
        <p>{props.children}</p>
    </div>
   )
} 

function Daughter (props){
    return (
        <div style={{backgroundColor:"white",color:"pink"}}>
            <h1>Daughter</h1>
            <p> To my beloved daughter. I appreciate your kindness</p>
            <p>{props.children}</p>
        </div>
    )
}


function Will(props){
    return (
        <div>
            <h1>Will for Nagre's Son & Daughter</h1>
            <SOn>
                <p>Mehnat Karo Khud Kamao</p>
            </SOn>

            <Daughter>
                 <p>As you wish. All is your's</p>
            </Daughter>
        </div>
    )
}

const PropsChildExample = () => {
  return (

    <Will/>
  )
}

export default PropsChildExample