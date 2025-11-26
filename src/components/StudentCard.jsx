function StudentCard({ name, profession, skills }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h2>{name}</h2>
      <p>{profession}</p>
      <p>Skills: {skills}</p>
    </div>
  );
}

export default StudentCard;
