const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const eventsRoute = require('./routes/events');
const newsRoute = require('./routes/news');

app.use('/events', eventsRoute);
app.use('/news', newsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
