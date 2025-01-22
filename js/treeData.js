'use strict';

function TreeData (data, select) {
    var main = document.querySelector(select);
    var treecanvas = document.createElement('ul');
        treecanvas.className = 'tree';

    var treeCode = buildTree(data, Object.keys(data)[0]);
    treecanvas.innerHTML = treeCode;
    main.appendChild(treecanvas);
}

function buildTree (obj, node) {
    var treeString = "<li><div class='card'><div class='card__box'><p class='card__title'>" + obj[node].value + "</p><p class='card__boss'><span class='card__fio'>Козлов Дмитрий Игоревич</span><span class='card__phone'>+791712345678</span></p><p class='card__descr'>что угодно еще</p></div></div>";
    var sons = [];
    for (var i in obj) {
        if (obj[i].parent == node)
          sons.push(i);
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
