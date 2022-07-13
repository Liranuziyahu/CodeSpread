import React,{useState , useEffect } from 'react'
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';



const Posts = ({post}) => {
  const [timePost , setTimePost] = useState('')
  const [ textContent , setTextContent] = useState(true)
  useEffect(() =>{
    calculateTime(post?.time_stamp)
  })


  const calculateTime = (postTime) =>{
    let seconds = Math.floor((new Date() - new Date(postTime)) / 1000);
    //Years
    let interval = seconds / 31536000;
    if (interval > 1) return setTimePost(`${Math.floor(interval)} years ago`)
    //Month
    interval = seconds / 2592000;
    if (interval > 1) return setTimePost(`${Math.floor(interval)} month ago`)
    //Days
    interval = seconds / 86400;
    if (interval > 1) return setTimePost(`${Math.floor(interval)} day ago`)
    //Hours
    interval = seconds / 3600;
    if (interval > 1) return setTimePost(`${Math.floor(interval)} hours ago`)
    //Minutes
    interval = seconds / 60;
    if (interval > 1) return setTimePost(`${Math.floor(interval)} minutes ago`)
    //Second
    return setTimePost(`${Math.floor(interval)} second ago`)
  }

  const Like = (e) => {
    if(e.target.style.color == 'red')
        e.target.style.color = ''
      else
        e.target.style.color = 'red'
  }
  
  return (

    <Card sx={{ maxWidth: 700 }} style={{marginTop:25}}>
      
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post?.logo}
            </Avatar>
          }
          title={post?.title}
          subheader={timePost}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {post?.content} 

          {
            textContent ?
            <span style={{color:'Blue'}} onClick ={() => setTextContent(!textContent)}>Read More.</span>
            :
           (
            <div>Hello CodeSpread  <span style={{color:'Blue'}} onClick ={() => setTextContent(!textContent)}>Read Less.</span></div>
           )

          }

          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="380"
          image={post?.image}
          alt="Picture"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"  onClick = {(e)=>Like(e)}>
              <FavoriteIcon  />
          </IconButton>
          <Link to ={`${post?.id}`}> 
            <IconButton aria-label="add to favorites">
                <SendIcon  />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
  );
}

export default Posts