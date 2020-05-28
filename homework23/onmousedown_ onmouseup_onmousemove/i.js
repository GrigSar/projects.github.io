let block = document.getElementById("block");
delta_x = 0;
delta_y = 0;
block.onmousedown = function saveXY() {
  document.onmousemove = function moveBlock(obj_event) {
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
    }
    new_x = delta_x + x;
    new_y = delta_y + y;
    block.style.top = new_y + "px";
    block.style.left = new_x + "px";
  }
};
document.onmouseup = function clearXY() {
  document.onmousemove = null;
};


