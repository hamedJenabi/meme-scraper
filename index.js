const getHTML = require('html-get');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
var https = require('https');
const { DownloaderHelper } = require('node-downloader-helper');

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
      let finalListUrl = listUrl.replace(/[']/g, '').split('?')[0];

      if (item < 10) {
        let list = [];

        list.push(finalListUrl);
        const dl = new DownloaderHelper(list[0], './image', __dirname);

        dl.on('end', () => console.log('Download Completed'));
        dl.start(); //console.log(list[0]);
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
