window.onload = function() {
    var formElements = document.getElementsByTagName("form")[0].elements;

    for (var i = 0; i < formElements.length; i++) {
        formElements[i].oninput = function(event) {
            event.target.setCustomValidity("");
        }
    }
}

function checkInput(form) {
    var formElements = form.elements;
    var name = JSON.stringify(formElements.name.value);
    var password = formElements.password;
    var checkPassword = formElements.checkPassword;
    if (password.value != checkPassword.value) {
        checkPassword.setCustomValidity("确认密码与登录密码必须相同!!");
        return false;
    } else {
        alert("注册成功: 账号：" + name + "密码：" + JSON.stringify(password.value) + "请牢记");
        return true;
    }

}