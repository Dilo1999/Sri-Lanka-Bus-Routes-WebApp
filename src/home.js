import React, { useState } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const Home = () => {
  const [startCity, setStartCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [busRoutes, setBusRoutes] = useState([]);

  const allRoutes = [
    {
      id: 1,
      start: "Colombo",
      destination: "Kandy",
      routeNumber: "1A",
      departureTime: "08:00 AM",
    },
    {
      id: 2,
      start: "Colombo",
      destination: "Kandy",
      routeNumber: "1B",
      departureTime: "09:00 AM",
    },
    {
      id: 3,
      start: "Colombo",
      destination: "Kandy",
      routeNumber: "1C",
      departureTime: "10:00 AM",
    },
    // Add other routes as needed
  ];

  const handleSearch = () => {
    // Filter routes based on start and destination cities
    const filteredRoutes = allRoutes.filter(
      (route) =>
        route.start === startCity && route.destination === destinationCity
    );
    setBusRoutes(filteredRoutes);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Bus Route Search
      </Typography>
      <div className="select-container">
        <label>Start City:</label>
        <Select
          value={startCity}
          onChange={(e) => setStartCity(e.target.value)}
          fullWidth
        >
          <MenuItem value="">Select Start City</MenuItem>
          <MenuItem value="Colombo">Colombo</MenuItem>
          <MenuItem value="Kandy">Kandy</MenuItem>
          <MenuItem value="Matara">Matara</MenuItem>
          <MenuItem value="Kataragama">Kataragama</MenuItem>
          {/* Add other cities as needed */}
        </Select>
      </div>
      <div className="select-container">
        <label>Destination City:</label>
        <Select
          value={destinationCity}
          onChange={(e) => setDestinationCity(e.target.value)}
          fullWidth
        >
          <MenuItem value="">Select Destination City</MenuItem>
          <MenuItem value="Colombo">Colombo</MenuItem>
          <MenuItem value="Kandy">Kandy</MenuItem>
          <MenuItem value="Matara">Matara</MenuItem>
          <MenuItem value="Kataragama">Kataragama</MenuItem>
          {/* Add other cities as needed */}
        </Select>
      </div>
      <div className="button-wrapper">
        <Button
          onClick={handleSearch}
          variant="contained"
          color="primary"
          fullWidth
        >
          Search
        </Button>
      </div>
      {busRoutes.length > 0 && (
        <Grid container spacing={2} className="bus-route-grid">
          {busRoutes.map((route) => (
            <Grid item key={route.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 300 }}>
                <CardContent className="card-content">
                  <Typography variant="h6" className="card-title">
                    Route Number: {route.routeNumber}
                  </Typography>
                  <Typography className="card-text">
                    Start: {route.start}
                  </Typography>
                  <Typography className="card-text">
                    Destination: {route.destination}
                  </Typography>
                  <Typography className="card-text">
                    Departure Time: {route.departureTime}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
