var asser = require('../Daos/assesserview');
module.exports={
    assesserview:assesserview
}
function assesserview(){
    return new Promise(async (resolve, reject) => {

    var result = await asser.assement_get()
    console.log("result in core",result)
    if(result){
        resolve({
            status:200,
            result:result
        })
    }
    reject({
        message:"no requests available"
    })
    
    })

}