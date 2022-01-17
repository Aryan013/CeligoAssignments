//Part a and b
const MetadataParser=function()
{   this._version;
    this._channel;
    this._keyfield;
    this.setChannel=function(Chan)
    {
        return this._channel=Chan;
    };
    this.getChannel=function()
    {
       return this._channel;
    };

    this.setVersion=function(ver)
    {
        return this._version=ver;
    };
    
    this.getVersion=function()
    {
       return this._version;
    };

    this.setKeyfield=function(key)
    {
        return this._keyfield=key;
    };
    this.getKeyfield=function()
    {
        return this._keyfield;
    };



}
//Part C
const dataArr=[];
const meta1=new MetadataParser();
meta1.setVersion(1.01);
meta1.setChannel("A");
meta1.setKeyfield(100);
dataArr.push(meta1);
const meta2=new MetadataParser();
meta2.setVersion(3.0611);
meta2.setChannel("B");
meta2.setKeyfield(17);
dataArr.push(meta2);
const meta3=new MetadataParser();
meta3.setVersion(5.123);
meta3.setChannel("F");
meta3.setKeyfield(74);
dataArr.push(meta3);
const meta4=new MetadataParser();
meta4.setVersion(8.31);
meta4.setChannel("E");
meta4.setKeyfield(130);
dataArr.push(meta4);
const meta5=new MetadataParser();
meta5.setVersion(9.78);
meta5.setChannel("C");
meta5.setKeyfield(1);
dataArr.push(meta5);
function getKeyFields(objArr)
{const ans=[];
    objArr.map((e)=>{
        let c=e.getKeyfield();
        ans.push(c);
    });
return ans;
}

const ansArray=getKeyFields(dataArr);
console.log(ansArray);
