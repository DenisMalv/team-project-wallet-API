const fetch = require('node-fetch');



const currensies = async (req, res) => {
    try {
      const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };


  module.exports = currensies