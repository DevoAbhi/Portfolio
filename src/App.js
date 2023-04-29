import './App.css';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Projects></Projects>
    <Experience></Experience>
    <ContactMe></ContactMe>
    </>
  )
}

export default App;
