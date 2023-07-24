import './styles/App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import MyButton from './components/UIcomponenst/button/MyButton';
function App() {
  const [posts, setposts] = useState([]);
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Topic"></input>
        <input type="text" placeholder="Description"></input>
        <MyButton btnText={'Add post'} />
      </form>
      <PostsList posts={posts} title={'List of posts'}></PostsList>
    </div>
  );
}

export default App;
