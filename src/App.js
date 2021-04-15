
import './App.css';
import ProfileComponent from "../src/profil/Profil.js";

function App() {
  const fullname = "Najmeddine Gaaloul"
  const bio = "etudiant in Go My Code"
  const profession = "etudiant"
  const src = "./react_logo.png"
  const alertMe = () => {
    alert('Gaaloul Najmeddine')
  }
  
  return (
    <div className="App">
      <ProfileComponent fullname={fullname} bio={bio} profession={profession} src={src} alertMe={alertMe} />
    </div>
  );
}

export default App;