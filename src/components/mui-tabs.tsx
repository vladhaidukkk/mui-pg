import { SyntheticEvent, useState } from 'react';
import { Box, Typography, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Bookmark, Person, Videocam } from '@mui/icons-material';

/*
 * Tabs - a navigation component that allows to easily switch between different views
 *
 * 1. Default Mui has <Tabs /> and <Tab /> components, but Mui Lab gives us few more components which make our life easier: <TabContext>, <TabList /> and <TabPanel />
 * 2. <TabList /> is a replacement for <Tabs /> to contains <Tab />'s
 * 3. With components from Lab we have logic of communication realized from scratch, so we do not need to realize own components
 * 4. We can control current tab state with value and onChange props on <Tabs /> or <TabList />
 * 5. We can change color, position of tabs, also we can make them scrollable, can add icons to any position of tabs or just use icons without labels, we also can make them vertical
 * 6. Tabs actually is very powerful component, and so we can do a lot of functionality with them, just explore docs
 * */

export const MuiTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (_event: SyntheticEvent, newTab: string) => {
    setValue(newTab);
  };

  return (
    <Box width={400} p={2}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            alia-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            variant="scrollable"
          >
            <Tab label="Bookmarks" value="1" icon={<Bookmark fontSize="small" />} iconPosition="start" />
            <Tab label="Videos" value="2" icon={<Videocam fontSize="small" />} iconPosition="start" />
            <Tab label="Profile" value="3" icon={<Person fontSize="small" />} iconPosition="start" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Typography>Bookmarks</Typography>
        </TabPanel>
        <TabPanel value="2">
          <Typography>Videos</Typography>
        </TabPanel>
        <TabPanel value="3">
          <Typography>Profile</Typography>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
