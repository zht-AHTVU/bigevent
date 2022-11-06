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


})