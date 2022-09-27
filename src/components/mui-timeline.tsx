import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Computer, FitnessCenter, FreeBreakfast } from '@mui/icons-material';

/*
 * Timeline - a component from Mui Lab that gives us an ability to easily describe tasks on a timeline
 *
 * 1. To create timeline you have few components: <Timeline /> as a wrapper, <TimelineItem /> for a single item, <TimelineSeparator />, <TimelineDot />, <TimelineConnector />, <TimelineContent /> and <TimelineOppositeContent />
 * 2. You can change content position for the whole timeline with position prop on <Timeline />
 * 3. You can style every part as you want
 * 4. You can insert icon into <TimelineDot />
 * */

export const MuiTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          8:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" sx={{ boxShadow: 'none' }}>
            <FreeBreakfast fontSize="small" color="primary" />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>Have breakfast</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          8:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" sx={{ boxShadow: 'none' }}>
            <FitnessCenter fontSize="small" color="primary" />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>Sport</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" sx={{ boxShadow: 'none' }}>
            <Computer fontSize="small" color="primary" />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>Start working</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
