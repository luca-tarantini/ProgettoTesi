import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';



export default function DiscreteSlider(props) {

    function speedChange(e) {
        props.setSpeed(e.target.value);
    }
    
  return (

    <Box sx={{ width: 300 }}>
      <Stack>
        <Slider
          aria-label="Temperature"
          defaultValue={props.speed}
          value={props.speed}
          valueLabelDisplay="auto"
          onChange={speedChange}
          step={0.0005}
          marks
          min={0}
          max={1}
        />
        Concentrazione {props.player}: {props.speed}
      </Stack>
      

    </Box>
  );
}