const upForm = document.querySelector('.upForm');
if (upForm) {
  upForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      login, password, name, email,
    } = e.target;
    const user = await fetch('/auth/api/sign-up', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value, password: password.value, name: name.value, email: email.value,
      }),
    });
    const data = user.json();
    console.log(data.message)
    if (data.message === 'success') {

    } else {
      alert(data.message);
    }
  });
}
