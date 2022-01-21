const turl = require('turl');
const csvwriter = require('csv-writer');
var createCsvWriter = csvwriter.createObjectCsvWriter;


const csvWriter = createCsvWriter({
    path: 'ans.csv',
    header: [

        
        { id: 'url', title: 'URL' },
        { id: 'new_url', title: 'NEWURL' },

    ]
});




async function main(longurl) {
    let arr = [];

    for (const url of longurl) {
        let new_url = await turl.shorten(url);
        arr.push({ url, new_url });
    }

    let res = await csvWriter
        .writeRecords(arr)




}

let longurl = ['https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg', 'https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg', 'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg', 'http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg'];

main(longurl);