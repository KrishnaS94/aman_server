var bcSdk = require('../Fabric_SDK/query');
exports.getHistory = (id) => {
    return new Promise((resolve, reject) => {

            bcSdk.getHistory({
                    userId: id


                })


                .then((docs) => {
                    var len = docs.length;
                    console.log(len)

                    console.log("docs....123>>>", docs)

                    return resolve({
                        status: 201,
                        docs: docs,

                    })
                })
        })

        .catch(err => {

            console.log("error occurred" + err);

            return reject({
                status: 500,
                message: 'Internal Server Error !'
            });
        })

};