function pwCheck() {
  var pw1 = document.getElementById('password').value;
  var pw2 = document.getElementById('confirmPassword').value;

  if (pw1 != pw2) {
    document.getElementById('password').style.border= "3px solid red";
    document.getElementById('confirmPassword').style.border= "3px solid red";
  }
  else {
    document.getElementById('password').style.border= "3px solid green";
    document.getElementById('confirmPassword').style.border= "3px solid green";
  }
}
