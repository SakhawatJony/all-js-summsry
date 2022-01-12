const addToLocalStroage = () => {
const inputFiled = document.getElementById('stroage-id');
const userId = inputFiled.value;
const inputValue = document.getElementById('stroage-value');
const userValue = inputValue.value;

localStorage.setItem(userId, userValue);
inputFiled.value = ' ';
inputValue.value = ' ';




}