const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const email = document.querySelector('#email');
const emailInfo = document.querySelector('.emailInfo');
const checkMailBtn = document.querySelector('.checkMailBtn');
const ReqExpMail = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

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



const checkMail = () => {
  var OK = ReqExpMail.exec(email.value);
  if (!OK) {
    emailInfo.innerHTML = `${email.value} isn\'t a correct mail!`
    console.error(email.value + ' isn\'t a correct mail!'); 
    emailInfo.style.color = 'tomato';
  } else {
    emailInfo.innerHTML = `Thanks, your mail is OK: ${email.value}`;
    console.log('Thanks, your mail is ' + OK[0]);
    email.innerHTML = '';
  };
}

checkMailBtn.addEventListener('click', function(){
  if(email.value !== ''){
    checkMail();
  } else {
    emailInfo.innerHTML = 'Nie podałeś adresu...';
    emailInfo.style.color = '';
  }
});