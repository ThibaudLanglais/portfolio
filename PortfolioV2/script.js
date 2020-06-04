window.addEventListener('load', stopLoader);

function stopLoader(event) {
  setTimeout(endLoadingScreen,1000);
  let body = document.querySelector('body');
}

function reloadPage(){
    window.location.reload();
}
function endLoadingScreen() {
  document.querySelector('.loader-container').classList.toggle('foregroundDisappear');
  document.getElementById('loader').classList.toggle('loading');
}
