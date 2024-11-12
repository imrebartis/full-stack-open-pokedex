const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

let isHealthy = true

app.use(express.static("dist"));

app.get('/version', (req, res) => {
  res.send('1.0.2')
})

app.post('/toggle-health', (req, res) => {
  isHealthy = !isHealthy
  res.json({ status: isHealthy ? 'healthy' : 'unhealthy' })
})

app.get('/health', (req, res) => {
  if (!isHealthy) {
    res.status(500).send('Service unavailable')
    return
  }
  res.status(200).send('OK')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
