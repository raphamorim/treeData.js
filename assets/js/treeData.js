'use strict';

/*
  var treeDataJs = {
      name    : "TreeData.js",
      author  : "Raphael Amorim",
      email   : "rapha850@gmail.com",
      github  : "https://github.com/raphamorim/treeStructure"
  };
*/

/* Receive data and create tree */
function TreeData (data, select) {
    var main = document.querySelector(select);

    var treecanvas = document.createElement('div');
        treecanvas.className = 'tree';

    var treeCode = buildTree(data, Object.keys(data)[0]);

    treecanvas.innerHTML = treeCode;

    main.appendChild(treecanvas);
}

/* Recursive function to build tree structure :) */
function buildTree (obj, node) {
    var treeString = "<li><a href='#'>" + obj[node].value + "</a>",
        sons = [];

    for (var i in obj) {
        if (obj[i].parent == node)
          sons += i;
    }

    if (sons.length > 0) {
        treeString += "<ul>";

        for (var i in sons) {
          treeString += buildTree(obj, sons[i]);
        }

        treeString += "</ul>";
    }

    return treeString;
}
