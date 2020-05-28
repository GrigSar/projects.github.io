const txt = document.querySelector('.info');
txt.addEventListener('input', function () {
    result.innerHTML = this.value;
});
