const fs= require('fs');
var port = process.env.PORT || 80;
var path = require ('path');
var reached =0;
const level1=process.argv[3];

function dirTree(filename,reached) {
//console.log("filename=",filename);
//console.log("level111=",level1);
//console.log("reached=",reached);
if(reached >= level1){
//console.log("reached==level");
 return;
}
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
	++reached;
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child,reached);
        });
    } else {
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        info.type = "file";
    }

    return info;
}

//if (module.parent == undefined) {
    // node dirTree.js ~/foo/bar
    var util = require('util');
    console.log(util.inspect(dirTree(process.argv[2],reached),  false, null));
//}
