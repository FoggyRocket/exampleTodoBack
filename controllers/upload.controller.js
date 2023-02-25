
exports.uploadCtrl = (req,res,next)=>{
    //req.file => este es para uno
    //req.files => para multiple
    if(!req.file){
        res.status(417).json({messageError:"Tienes que mandar un archivo"})
        return;
    }
    console.log("que es el file",req.file)
        //req.file = {path:"https://",originalName:"Dylan",id:"91u299812398",...}
    res.status(201).json({imgUrl:req.file.path})
}

exports.uploadMultipleCtrl = (req,res,next)=>{
    //req.file => este es para uno
    //req.files => para multiple
    if(!req.files){
        res.status(417).json({messageError:"Tienes que mandar un archivo"})
        return;
    }
    //req.files = [{path:"https://",originalName:"Dylan",id:"91u299812398",...},{path:"https://",originalName:"Dylan",id:"91u299812398",....}]
    const imgUrls = req.files.map((item)=>{
        return item.path
    })
                    //["https:","https",....]
    res.status(201).json({imgUrls})
}