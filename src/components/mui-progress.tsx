import { useState, useRef, useEffect } from 'react';
import { CircularProgress, LinearProgress, Stack } from '@mui/material';

/*
 * Progress - a component to indicate progress of some process
 *
 * 1. We have 2 components for this situation: <CircularProgress /> and <LinearProgress />
 * 2. Each progress component have mostly the same props
 * 3. By default, they are infinite, but we can change variant to determinate, and they will show progress which specified in value prop
 * 4. <LinearProgress /> is more powerful and has more variants, so we can create something like video loader or even more complicated things
 * */

export const MuiProgress = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={4} p={2}>
      <Stack direction="row" spacing={2}>
        <CircularProgress />
        <CircularProgress color="info" />
        <CircularProgress color="success" variant="determinate" value={70} />
      </Stack>

      <Stack spacing={2}>
        <LinearProgress />
        <LinearProgress color="info" />
        <LinearProgress color="success" variant="determinate" value={70} />
        <LinearProgress color="secondary" variant="buffer" value={progress} valueBuffer={buffer} />
      </Stack>
    </Stack>
  );
};
