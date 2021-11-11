var height = localStorage.getItem("height");
var weight = localStorage.getItem("weight");

var box_imc = document.getElementById('imc-value');
var register_imc = document.getElementById('register-imc');
var update_imc = document.getElementById('update-imc');

if (height != "" && weight != "") {
  var imc = weight/(height * height);
  box_imc.append(imc.toFixed(2));
  update_imc.append("Atualizar Dados");
} else {
  register_imc.append("Gravar dados");
}
