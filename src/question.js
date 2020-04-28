// 1.现有一个json，在某一维度中可能会出现‘score’键，请用任意语言写一个check方法判断该json是否满足要求。要求如下：
// a. 任意一个键为score的值预期是一个整型数字且大于60，则检查通过
// b. 若不存在键为score的值，则检查通过
//运行成功

function check_wrap(json) {
    var flag_1 = false;
    var flag_2 = true;
    check(json);
    return flag_1||flag_2

    function check(json) {
        //判断是否是array类型
        //控制台输出查看函数结果
        // console.log(Object.prototype.toString.call({}));
        // console.log(Object.prototype.toString.call([]));
        //如果socre键存在，flag改成false，
        if(json["score"]){
            flag_2 = false;
        }
        //如果socre键存在并且类型是整型
        if(json["score"]&&typeof json["score"]==="number"&&json["score"]>60){
            flag_1 = true;
        }
        for (let key in json){
            //循环遍历json对象
            //json数据里面可能的需要深层次遍历的有两种：array和object
            if(Object.prototype.toString.call(json[key]) === '[object Array]'){
                //如果是数组的话循环遍历数组对象，然后调用check
                for (let item of json[key]){
                    check(item);
                }
            }else if (Object.prototype.toString.call(json[key]) === '[object Object]'){
                //如果是object，继续调用check
                check(json[key])
            }
        }
    }
}

check_wrap({
    "score":65
})


// 2.实现一个函数clone，可以对JavaScript中的5种主要的数据类型（
// 包括Number、String、Object、Array、Boolean）进行值复制

function clone(obj) {
    var later;
    switch (typeof obj) {
        //第一组三种都是值类型，直接复制
        case "number":
            later = obj;
            break;
        case "string":
            later = obj;
            break;
        case "boolean":
            later = obj;
            break;
        //第二组两中都是引用类型，需要特别处理
        case "object":
            //数组
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                later = [];
                for (var i = 0; i < obj.length; i++) {
                    later.push(clone(obj[i]));
                }
            } else {
                //是obj的情况
                later = {};
                for (var j in obj) {
                    later[j] = clone(obj[j])
                }
            }
            break;
    }
    return later
}

//3红绿灯
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <style>
// .circle {
//     width: 30px;
//     height: 30px;
//     border-radius: 15px;
//     background-color: white;
//     border: 1px solid #000000;
// }
// </style>
// <script src="../static/js/jq.js"></script>
//     <body>
//     <div class="circle red"></div>
//     <div class="circle yellow"></div>
//     <div class="circle green"></div>
//     </body>
//     <script>
//     function fn() {
//         new Promise((resolve, reject) => {
//             $(".red").css({
//                 "background-color": "red"
//             })
//             $(".yellow").css({
//                 "background-color": "white"
//             })
//             $(".green").css({
//                 "background-color": "white"
//             })
//             setTimeout(() => {
//                 console.log("red");
//                 resolve("yellow")
//             }, 5000)
//         }).then((yellow) => {
//             $(".red").css({
//                 "background-color": "white"
//             })
//             $(".yellow").css({
//                 "background-color": "yellow"
//             })
//             $(".green").css({
//                 "background-color": "white"
//             })
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     console.log("yellow")
//                     resolve("green")
//                 }, 5000)
//             })
//         }).then(() => {
//             $(".red").css({
//                 "background-color": "white"
//             })
//             $(".yellow").css({
//                 "background-color": "white"
//             })
//             $(".green").css({
//                 "background-color": "green"
//             })
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     console.log("green")
//                     resolve("red")
//                     fn()
//                 }, 5000)
//             })
//         })
//     }
//
//
//
//
// </script>
// </html>