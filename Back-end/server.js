const express = require('express')
const app = express()
const port = process.env.PORT || 8081
var path = require('path');
const googleTrends = require('google-trends-api');
var fetch = require('node-fetch');

// app.get('/', (req, res) => res.send('Hello World!'))


app.use((req,res,next)=>{
res.header("Access-Control-Allow-Origin","*")
next()
})

app.get('/index1/nyhome', async (req, res) => {
    console.log("ahhhhhh")
    const api_url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pQFkkdfy4sXLXX0sOoMedAMQWeTi7gM3';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    // console.log(json1.response.results)
    res.json(json1.results);
  });
  
  
  app.get('/index1/home', async (req, res) => {
    const api_url = 'https://content.guardianapis.com/search?api-key=c0345a86-d258-42aa-b58e-272b1d93355e&section=(sport|business|technology|politics)&show-blocks=all&page-size=20';
    console.log("ahi to ave che")
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if (json1.response.results[i].blocks.body[0].bodyTextSummary == "" || json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai -------------------- bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log(" nobhai bhai",json1.response.pageSize)
         break
         
       }
     }
    }
   
    res.json(array);
  });
  
  
  app.get('/index1/world', async (req, res) => {
  
    const api_url = 'https://content.guardianapis.com/world?api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all&page-size=20';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    //console.log(json1.response.results)
    
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if (json1.response.results[i].blocks.body[0].bodyTextSummary == "" || json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log(" no bhaibhai",json1.response.pageSize)
         break
         
       }
     }
    }
   
    res.json(array);
  });

  app.get('/index1/science', async (req, res) => {
  
    const api_url = 'https://content.guardianapis.com/science?api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all&page-size=20';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    //console.log(json1.response.results)
    
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if (json1.response.results[i].blocks.body[0].bodyTextSummary == "" || json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log(" no bhaibhai",json1.response.pageSize)
         break
         
       }
     }
    }
   
    res.json(array);
  });
  
  app.get('/index1/nyworld', async (req, res) => {
   
  
    const api_url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pQFkkdfy4sXLXX0sOoMedAMQWeTi7gM3';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    // console.log(json1.response.results)
    res.json(json1.results);
  });
  
  
  app.get('/index1/tech', async (req, res) => {
  
    const api_url = 'https://content.guardianapis.com/technology?api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all&page-size=20';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    //console.log(json1.response.results)
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if (json1.response.results[i].blocks.body[0].bodyTextSummary == "" || json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log(" nobhaibhai",json1.response.pageSize)
         break
         
       }
     }
    }
   
    res.json(array);
  });
  
  app.get('/index1/nytech', async (req, res) => {
    console.log("ahhhhhh")
    const api_url = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=pQFkkdfy4sXLXX0sOoMedAMQWeTi7gM3';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    // console.log(json1.response.results)
    res.json(json1.results);
  });
  
  
  app.get('/index1/politics', async (req, res) => {
  
    const api_url = 'https://content.guardianapis.com/politics?api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all&page-size=20';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    //console.log(json1.response.results)
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if (json1.response.results[i].blocks.body[0].bodyTextSummary == "" || json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log(" nobhai",json1.response.pageSize)
         break
         
       }
     }
    }
   
    res.json(array);
  });
  
  app.get('/index1/nypolitics', async (req, res) => {
    console.log("ahhhhhh")
    const api_url = 'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=pQFkkdfy4sXLXX0sOoMedAMQWeTi7gM3';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    // console.log(json1.response.results)
    res.json(json1.results);
  });
  
  
  
  app.get('/index1/sports', async (req, res) => {
  
    const api_url = 'https://content.guardianapis.com/sport?api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all&page-size=20';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
  
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if (json1.response.results[i].blocks.body[0].bodyTextSummary == "" || json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log(" noi",json1.response.pageSize)
         break
         
       }
     }
    }
   
    res.json(array);
  });
  
  app.get('/index1/nysports', async (req, res) => {
    console.log("ahhhhhh")
    const api_url = 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=pQFkkdfy4sXLXX0sOoMedAMQWeTi7gM3';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    // console.log(json1.response.results)
    res.json(json1.results);
  });


  
  
  
  
  app.get('/index1/business', async (req, res) => {
  
    const api_url = 'https://content.guardianapis.com/business?api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all&page-size=20';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    //console.log(json1.response.results)
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if (json1.response.results[i].blocks.body[0].bodyTextSummary == "" || json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log(" noi",json1.response.pageSize)
         break
         
       }
     }
    }
   
    res.json(array);
  });
  
  app.get('/index1/nybusiness', async (req, res) => {
    console.log("ahhhhhh")
    const api_url = 'https://api.nytimes.com/svc/topstories/v2/business.json?api-key=pQFkkdfy4sXLXX0sOoMedAMQWeTi7gM3';
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    // console.log(json1.response.results)
    res.json(json1.results);
  });
  
  
  
  app.get('/index1/details', async (req, res) => {
    const id1 = req.query.id
    console.log("this is the article guardian",id1)
    const api_url = "https://content.guardianapis.com/"+id1+"?api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all";
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    console.log(json1.response.content)
    res.json(json1.response.content);
  });
  
  app.get('/index1/nydetails', async (req, res) => {
    const id1 = req.query.id
    console.log("this is theicle",id1)
    const api_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:"+"(\""+ id1 +"\")"+"&api-key=pQFkkdfy4sXLXX0sOoMedAMQWeTi7gM3";
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    console.log("aaa nathi avtu ????",json1.response.docs[0])
    res.json(json1.response.docs[0]);
  });
  
  
  app.get('/index1/search', async (req, res) => {
    const id1 = req.query.q
    console.log("this is the search",id1)
    const api_url = "https://content.guardianapis.com/search?q="+id1+"&api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all";
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if ( json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log("haa noi",json1.response.pageSize)
         break
         
       }
     }
   
    }
    res.json(array);
  });
  
  app.get('/index1/search_ny', async (req, res) => {
    const id1 = req.query.q
    console.log("this is the search_ny",id1)
    const api_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+id1+"&api-key=pQFkkdfy4sXLXX0sOoMedAMQWeTi7gM3";
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
   
    // res.json(json1.response.docs);
    var array = []
    console.log(json1.response.docs.length)
   

    
    for(i=0;i<json1.response.docs.length;i++)
    {
     if ( json1.response.docs[i].news_desk == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.docs[i])
       if(array.length == 10)
       {
        
         break
         
       }
     }
   
    }
    res.json(array);
  });


  app.get('/index1/top', async (req, res) => {
    const api_url = 'http://content.guardianapis.com/search?order-by=newest&show-fields=starRating,headline,thumbnail,short-url&api-key=c0345a86-d258-42aa-b58e-272b1d93355e';
    console.log("ahi to ave che")
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    res.json(json1.response.results);
  });


  app.get('/index1/search', async (req, res) => {
    const id1 = req.query.q
    console.log("this is the search",id1)
    const api_url = "https://content.guardianapis.com/search?q="+id1+"&api-key=c0345a86-d258-42aa-b58e-272b1d93355e&show-blocks=all";
    const fetch_response = await fetch(api_url);
    const json1 = await fetch_response.json();
    var array = []
    for(i=0;i<json1.response.pageSize;i++)
    {
     if ( json1.response.results[i].webTitle == "" || json1.response.results[i].sectionId == "" || json1.response.results[i].webPublicationDate == "" )
     {
       console.log("bhai bhai",i)
     }
     else
     {
       array.push(json1.response.results[i])
       if(array.length == 10)
       {
        console.log("haa noi",json1.response.pageSize)
         break
         
       }
     }
   
    }
    res.json(array);
  });
  
  app.get('/index1/trend', async (req, res) => {
    const id1 = req.query.q
    console.log("this is the query",id1)
    googleTrends.interestOverTime({keyword:id1,startTime:new Date('2019-06-01')})
    .then(function(results)
    {
    console.log(typeof(results))
    var obj = JSON.parse(results)
    console.log(typeof(obj))
    var array = []
    for(i=0;i<obj.default.timelineData.length;i++)
    { 
     array.push(obj.default.timelineData[i].value[0])
    }
    res.json(array)

    console.log('These results are awesome', results); 
    })
    .catch(function(err){
    console.error('Oh no there was an error', err);
    });   
    
  });


  app.use('/static',express.static('build/static'));
 

  app.get('*', function(req, res, next){
    res.sendFile(path.join(__dirname+'/build/index.html'))
    // res.send("hi")
} );
  
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
