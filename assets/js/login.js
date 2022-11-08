$(function(){
    // 点击去注册账号链接
    $('#link-reg').on('click', function(){
        $('.reg-box').show()
        $('.login-box').hide()
    })
    // 点击去登录链接
    $('#link-login').on('click', function(){
        $('.reg-box').hide()
        $('.login-box').show()
    })


    // 从layui中获取form对象
    var form = layui.form
    // 通过form.verify()函数定义校验规则
    form.verify({
        pwd: [ /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        username: function(value, item){ //value：表单的值、item：表单的DOM对象
            if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
              return '用户名不能有特殊字符';
            }
            if(/(^\_)|(\__)|(\_+$)/.test(value)){
              return '用户名首尾不能出现下划线\'_\'';
            }
            if(/^\d+\d+\d$/.test(value)){
              return '用户名不能全为数字';
            } 
          } ,
        repwd:function(value){
            var pwd = $('.reg-box [name=password]').val()
            if (pwd != value){
                return '两次输入密码不一致'
            }
        }
            
    })


    // 监听注册
    $('#form-reg').on('submit', function(e){
        e.preventDefault()
        $.post('/api/reguser', 
        {
            username:$('#form-reg [name=username]').val(), 
            password:$('#form-reg [name=password]').val()
        },
        function(res){
            if (res.status !== 0){
                return console.log(res.message)
            }
            console.log('注册成功')
        })
     })


    //  监听登录
    $('#form-login').on('submit', function(e){
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: $(this).serialize(),
            success: function(res){
                if (res.status !== 0){
                    return layer.msg('登录失败')
                }

                // 将登录成功的token保存到localStorage
                localStorage.setItem('token', res.token)
                // 跳转到主页
                location.href = 'index.html'
                console.log(res.token)
            }
        })
    })
    

})