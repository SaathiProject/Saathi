import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

const NewsCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia />
        <div>
          <Typography color='textSecondary' variant="body2" component="h2"></Typography>
          <Typography color='textSecondary' variant="body2" component="h2"></Typography>
        </div>
        <Typography gutterBottom variant="h5"></Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p"></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' ></Button>
        <Typography color='textSecondary' variant="h5"></Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard