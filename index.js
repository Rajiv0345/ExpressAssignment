
// Import required modules
const http = require('http');

// Define products data for men and women
const menProducts = [
    { id: "1",
      name: "Men Product 1",
      brand: "ABC",
      price: 19.99,
      color: "Blue",
      size: "M",
      category: "Clothing"
       },
    // Add more products as needed
];

const womenProducts = [
    { id: "1",
      name: "Women Product 1",
      brand: "ABC",
      price: 19.99,
      color: "Blue",
      size: "F",
      category: "Clothing"
       },
    // Add more products as needed
];

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set Content-Type header to JSON
    res.setHeader('Content-Type', 'application/json');

    // Routing
    if (req.url === '/') {
        // Root endpoint
        res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
    } else if (req.url === '/men') {
        // Men endpoint
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        // Women endpoint
        res.end(JSON.stringify(womenProducts));
    } else {
        // Other endpoints
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Page not found' }));
    }
});

// Set the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
