const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://posts:4000/events", event).catch((err) => {
    console.log('p:4000-' + err.message);
  });
  axios.post("http://comments:4001/events", event).catch((err) => {
    console.log('p:4001-' + err.message);
  });
  axios.post("http://query:4002/events", event).catch((err) => {
    console.log('p:4002-' + err.message);
  });
  axios.post("http://moderation:4003/events", event).catch((err) => {
    console.log('p:4003-' + err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('event-bus service on port 4005')
});