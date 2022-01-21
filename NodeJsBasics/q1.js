
const xml2js=require('xml2js');
const fs=require('fs');
//PartA;

function xmltwojson(xmlfile)
{
    let ans;
     xml2js.parseString(xmlfile,(err,data)=>{
        if(err)
        {console.log(err);}
    let jsonfile=JSON.stringify(data);
     ans=jsonfile;
    });
    return ans;
}
let samplexml=`<book id="bk101">
<author>Gambardella, Matthew</author>
<title>XML Developer's Guide</title>
<genre>Computer</genre>
<price>44.95</price>
<publish_date>2000-10-01</publish_date>
<description>An in-depth look at creating applications 
with XML.</description>
</book>`
let jsonans=xmltwojson(samplexml);
console.log(jsonans);



//part2

function readAndConvert(path){

    let xml2=fs.readFileSync(path,'utf8');
   
    
    let ans2;
         xml2js.parseString(xml2,(err,data)=>{
            if(err)
            {console.log(err);}
        let jsonfile2=JSON.stringify(data);
         ans2=jsonfile2;
        });
        return ans2;

}
const jsonans2=readAndConvert('./temp.xml');
console.log(jsonans2);