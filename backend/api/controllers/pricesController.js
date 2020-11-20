module.exports = () => {
  const controller = {};



  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";


  controller.getPrices = (req, res) => {
      MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("quantopago");



        dbo.collection("pricedata").find({}, [{'operator':false,'value':true,'timestamp':true}]).project({_id:0}).toArray(function(err, result) {
          if (err) throw err;
          data = {
              meo : result.filter(function (e) {
                        return e.operator == 1;
                    }),
              nos : result.filter(function (e) {
                        return e.operator == 2;
                    }),
              vodafone : result.filter(function (e) {
                        return e.operator == 3;
                    }),
          };

          res.status(200).json(data)

        });

      });

  };

  return controller;
}
