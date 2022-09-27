import { SyntheticEvent, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

/*
 * Accordion - a component which allow user to show and hide sections of related content on a page
 *
 * 1. To create single accordion we should use 3 components: <Accordion /> - a wrapper, <AccordionSummary /> - a header, <AccordionDetails /> - hidden information
 * 2. If we want to create a section with few accordions we can just place them next to each other
 * 3. To connect all accordions we can use expended prop and custom state with id of opened accordion
 * */

export const MuiAccordion = () => {
  const [expandedId, setExpandedId] = useState<string>();

  const handleChange = (id: string) => (event: SyntheticEvent, expanded: boolean) => {
    setExpandedId(expanded ? id : undefined);
  };

  return (
    <Box p={2}>
      <Accordion elevation={2} onChange={handleChange('accordion1')} expanded={expandedId === 'accordion1'}>
        <AccordionSummary id="accordion1" aria-controls="accordion1-content" expandIcon={<ExpandMore />}>
          <Typography variant="subtitle2">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur corporis culpa, deleniti enim esse,
            expedita fuga hic iusto laboriosam libero nobis obcaecati omnis porro quo rerum vel. Magni, ut.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={2} onChange={handleChange('accordion2')} expanded={expandedId === 'accordion2'}>
        <AccordionSummary id="accordion2" aria-controls="accordion2-content" expandIcon={<ExpandMore />}>
          <Typography variant="subtitle2">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur corporis culpa, deleniti enim esse,
            expedita fuga hic iusto laboriosam libero nobis obcaecati omnis porro quo rerum vel. Magni, ut.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={2} onChange={handleChange('accordion3')} expanded={expandedId === 'accordion3'}>
        <AccordionSummary id="accordion3" aria-controls="accordion3-content" expandIcon={<ExpandMore />}>
          <Typography variant="subtitle2">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur corporis culpa, deleniti enim esse,
            expedita fuga hic iusto laboriosam libero nobis obcaecati omnis porro quo rerum vel. Magni, ut.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
