import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/home';
import SinglePost from './pages/SinglePost/singlePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
