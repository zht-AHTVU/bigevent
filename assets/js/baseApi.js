// 每次调用post,get,ajax函数时会先调用ajaxPrefilter
$.ajaxPrefilter(function(options){
    console.log(options.url)
    options.url = 'http://ajax.frontend.itheima.net' + options.url

})