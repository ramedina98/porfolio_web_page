import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useFormatString from '../../hooks/useFormatString';

interface LinkItem {
    exist: boolean,
    link: string
}

interface Props{
    id: number,
    coverImg: string, 
    title: string, 
    brief: string, 
    links: {
        [key: string]: LinkItem[];
    };
    customStyle: React.CSSProperties,
    path: string,
}


const CardProject: React.FC<Props> = ({ id, coverImg, title, brief, links, customStyle, path }) => {

    /*This hook "useFormatString" helps us to put underscores between words, 
    in this case helps us to make the project name appear in the url in better way
    "visibly more aesthetic"...*/
    const nameExtensionURL = useFormatString(title); 

    return(
        <>
            <Card sx={{ width: 330 }}>
                <Link to={`${path}/${id}/${nameExtensionURL}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={coverImg}
                            alt={title}
                            style={{ 
                                minHeight: '255px',
                                maxHeight: '255px', 
                                width: '100%', 
                                objectFit: 'cover' 
                            }}
                        />
                        <CardContent
                            style={customStyle}
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {brief}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions
                    style={customStyle}
                >
                    {links[0][0].exist && (
                        <Button size="small" color="info">
                            <a 
                                href={links[0][0].link} 
                                target='_blank'
                                className='w-full'
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </Button>
                    )}
                    {links[1][0].exist && (
                        <Button size="small" color="info">
                            <a 
                                href={links[1][0].link} 
                                target='_blank'
                                className='w-full'
                            >
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </Button>
                    )}
                </CardActions>
            </Card>
        </>
    )
}

export default CardProject