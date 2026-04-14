// SHOW FUN ZONE
function showFunZone() {
  document.getElementById('funzone-screen').style.display = 'block';
}

// SHOW EXPLORE JAPAN
function showExploreJapan() {
  document.getElementById('funzone-screen').style.display = 'none';
  document.getElementById('explorejapan-screen').style.display = 'block';
}

// BACK TO MAIN MENU
function goBackMain() {
  document.getElementById('funzone-screen').style.display = 'none';
}

// BACK TO FUN ZONE
function goBackFunZone() {
  document.getElementById('explorejapan-screen').style.display = 'none';
  document.getElementById('funzone-screen').style.display = 'block';
}
function goFunZone() {
  window.location.href = "FunZone.html";
}
function goHome() {
  window.location.href = "index.html";
}
function goFunZone() {
  window.location.href = "FunZone.html";
}