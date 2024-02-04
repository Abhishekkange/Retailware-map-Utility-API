const express = require('express');
const mongoose = require('mongoose');
const Place = require('./moel');

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://Abhishekkange123:7211821g@nearbykart.cpuhqy4.mongodb.net/map', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Middleware to parse JSON requests
app.use(express.json());

app.post('/addlocation',function(req,res){

  const { placeName, longitude, latitude } = req.body;


    // Validate incoming data
  if (!placeName || typeof longitude !== 'number' || typeof latitude !== 'number') {
    return res.status(400).json({ error: 'Invalid data format' });
  }

  // Here you can save the location data to your database or perform any other action
  console.log('Received location data:', { placeName, longitude, latitude });

  res.status(200).json({ message: 'Location data saved successfully' });







});



// Define the route
app.get('/places/:name', async (req, res) => {
  try {
    // Get the name parameter from the request URL
    const nameParam = req.params.name;

    // Search for places that contain the given name
    const places = await Place.find({ placeName: { $regex: nameParam, $options: 'i' } });

    // Return the places found
    res.json(places);
  } catch (error) {
    console.error('Error fetching places:', error);
    res.status(500).json({ error: 'An error occurred while fetching places' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


