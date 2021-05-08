const axios = require("axios");

const MAX_RADIUS = process.env.MAX_RADIUS;
const API_KEY = process.env.API_KEY;
const TYPE = process.env.TYPE;

const URI_BASE = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"

// GET => /nearest-stores?location={LOCATION} => location=10.20,100.2 => latitude,longitude
async function getStoresByProximity(req, res) {
    try {
        const { location } = req.query;

        const googleResponse = await axios.get(
          `${URI_BASE}location=${location}&radius=${MAX_RADIUS}&type=${TYPE}&key=${API_KEY}`
        );

        res.send(googleResponse.data);
    } catch (error) {
        res.send({ "error": "true" })  
    }
}

// GET => /next?token={TOKEN}
async function getNextByToken(req, res) {
  try {
    const { token } = req.query;

    const googleResponse = await axios.get(
      `${URI_BASE}pagetoken=${token}&key=${API_KEY}`
    );

    res.send(googleResponse.data);
  } catch (error) {
    res.send({ error: "true" });
  }
}

module.exports = { getStoresByProximity, getNextByToken };