const fs= require('fs');
var express = require ('express');
var port = process.env.PORT || 80;
var path = require ('path');
var app = express();

var diretoryTreeToObj = function(dir, done) {
    var results = [];
//    console.log("Inside diretoryTreeToObj"); 
    fs.readdir(dir, function(err, list) {
        if (err)
            return done(err);
      var pending = list.length;

        if (!pending)
            return done(null, {name: path.basename(dir), type: 'folder', children: results});

        list.forEach(function(file) {
            file = path.resolve(dir, file);
//	    console.log("file = ",file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
//		console.log("It is a dir",file);
                    diretoryTreeToObj(file, function(err, res) {
                        results.push({
                            name: path.basename(file),
                            type: 'folder',
                            children: res
                        });
             if (!--pending)
                            done(null, results);
                    });
                }
                else {
//		console.log("It is a file",file);
                    results.push({
                        type: 'file',
                        name: path.basename(file)
                    });
                 if (!--pending)
                        done(null, results);
}
//console.log("Results=",results);
            });

    });
//console.log("Results=",results);
});
}

app.get('/fileData', function(req, res){
var dirTree = ('.');

diretoryTreeToObj(dirTree, function(err, res){
    if(err)
        console.error(err);

    console.log(JSON.stringify(res));
});
});

app.listen(port, function(){
  console.log ("listening on port " + port);
});
