const fs = require('fs');
const archiver = require('archiver');
let longurl = ['https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg','https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg','https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg','https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg','https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg','https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg','https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg'];


const request = require('request');
let count=1;
let foldercount=0;

let path;
var download = function(url, callback){
  request.get(url, function(err, res){
      if(err)
      {throw err;}
      console.log(count-1);
      if(count%5===1)
      {
        foldercount++;
        fs.mkdir(`./images${foldercount}`, (err) => {
          if (err) {
              return console.error(err);
          }
          console.log('Directory created successfully!');
        });
        
        
      }
      path=`./images${foldercount}/${count++}.jpg`;
    var writeStream = fs.createWriteStream(path);
     request(url).pipe(writeStream);
    
  });
};

for(const urls of longurl)
{
download(urls);
}








// async.each(longurl, download, function(err) {
//   if( err ) {
//       console.log(err);
//   } else {
//       console.log('All files have been downloaded successfully');
//   }
// });






// var output = fs.createWriteStream('./example.zip');
// var archive = archiver('zip', {
//     gzip: true,
//     zlib: { level: 9 } // Sets the compression level.
// });

// archive.on('error', function(err) {
//   throw err;
// });

// // pipe archive data to the output file
// archive.pipe(output);

// // append files
// archive.file('./images/1.jpg', {name: '1.jpg'});
// archive.file('./images/2.jpg', {name: '2.jpg'});

// //
// archive.finalize();