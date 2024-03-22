import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, Box, LinearProgress, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  setTexture,
  setSelectedModel,
  setResinColor,
  setResinWidth,
  setEdgeType,
} from '../features/tableValuesSlice';
import { setLegColor, setLegModel } from '../features/legValuesSlice';

const ImageListComponent = ({ data ,actionType}) => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const [loadedImages, setLoadedImages] = useState(0);
  const [loading, setLoading] = useState(data.length > 0);

  const actionMap = {
    'TableTexture': setTexture,
    'TableModel': setSelectedModel,
    'resinColor': setResinColor,
    'ResinWidth': setResinWidth,
    'EdgeType': setEdgeType,
    'LegColor': setLegColor,
    'LegModel': setLegModel
  };

  useEffect(() => {
    if (loadedImages === data.length && data.length > 0) {
      setLoading(false);
    }
  }, [loadedImages, data.length]);

  if (!data) {
    return null;
  }

  const handleClick = (index, value) => {
    setSelected(index);
    const actionCreator = actionMap[actionType];
    if (actionCreator) {
      dispatch(actionCreator(value));
    }
  };

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const progress = Math.round((loadedImages / data.length) * 100);

  return (
    <div>
      {loading && (
        <Box sx={{ width: '100%', position: 'relative', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <LinearProgress variant="determinate" value={progress} sx={{ width: '50%' }} />
          <Typography variant="body2" color="white" sx={{ mt: 2 }}>
            Loading... {progress}%
          </Typography>
        </Box>
      )}
      <Grid container spacing={2} sx={{ display: loading ? 'none' : 'flex' }}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              onClick={() => handleClick(index, item.value)}
              elevation={selected === index ? 10 : 1}
              sx={{
                border: actionType === 'LegModel' ? (selected === index ? '3px solid #ff5600' : 'none') : (selected === index ? '2px solid white' : 'none'),
                cursor: 'pointer',
                bgcolor: actionType === 'LegModel' ? 'white' : 'transparent',
              }}
            >
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt={`Item ${index}`}
                onLoad={handleImageLoad}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ImageListComponent;
