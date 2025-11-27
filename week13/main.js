function showModal() {
  const dialog = document.querySelector(".ecors-dialog");
  dialog.style.display = "flex";
  dialog.showModal();
}

fetchData();

function handleLogin(e) {
  window.location.href = './reserve.html';
}

const manageButton = document.querySelector('.ecors-button-manage')
manageButton.addEventListener('click',(e)=>{
  e.preventDefault()
  handleLogin();
});