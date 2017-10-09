    $(function() {
        var username = $("input[name='username']");
        var password = $("input[name='password']");
        var confirmPassword = $("input[name='confirmPassword']");
        var email = $("input[name='email']");
        var save = $(".bottom>button:first");
        username.focus();
        username.blur(function() {

            if (username.val() == "") {
                $(".form2 p").html("用户名不能为空！");
                save.attr('disabled', true);
                return false;
            } else if (username.val().length < 6 || username.val().length > 20) {
                $(".form2 p").html("用户名称长度：6~20");
                save.attr('disabled', true);
                return false;
            } else {
                $(".form2 p").html("");
                save.attr('disabled', false);
            }

        });

        password.blur(function() {

            if (password.val() == "") {
                $(".form3 p").html("密码不能为空！");
                save.attr('disabled', true);
                return false;
            } else if (password.val().length < 6 || password.val().length > 20) {
                $(".form3 p").html("密码长度：6~20");
                save.attr('disabled', true);
                return false;
            } else {
                $(".form3 p").html("");
                save.attr('disabled', false);
            }

        });

        confirmPassword.blur(function() {

            if (confirmPassword.val() == "") {
                $(".form4 p").html("确认密码不能为空！");
                save.attr('disabled', true);
                return false;
            } else if (confirmPassword.val().length < 6 || confirmPassword.val().length > 20) {
                $(".form4 p").html("确认密码长度：6~20");
                save.attr('disabled', true);
                return false;
            } else if (password.val() != confirmPassword.val()) {
                $(".form4 p").html("两次密码不同！");
                save.attr('disabled', true);
                return false;
            } else {
                $(".form4 p").html("");
                save.attr('disabled', false);
            }
        });

        email.blur(function() {
            if (email.val() == "") {
                $(".form5 p").html("邮箱不能为空！");
                save.attr('disabled', true);
                return false;
            } else {
                $(".form5 p").html("");
                save.attr('disabled', false);
            }
        });
        save.on("click", function() {
            alert("保存成功！！！");
        });
    });