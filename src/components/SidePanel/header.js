import { Box } from '@mui/material'
import React from 'react'
import { ConfigProvider, Segmented } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTabValue } from '../../features/sidePanelSlice';

function SidePanelHeader() {

    const dispatch = useDispatch();
    const tabValue = useSelector((state) => state.sidePanel.tabValue);
    // `Segmented` bileşeni için seçenekler
    const options = [
        { label: 'Tavolo', value: "1" },
        { label: 'Gambe', value: "2" },
    ];
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: 2 ,position: "sticky", top: 0, zIndex: 99 ,bgcolor: "#2F2F2F" }}>
            <ConfigProvider
                theme={{
                    components: {
                        Segmented: {
                            trackBg: "#181818",
                            itemColor: "rgba(255, 255, 255, 0.5)",
                            itemHoverColor: "rgba(255, 255, 255, 1)",
                        },
                    },
                }}
            >
                <Segmented

                    options={options}
                    value={tabValue}
                    onChange={(newValue) => {
                        dispatch(setTabValue(newValue))
                    }}
                    block
                    size="large"
                    style={{ height: '48px', display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "5px", paddingRight: "5px" }} // Yüksekliği artıran stil

                />
            </ConfigProvider>
        </Box>
    )
}

export default SidePanelHeader