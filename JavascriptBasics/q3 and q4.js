

const data=[
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ]
  let ans = {};
  function groupObjectsBy(data, str) {
   
  
    data.map((jdata) => {
        var c = jdata["channel"];
        if (ans[jdata["channel"]] === undefined || ans[jdata["channel"]] === null) {
            ans[jdata["channel"]] = [];
            ans[jdata["channel"]].push(jdata);
        }
        else {
            ans[jdata["channel"]].push(jdata);
  
        }
  
    })
    return ans;
  
  }
  
  
  
  
  
  const p = groupObjectsBy(data,'channel');
  
  console.log(p);