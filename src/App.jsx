import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>
      <h1>Student List</h1>

      <StudentCard 
        name="Niyaz" 
        profession="Frontend Developer" 
        skills="JS, React" 
      />

      <StudentCard 
        name="Kiran" 
        profession="Backend Developer" 
        skills="Node, Express" 
      />

      <StudentCard 
        name="Hariom" 
        profession="UI/UX Designer" 
        skills="Figma, Canva" 
      />
    </div>
  );
}

export default App;
