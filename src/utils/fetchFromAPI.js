const url = "https://youtube-v3-alternative.p.rapidapi.com/trending";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "afd34567d6mshe53a9842d7512d7p138160jsnde95b8405fa5",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
