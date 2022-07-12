import * as React from 'react';
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
import MoreVertIcon from '@mui/icons-material/MoreVert';




const Posts = ({post}) => {
  const Like = (e) => {
    if(e.target.style.color == 'red')
        e.target.style.color = ''
      else
        e.target.style.color = 'red'
  }
  return (

    <Card sx={{ maxWidth: 345 }} style={{marginTop:20}}>
      <Link to ={`${post?.id}`}> 
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post?.logo}
            </Avatar>
          }
  
          title={post?.title}
          subheader={post?.time_stamp}
        />
        <CardMedia
          component="img"
          height="194"
          image={post?.image}
          alt="Picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {post?.id}
          </Typography>
        </CardContent>
      </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"  onClick = {(e)=>Like(e)}>
            <FavoriteIcon  />
          </IconButton>
        </CardActions>
      </Card>
  );
}

export default Posts