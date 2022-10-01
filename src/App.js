
import './App.css';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import NavBar from './components/NavBar/NavBar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <h1 className="text-3xl font-bold underline">This is a big big header</h1>
     <p>This is just paragraph</p>
     <Pricing></Pricing>
     <AssignmentMarks></AssignmentMarks>
     <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
