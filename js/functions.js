window.onload = function() {
  var myScroll = new IScroll('#wrapper', {
    scrollX: true,
    scrollY: false,
  });
}

document.onkeydown = downSection;

function downSection(e) {
  if (e.key == 'ArrowDown') {
    var elementHeight = document.querySelector("main").clientHeight;
    window.scrollTo({
      top: elementHeight,
      behavior: 'smooth'
    });
  }
}
