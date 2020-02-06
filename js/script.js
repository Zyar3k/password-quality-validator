const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

// /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i walidacja poprawności adresu mail ReqExp


const checkPassword = () => {


  if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(special)){
    p.innerHTML = 'Masz bardzo dobre hasło';
    p.style.color = 'lime';
  } else if (pass.value.length > minValue && pass.value.match(letters)){
    p.innerHTML = 'Masz dobre hasło';
    p.style.color = 'gold';
  } else {
    p.innerHTML = 'Masz za słabe hasło';
    p.style.color = 'tomato';
  }
};


pass.addEventListener('keyup', function(){
  if(pass.value !== ''){
    checkPassword();
  } else {
    p.innerHTML = 'Nie podałeś hasła...';
    p.style.color = '';
  }
});