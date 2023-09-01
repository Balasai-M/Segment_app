import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Page from "./pages/Page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
