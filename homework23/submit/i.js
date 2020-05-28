let example1_form = document.querySelector('.example1-form');
example1_form.addEventListener('submit', function (e) {
  e.preventDefault();
  let login = this.querySelector('input[name="login"]'),
      password = this.querySelector('input[name="password"]');
  if (login.value == ''){
      login.nextElementSibling.style.display = 'block';
  }
  console.log(password.value)
  if (password.value == "" || password.value <= 8 || login.value == '') {
    password.nextElementSibling.style.display = 'block';
  }
  else {
    document.querySelector('.success').style.display = 'block';
    this.style.display = 'none';
  }
});

