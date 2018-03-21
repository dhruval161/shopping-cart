var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

products = [
  new Product({
    imagePath : "http://www.mariogames321.com/img/GTA_5_Game_01.jpg",
    title : 'GTA V',
    description: "latest Grand Theft Auto edition",
    price: 99,
  }),
  new Product({
    imagePath : "http://www.fullypcgames.net/wp-content/uploads/2013/06/cric07.jpg",
    title : 'Cricket 2007',
    description: "EA Sports",
    price: 99,
  }),
  new Product({
    imagePath : "http://www.mobygames.com/images/covers/l/183144-mount-blade-warband-windows-front-cover.jpg",
    title : 'Mount and Blade: Warband',
    description: "Paradox Interative, Teleworld Entertainment",
    price: 99,
  }),
  new Product({
    imagePath : "https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/200546-L-LO.jpg",
    title : 'Don Bradman Cricket 2017',
    description: "Big Ant Studios",
    price: 99,
  }),
  new Product({
    imagePath : "https://upload.wikimedia.org/wikipedia/en/5/5b/WWE_2K17_Official_Cover.jpg",
    title : 'WWE 2k17',
    description: "Official WWE version",
    price: 99,
  })
];
var done =0;
for(var i=0;i<products.length;i++)
{
  products[i].save(function(err,result){
    done++;
    if(done=== products.length)
    exit();

  });
}
function exit()
{
  mongoose.disconnect();
}
