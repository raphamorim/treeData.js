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
