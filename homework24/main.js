let range = document.querySelector('.num');
let rangeNumber = document.querySelector('.range-num');
range.oninput = function () {
    rangeNumber.style.left = this.value -10  + 'px';
    rangeNumber.innerHTML = this.value;
};

document.querySelector('.img').addEventListener("input", function () {
    format = document.querySelector(".img").value;
    step = document.querySelector(".photo");
    step.width = 14*format;
});

document.querySelector('.range-change').addEventListener("input", function () {
    document.querySelector('.rangeValue').innerHTML = this.value;
    document.querySelector('.fillRangeValue').style.width = +this.value+ "%";
});

