import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

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

    /*this function is simple, and its purpose is simple too: it helps us to take the title
    of the project and add underscores between words and then put it the url so that it looks 
    good in the url...*/
    const addUnderscore = (st: string): string => {
        //divide the string into words...
        const word = st.split(' ');

        //iterate over the words and join them with underscores...
        const result = word.join('_');

        return result;
    }

    return(
        <>
            <Card sx={{ width: 330 }}>
                <Link to={`${path}/${id}/${addUnderscore(title)}`}>
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