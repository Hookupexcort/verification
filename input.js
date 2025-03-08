var codeError = document.getElementById('code-error');


function validateCode() {
    var code = document.getElementById("iv-code").value;

    if(code.length == 0) {
        codeError.innerHTML = 'Invitation code is required';
        return false;
    }

    if (!code.match("SWAD8W")) {
      codeError.innerHTML = "INCORRECT invitation code";
      return false;
    }
    codeError.innerHTML = 'VALID INVITATION CODE';
    return true
}