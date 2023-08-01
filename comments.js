// Create web server        
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create web server
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Listen port 8081
app.listen(process.env.PORT || 8081);

// Create endpoint
app.get('/posts/:id/comments', (req, res) => {
  res.send([
    {
      id: 1,
      content: 'Hello',
    },
    {
      id: 2,
      content: 'Hi',
    },
    {
      id: 3,
      content: 'Bye',
    },
  ]);
});
