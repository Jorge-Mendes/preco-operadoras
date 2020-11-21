module.exports = () => {
  const controller = {};



  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  function getMoment(obj) {
      return [obj.timestamp, obj.value]
  }

  controller.getPrices = (req, res) => {
      MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("quantopago");



        dbo.collection("pricedata").find({}, [{'operator':false,'value':true,'timestamp':true}]).project({_id:0}).toArray(function(err, result) {
          if (err) throw err;

          var meoData = [];
          var nosData = [];
          var vodafoneData = [];


          meoResult = result.filter(function (e) {
                    return e.operator == 1;
                });

          meoResult.forEach(function(entry) {
                meoData.push( getMoment(entry) );
            });


          nosResult = result.filter(function (e) {
                  return e.operator == 2;
              });

          nosResult.forEach(function(entry) {
              nosData.push( getMoment(entry) );
          });

          vodafoneResult = result.filter(function (e) {
                  return e.operator == 2;
              });

          vodafoneResult.forEach(function(entry) {
              vodafoneData.push( getMoment(entry) );
          });

          data = {
              meo : meoData,
              nos : nosData,
              vodafone : vodafoneData,
          };

          res.status(200).json(data)

        });

      });

  };

  return controller;
}
