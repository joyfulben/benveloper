import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import $ from 'jquery';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function ProgressBar(){
  const [progress, setProgress] = useState(0);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#D89C60' : '#308fe8',
    },
  }));

  useEffect(() => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    $(window).on('scroll', function(e){
      e.preventDefault();
      let winScroll = $(window).scrollTop();
      let scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    })
  }, []);

  return (
    <div className='progress-bar'>
        <Box sx={{ height: '100%' }}>
        <BorderLinearProgress variant="determinate" value={progress} />
        </Box>
    </div>
  );
}
