import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

// onClick prop'ını SelectionCard fonksiyonuna ekleyin
function SelectionCard({ iconSrc, title, subtitle, onClick, style }) {
  return (
    <Card variant="outlined" sx={{ bgcolor: '#181818', borderRadius: 2, color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', marginBottom: 2 }}>
      {/* CardActionArea'ya onClick prop'unu bağlayın */}
      <CardActionArea onClick={onClick}>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
          <Box
            component="img"
            src={iconSrc}
            sx={{
              width: 40,
              height: 40,
              marginRight: 1.5
            }}
            alt="icon"
          />
          <Stack direction="column" justifyContent="center" sx={{ overflow: 'hidden' }}>
            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 'light', marginTop: -0.5, paddingLeft: 0.3, fontSize: '0.75rem' }}>
              {subtitle}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SelectionCard;
