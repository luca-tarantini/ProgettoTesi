import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';




export default function DiscreteSlider(props) {

    function speedChange(e) {
        props.setSpeed(e.target.value);
    }
    
  return (

    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={props.speed}
        value={props.speed}
        valueLabelDisplay="auto"
        onChange={speedChange}
        step={0.5}
        marks
        min={0.5}
        max={5}
      />
      Velocità {props.player}
    </Box>
  );
}