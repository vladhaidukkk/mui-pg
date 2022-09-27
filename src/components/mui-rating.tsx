import { ChangeEvent, FC, useState, ReactElement } from 'react';
import { Box, Rating, Stack, Typography, IconContainerProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

/*
 * Rating - component for evaluating something
 *
 * 1. It has a lot of common props (actually can be considered part of the forms), but also has unique props
 * 2. The most important props are: readOnly, precision, icon, emptyIcon and iconContainerComponent for different icons in 1 <Rating />
 * */

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: Record<number, { icon: ReactElement; label: string }> = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

const IconContainer: FC<IconContainerProps> = ({ value, ...rest }) => {
  return <span {...rest}>{customIcons[value].icon}</span>;
};

export const MuiRating = () => {
  const [appRating, setAppRating] = useState<number | null>(null);
  const [loveRating, setLoveRating] = useState<number | null>(2.5);
  const [pleasureRating, setPleasureRating] = useState<number | null>(3);

  const handleChangeAppRating = (_event: ChangeEvent<{}>, value: number | null) => {
    setAppRating(value);
  };

  const handleChangeLoveRating = (_event: ChangeEvent<{}>, value: number | null) => {
    setLoveRating(value);
  };

  const handleChangePleasureRating = (_event: ChangeEvent<{}>, value: number | null) => {
    setPleasureRating(value);
  };

  return (
    <Stack spacing={2} p={2}>
      <Box>
        <Typography>App Rating</Typography>
        <Rating value={appRating} onChange={handleChangeAppRating} size="large" />
      </Box>
      <Box>
        <Typography>Love Rating</Typography>
        <Rating
          value={loveRating}
          onChange={handleChangeLoveRating}
          precision={0.5}
          icon={<Favorite color="error" fontSize="inherit" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Box>
          <Typography variant="subtitle2">App rating</Typography>
          <Rating value={appRating} size="small" readOnly />
        </Box>
        <Box>
          <Typography variant="subtitle2">Love rating</Typography>
          <Rating
            value={loveRating}
            size="small"
            precision={0.5}
            icon={<Favorite color="error" fontSize="inherit" />}
            emptyIcon={<FavoriteBorder fontSize="inherit" />}
            readOnly
          />
        </Box>
      </Stack>
      <Box>
        <Typography>Pleasure Rating</Typography>
        <StyledRating
          value={pleasureRating}
          onChange={handleChangePleasureRating}
          IconContainerComponent={IconContainer}
          getLabelText={(value: number) => customIcons[value].label}
          highlightSelectedOnly
        />
      </Box>
    </Stack>
  );
};
