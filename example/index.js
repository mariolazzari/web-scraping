const request = require("request-promise");
const cheerio = request("cheerio");

const URL = "https://www.imdb.com/title/tt0107426/?ref_=nv_sr_1?ref_=nv_sr_1";

(async () => {
  const res = await request(URL);
  const $ = cheerio.load(res);
  const title = $("div[class=title_wrapper] > h1").text();
  console.log(title);
})();
