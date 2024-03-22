import { Grid } from '@mui/material'
import React from 'react'

function Canvas() {
    return (
        <Grid
            item xs={12} sm={8} lg={9} style={{ borderRight: "1px solid black", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ textAlign: "center" }}>canvas</h1>
        </Grid>
    )
}

export default Canvas