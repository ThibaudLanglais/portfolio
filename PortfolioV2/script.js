window.addEventListener('load', stopLoader);

function stopLoader(event) {
  setTimeout(endLoadingScreen,0);
  let body = document.querySelector('body');
}

function reloadPage(){
    window.location.reload();
}
function endLoadingScreen() {
  document.querySelector('.saijaLoader').classList.toggle('loadingTextEnd');
  document.getElementById('loader').classList.toggle('loading');
  document.getElementById('diamond').classList.toggle('loadingTextEnd');
}
