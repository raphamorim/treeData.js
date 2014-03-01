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
    });

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

        var bla = el.indexOf(1 + parseInt(i));
        var blah = el.indexOf(2 + parseInt(i));

        el.splice(bla, 1);
        el.splice(blah, 1);

        // console.log('actual: ' + atual);
        // console.log('next: ' + next);
        // console.log('next2: ' + futureNext);
        // console.log('\n');
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


/* Tools */
function fadeIn(el) {
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 1200;
      last = +new Date();

      if (+el.style.opacity < 1)
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    };

    tick();
}

function fadeOut(el) {
    el.style.opacity = 1;

    var last = +new Date();
    var tick = function() {
      el.style.opacity = el.style.opacity - (new Date() - last) / 120;
      last = +new Date();

      if (el.style.opacity > 0)
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
      else
        el.style.display = 'none'
    };

    tick();
}


/* Templates */
function node(father, firstSon, secondSon) {
    var node = [];
        node += '<li><a href="#">' + father + '</a><ul>';
        node += '<li><a href="#">' + firstSon + '</a></li>';
        node += '<li><a href="#">' + secondSon + '</a></li>';
    return node;
}
