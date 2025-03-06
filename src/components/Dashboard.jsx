import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Paper, IconButton } from '@mui/material';
import { Divider, LinearProgress } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CartesianGrid } from 'recharts';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import Flag from 'react-world-flags';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const lineChartData = [
  { name: 'Mar 2023', Revenue: 10000, Target: 12000 },
  { name: 'Jun 2023', Revenue: 15000, Target: 14000 },
  { name: 'Sep 2023', Revenue: 18000, Target: 16000 },
  { name: 'Dec 2023', Revenue: 21000, Target: 18000 },
  { name: 'Mar 2024', Revenue: 23000, Target: 20000 },
  { name: 'Jun 2024', Revenue: 25000, Target: 22000 },
  { name: 'Sep 2024', Revenue: 28000, Target: 24000 },
];

const sessionData = [
  { country: 'Australia', value: 634, percentage: 8, code: 'AU' },
  { country: 'Indonesia', value: 589, percentage: 7.2, code: 'ID' },
  { country: 'Thailand', value: 562, percentage: 6.2, code: 'TH' },
  { country: 'Germany', value: 453, percentage: 5.4, code: 'DE' },
];

const data = [
  { region: "Europe", sales: 2728 },
  { region: "Americas", sales: 2409 },
  { region: "Asia", sales: 2843 },
  { region: "Africa", sales: 3028 },
  { region: "Pacific", sales: 1838 },
  { region: "Middle East", sales: 800 },
];

const salesData = {
  labels: ["Amazon", "Alibaba", "Tokopedia"],
  datasets: [
    {
      data: [45, 35, 25],
      backgroundColor: ["#4caf50", "#ff9800", "#03a9f4"],
      hoverBackgroundColor: ["#388e3c", "#f57c00", "#0288d1"],
    },
  ],
};

const userData = {
  labels: ["Premium Plan", "Basic Plan"],
  datasets: [
    {
      data: [1809, 515],
      backgroundColor: ["#4caf50", "#9e9e9e"],
      hoverBackgroundColor: ["#388e3c", "#616161"],
    },
  ],
};



const Dashboard = () => {
  return (
    <Box
      sx={{
        p: 2,
        mt: '2rem',
        width: { xs: '100%', lg: '85%' }, // Full width on small screens, 85% on larger screens
        ml: { lg: 'auto' }, // Adjust left margin for alignment with the sidebar
        transition: 'all 0.3s ease', // Smooth transition for responsiveness
      }}
    >
      {/* Overview Cards */}
      <Grid container spacing={4}>
        {[
          { title: 'Total Income', value: '$32,499.93', change: '+12.95%', Text: 'Compared to last month' },
          { title: 'Profit', value: '$10,499.93', change: '-0.32%', Text: 'Compared to last month' },
          { title: 'Total Views', value: '5,211,832', change: '+8.05%', Text: 'Compared to last month' },
          { title: 'Conversion Rate', value: '4.83%', change: '+8.05%', Text: 'Compared to last month' },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ mt: { xs: '0rem', md: '1rem' }, border: '2px solid #dfe3ea', borderRadius: '1rem' }} elevation={0}>
              <CardContent>
                <Typography variant="h6" sx={{ fontSize: '15px', color: '#bbc1c7' }}>
                  {card.title}
                </Typography>
                <Typography variant="h4">{card.value}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: 'inline-block',
                    px: 0.5,
                    borderRadius: 0.5,
                    color: card.change.startsWith('-') ? '#c62828' : '#2e7d32',
                    backgroundColor: card.change.startsWith('-') ? '#f2d9db' : '#d9f0ea',
                  }}
                >
                  {card.change}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#bbc1c7',
                    fontSize: '12px',
                    display: 'inline-block',
                  }}
                >
                  {card.Text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Revenue Over Time and Session by Country */}
      <Grid container spacing={4} mt={'-12px'}>
        {/* Revenue Over Time */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight={600} fontSize={20}>
                Revenue Over Time
              </Typography>
              <Box>
                <IconButton>
                  <DownloadIcon />
                </IconButton>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Box>
            </Box>
            <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 2 }}>
              <Typography component="span" sx={{ color: '#0088FE', fontWeight: 'bold' }}>
                ● Total Revenue
              </Typography>
              <Typography component="span" sx={{ color: '#FF8042', fontWeight: 'bold', ml: '2rem' }}>
                ● Total Target
              </Typography>
              <Typography>
                <Typography component="span" sx={{ fontWeight: 'bold', ml: '1rem' }}>
                  {' $32,839.99 - 55%'}
                </Typography>
                <Typography component="span" sx={{ fontWeight: 'bold', ml: { xs: '', md: '1.5rem' } }}>
                  {' $30,932.12 - 45%'}
                </Typography>
              </Typography>
            </Typography>

            {/* Line Chart */}
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Revenue" stroke="#0088FE" />
                <Line type="monotone" dataKey="Target" stroke="#FF8042" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Session by Country Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography display={'flex'} justifyContent={'space-between'} variant="h6" fontWeight={600} fontSize={20}>Session by Country
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Typography>
              <Typography variant="h6" fontSize={14} color='gray'>Showing Data for Top Session</Typography>
              <Divider sx={{ my: 2 }} />
              {sessionData.map((session) => (
                <Box key={session.country} mb={1.1}>
                  <Box display="flex" alignItems="center" >
                    <Typography variant="subtitle2" ml={5}>
                      {session.country}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    {/* Flag as Avatar */}
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <Flag code={session.code} />
                    </Avatar>
                    <LinearProgress
                      variant="determinate"
                      value={session.percentage * 10}
                      sx={{
                        borderRadius: '1rem',
                        flex: 1,
                        height: '6px', // Set the thickness to 2px
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#118b96', // Set the line color to green
                        },
                      }}
                    />

                    <Typography variant="body2">{session.percentage}%</Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

   <Box sx={{display:'flex'}}>
   <Card sx={{ borderRadius: 3, boxShadow: 2, padding: 2 }}>
    <CardContent>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" fontWeight="bold">Sales by Region</Typography>
        <IconButton size="small"><MoreVertIcon /></IconButton>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="region" tick={{ fill: "#555" }} />
          <PolarRadiusAxis domain={[0, 3500]} tick={{ fill: "#999", fontSize: 10 }} />
          <Radar name="Sales" dataKey="sales" stroke="#3e746a" fill="#e9f3f2" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
 
   </Box>


    </Box>
  );
};

export default Dashboard;
