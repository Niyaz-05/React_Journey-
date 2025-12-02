import { useState } from "react";

function Form() {
  const [name,  setName] = useState("Niyaz");
  const [email ,setEmail]= useState("niyaz@gmail.com");
  const [age, setAge]=useState(23);
  const [address, setAddress]=useState("Nagpur");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name: " + name+"\nEmail: "+email+"\nAge: "+age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Your Age..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
      type="text"
      placeholder="Type your address.."
      onChange={(e) => setAddress(e.target.value)}
      />
    
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
