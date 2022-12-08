const request=require('request');
 
request('http://www.omdbapi.com/?i=tt3896198&apikey=7d82f125', function(err, responce,body){
    console.log(body)
})