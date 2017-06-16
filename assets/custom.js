var ativado = false;
function show_search() {
  if (!ativado) {
    document.getElementById('search-bar').className = "ativado";
    document.getElementById('navbar-menu').className = "hide";
    document.getElementById("label_search").focus();
    ativado = true;
  } else {
    document.getElementById('search-bar').className = "hide desativado";
    document.getElementById('navbar-menu').className = "";
    ativado = false;
  }
}
function hide_search() {
  document.getElementById('search-bar').className = "hide";
  document.getElementById('navbar-menu').className = "";
  ativado = false;
}
