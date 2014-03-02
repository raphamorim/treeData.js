/* Start */
window.onload = function() {
    var create = document.querySelector('.btn-create');

    create.addEventListener('click', function() {
        var banana = prompt('Tell us the elements, separate with space or comma');
        var inputs = banana.split(/[ ,]+/);

        var sort = inputs.sort(function (a,b){
          return a-b
        });

        var elements = sort.filter(function (value) {
          return (typeof value === 'string');
        });

        console.log(elements);

        if(elements.length > 1)
          Tree(elements)
        else
          alert('Please sent than more of two valid itens')
    }, false);

};


/* Tree */
function Tree(el) {
    cleanTree();

    var container = document.querySelector('#container');
    var main = document.querySelector('#main');

    var treecanvas = document.createElement('div');
        treecanvas.className = 'tree';

    var htmlCode = '<ul>';

    for (var i in el) {
        var actual = el[i];
        var next = el[1 + parseInt(i)];
        var futureNext = el[2 + parseInt(i)];

        if(next > futureNext)
           htmlCode += node(actual, futureNext, next)
        else
           htmlCode += node(actual, next, futureNext)

        htmlCode += '</ul>';

        el.splice(0, 2);
	  }

    treecanvas.innerHTML = htmlCode;

    console.log(treecanvas);

    main.appendChild(treecanvas);

    fadeOut(container);
    fadeIn(main);
}

/* Temporaly Function */
function cleanTree(){
    var main = document.querySelector('#main');
    main.innerHTML = '';
}


/* Templates */
function node(father, firstSon, secondSon) {
  var node = [];

    if(father != undefined)
        node += '<li><a href="#">' + father + '</a>';

    if(firstSon != undefined)
        node += '<ul><li><a href="#">' + firstSon + '</a></li>';

    if(secondSon != undefined)
        node += '<li><a href="#">' + secondSon + '</a></li>';

    return node;
}
