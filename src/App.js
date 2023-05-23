import { Route, Routes, BrowserRouter} from "react-router-dom";
import StudentRegistration from "./screens/StudentRegistration";
import StudentProfile from "./screens/StudentProfile";
import StudentProfileUpdate from "./screens/StudentProfileUpdate";
import Home from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<StudentRegistration/>}/>
        <Route path="/profile" element={<StudentProfile/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/studentUpdate" element={<StudentProfileUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
