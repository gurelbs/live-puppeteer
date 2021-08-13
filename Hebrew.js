const getWeather = require('./controllers/getWeather');
const getTranslate = require('./controllers/getTranslate');
const getMeaning = require('./controllers/getMeaning');
const getDirection = require('./controllers/getDirection');
const getNews = require('./controllers/getNews');
 

function answers() {
  async function weather(city) {
    try {
      let answer = await getWeather(city);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function translate(word) {
    try {
      let answer = await getTranslate(word);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function meaning(meaning) {
    try {
      let answer = await getMeaning(meaning);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function direction(from, to) {
    try {
      let answer = await getDirection(from, to);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function news(term) {
    try {
      let answer = await getNews(term);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  return {
    weather,
    translate,
    meaning,
    news,
    direction
  }
}

module.exports = answers;