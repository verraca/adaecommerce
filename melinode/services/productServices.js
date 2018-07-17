const restler = require('restler')

let self= {}

self.getAdaProducts = (items) =>{
    const url = "https://api.mercadolibre.com/sites/MLA/search?q="+items
    return new Promise (function(resolve, reject){
        restler.get(url)
        .on ('success', function(result){
            console.log(result)
            resolve(result)
        }).on('fail',(error)=>{
            console.log(error)
            reject(error)
        })
    })
}


module.exports= self