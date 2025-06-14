const express = require('express');
const path = require('path');
const videoRoutes = require('./routes/videoRoutes');

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/videos', express.static(path.join(__dirname, 'public/videos')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()

});
app.use('/api', videoRoutes);

const port = 5000; 
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});