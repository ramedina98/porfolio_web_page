import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface Props{
    id: number,
    coverImg: string, 
    title: string, 
    brief: string, 
    link: string,
    gitHubLink: string,
    customStyle: React.CSSProperties,
}

//TODO: agregar dos botones, uno para ir a la web y otro para ir a github...
//TODO: tambien checar que el tamaño sea como el de Olalu's, checar su pagina...
//TODO: checar si poner algunos botones para que la gente entienda más pa donder ir... (checar más cards en material UI)

const CardProject: React.FC<Props> = ({ id, coverImg, title, brief, link, gitHubLink, customStyle }) => {

    //TODO: hay que hacer una funcion que tome el string del titulo y le ponga guion bajos entre palabras...
    return(
        <>
            <Card sx={{ maxWidth: 330 }}>
                <Link to={`/personal_project/${id}/${title}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={coverImg}
                            alt={title}
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
                    <Button size="small" color="info">
                        <a 
                            href={gitHubLink} 
                            target='_blank'
                            className='w-full'
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </Button>
                    <Button size="small" color="info">
                        <a 
                            href={link} 
                            target='_blank'
                            className='w-full'
                        >
                            <i className="fa-solid fa-link"></i>
                        </a>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardProject