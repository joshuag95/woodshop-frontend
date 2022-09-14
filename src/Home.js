// import React, { useState } from "react";

// export default function Home(){

//     const [clientName, setClientName] = useState("");

//     function handleSubmit(e){
//         e.preventDefault();
//         fetch("/clients", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             }, 
//             body: JSON.stringify({ clientName }), 
//         })
//         .then((r) => r.json())
//         .then((client) => onLogin(client));
//     }


    
//     return (
//         <div>Potato</div>
//     )
// }