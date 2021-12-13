import './PostCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const PostCard = ({ title, body, image, posted, _id, likedBy, dislikedBy, handleDeletePost, handleLike, handleDislike }) =>{



  return (
    <>
      <Card
       sx={{ maxWidth: 345 }}
        
      >
        {/* <Typography gutterBottom variant="h5" component="div">
          {title}

        </Typography> */}
        <Typography variant="h5" component="div">
          {body}
        </Typography>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent
          >
          
          
          
        </CardContent>
       
        <CardActions>
          <Button size="small"
            onClick={() => console.log('comment pop up here')}
          >comment</Button>
          <Button size="small"
          onClick={()=>handleLike(_id)}
          >Like count:{likedBy  ? likedBy.length : <>0</>}</Button>
          <Button size="small"
            onClick={() => handleDislike(_id)}>Dislike count:{dislikedBy ? dislikedBy.length:<>0</>}</Button>
          <Button size="small"
            onClick={() => handleDeletePost(_id)}>Delete </Button>
         
        </CardActions>
      </Card>

    
    </>
  )
  
  }
 export default PostCard