import React from 'react';
import { Grid } from '@mui/material';
import SidePanelHeader from './header';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { useSelector } from 'react-redux';
import TablePanel from './components/tablePanel';
import LegPanel from './components/legPanel';

function SidePanel() {
    // Tab'ların seçim durumunu tutacak state
    const tabValue = useSelector((state) => state.sidePanel.tabValue);

    return (
        <Grid item xs={12} sm={4} lg={3} style={{ borderLeft: "1px solid black", height: "100vh", backgroundColor: "#2F2F2F" }}>
            <SidePanelHeader />
            <TabContext value={tabValue}>
                <TabPanel value="1">
                    <TablePanel />
                </TabPanel>
                <TabPanel value="2">
                    <LegPanel />
                </TabPanel>
            </TabContext>
        </Grid>
    );
}

export default SidePanel;
