const getHTML = require('html-get');
const request = require('request');
const cheerio = require('cheerio');

request(
  {
    method: 'GET',
    url: 'https://memegen.link/examples',
  },
  (err, res, body) => {
    let $ = cheerio.load(body);

    $('img').each((item, image) => {
      let img = $(image).attr('src');
      let mainUrl = 'https://memegen.link';

      let listUrl = mainUrl + img;

      if (item < 10) {
        console.log(listUrl);
        download(listUrl, item);
      }
    });
  },
);

//console.log(listUrl);

//let imgLink = [$('.row a')];

//let list = $('.row a').text();

//let attrs = imgLink[i].attr('href');

//let link = 'https://memegen.link' + attrs;

//download(link, 'image');

/*imageDownloader({
      imgs: [
        {
          uri: 'https://memegen.link' + attrs,
          filename: `meme_image_test`,
        },
      ],
      dest: './src', //destination folder
    });
*/
//console.log(imgLink[1]);
/*let imageList = [
  imgrab('https://memegen.link/examples', function (images) {
    //console.log(images);
  }),
];
*/
/*getHTML(
  'https://memegen.link/examples',
).then(({ url, html, stats, headers, statusCode }) => console.log(html));
*/
/*for (i = 0; i < 10; i++) {
  imageDownloader({
    imgs: [
      {
        //uri: https://memegen.link + ${imageList[i]}`,
        //filename: `meme_image_ + ${i}`,
     // },
    //],
    //dest: './src', //destination folder
  //});
//}
/*let htmlFile = request('https://memegen.link/examples');
console.log(htmlFile);
*/
