const SortArray=function(){
this.originalArray=[];
this.pushInArray=function(val)
{
this.originalArray.push(val);
};

this.sortArray=function(arr){
    const sortedArray = arr.sort((a,b)=>{
        return a-b;
      })
      return sortedArray;
}

this.getSortedArray=function(){
   return this.sortArray(this.originalArray);
}


}


const SortObjectArray=function(){
 SortArray.call(this);

this.originalObjArray=[];

this.pushInObjArray=function(obj){
this.originalObjArray.push(obj);
};

this.sortObjArray=function(objArr){
const sortedObjArray=objArr.sort((a,b)=>{
    if(a.serial>b.serial)
    {return 1;}
    else
    {return -1;}
})
return sortedObjArray;
};

this.getSortedObjArray=function(){
return this.sortObjArray(this.originalObjArray);
}

}
//For Inheritance
SortObjectArray.prototype=Object.create(SortArray.prototype);


const arr1=new SortObjectArray();

arr1.pushInObjArray({
    serial:10,
    name:"Aryan"
});
arr1.pushInObjArray({
    serial:6,
    name:"Ar1yan"
});
arr1.pushInObjArray({
    serial:2,
    name:"A1ryan"
});
arr1.pushInObjArray({
    serial:8,
    name:"Aryan"
});
arr1.pushInObjArray({
    serial:1,
    name:"Arya3n"
});


const ans=arr1.getSortedObjArray(arr1.originalObjArray);
ans.map((e)=>{
    console.log(e.serial);
});


arr1.pushInArray(52);
arr1.pushInArray(190);
arr1.pushInArray(261);
arr1.pushInArray(4);
const outArray=arr1.getSortedArray(arr1.originalArray);
console.log(outArray);