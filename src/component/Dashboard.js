import React,{useState , useEffect } from 'react'
import { useParams , Link } from 'react-router-dom';
import axios from 'axios'
import Posts from './Posts'
import HomeIcon from '@mui/icons-material/Home';
import { padding } from '@mui/system';

const Dashboard = () => {
  const [posts , setPosts] = useState({})
  let { userId } = useParams();
  const [postID , setPostID] = useState(userId)


  useEffect( ()=>{
      setPostID(userId)
      axios.get('http://localhost:3000/home_work')
      .then(data => setPosts(data.data))
  },[userId])
  
  return (
    <>

      <div style={{position:'absolute',left:"calc(50% - 350px)"}}>
      {
        postID != undefined && posts.length > 0 ?
        <div>
          <div style={{padding:10}}>
              <Link to="/">
                <HomeIcon fontSize='large'/>
              </Link>
          </div>
        <Posts key ={posts[postID-1]?.id} post = {posts[postID-1]} />
        </div>
         :
        posts.length > 0 ?
        posts?.map(post => <Posts key ={post?.id} post = {post}/>):null
      }    
    </div>
    </>

  )
}

export default Dashboard