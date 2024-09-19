import logo from './logo.svg';
import './App.css';
import PostList from './PostList.js';
import postData from './posts'
function App() {
  return (
    <div className="App">
       <PostList data={postData}/>
    </div>
  );
}

export default App;
