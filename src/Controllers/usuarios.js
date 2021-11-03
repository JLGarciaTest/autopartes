const {response,request}=require('express')
const usuariosGet=(req=request,res=response)=>{
    //const usuario = req.body;
    res.json({

        msg:'GET'
    })
}

const usuariosPost=(req=request,res=response)=>{
   // const usuario = req.body;
    res.json({

        msg:'POST'
    })
}
const usuariosPut=(req=request,res=response)=>{
    //const usuario = req.body;
    res.json({
        msg:'PUT'
        })
}
const usuariosDelete=(req=request,res=response)=>{
  //  const usuario = req.body;
    res.json({

        msg:'DELETE'
    })
}



module.exports ={
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}