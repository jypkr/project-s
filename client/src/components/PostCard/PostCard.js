import './PostCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostCard = ({ title, body, image, posted, _id, handleDeletePost, handleLike, handleDislike }) =>{

  

  return (
    <>
      <Card
       sx={{ maxWidth: 345 }}
        
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent
          >
          <Typography  gutterBottom variant="h5" component="div">
            {title}
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"
          onClick={()=>handleLike(_id)}
          >Like</Button>
          <Button size="small"
            onClick={() => handleDislike(_id)}>Dislike</Button>
          <Button size="small"
            onClick={() => handleDeletePost(_id)}>Delete</Button>
         
        </CardActions>
      </Card>

    
    </>
  )
  
  }
 export default PostCard