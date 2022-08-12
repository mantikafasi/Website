import React from 'react'
import RecentReports from '../components/RecentReports'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function MainPage() {
    return (
        <div>
            <Grid container spacing={3}>
                {/* Recent Reports */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <RecentReports />
                    </Paper>
                </Grid>
            </Grid></div >

    )
}
