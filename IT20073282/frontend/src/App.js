import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Resources from './pages/Resources.js';
// import Profile from './pages/Profile.js';
import ViewMentor from './pages/ViewMentor.js'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MentorRegister from './pages/MentorRegister.js';
import Form from './components/Form.js';
import FormEdit from './components/FormEdit'
import Registration from './pages/Registration.js';
import DeleteProfile from './pages/DeleteProfile.js'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<ViewMentor />} />
          <Route path="/update" element={<FormEdit />} />
          <Route path="/mentorregister" element={<MentorRegister />} />
          <Route path="/form" element={<Form />} />
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path ='/delete' element={<DeleteProfile/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
