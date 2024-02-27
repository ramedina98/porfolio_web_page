

import React from 'react';
import { Card, CardContent, Skeleton, Button, CardActionArea, CardActions } from '@mui/material';


const CardSkeleton: React.FC = () => {
    return (
        <Card sx={{ width: 330}}>
            <CardActionArea>
                <Skeleton variant="rectangular" height={160} />
                <CardContent>
                    <Skeleton height={40} width="80%" style={{ marginBottom: 2 }} />
                    <Skeleton height={80} />
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size="small" color="info">
                <Skeleton height={40} width={40} />
                </Button>
                <Button size="small" color="info">
                <Skeleton height={40} width={40} />
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardSkeleton;