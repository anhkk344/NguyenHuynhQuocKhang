import React from "react";
import { Avatar,
Card,
CardContent,
CardHeader,
CardMedia,
IconButton,
Typography, } from "@material-ui/core";
import MoreVerIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import useStyless from './styles';



export default function Post({post}) {
    const classes = useStyless();
    

    return(
        <Card>
            <CardHeader
            avatar = {<Avatar>K</Avatar>}
            title="khang"
            subheader={moment(post.updateAt).format('HH:MM MMM DD,YYYY')}
            action={
                <IconButton>
                    <MoreVerIcon></MoreVerIcon>
                </IconButton>
            }
            >
            </CardHeader>
            <CardMedia
            image={post.}
            title='Title'
            className={classes.media}
            >
            </CardMedia>
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography variant="body2" component='p' color='textSecondary'>
                    {post.content}
                </Typography>
            </CardContent>
        </Card>
    );
}
