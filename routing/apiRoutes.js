
var FriendsData = require("../data/Friends.js");


module.exports = function(app) {

  app.get("/api/Friends", function(req, res) {
    res.json(FriendsData);
  });


app.post('/api/friends', function(req, res){
  

newfriends.push(friends);
res.json (FriendsData);
});

};
