$(document).ready(function(){
    var arr = [];

    var ref = new Wilddog("https://wd0398734776yjkqzu.wilddogio.com/");
    //向野狗云写入数据
    $("#sub").click(function(){
       var value = $("#txt").val();
       ref.push(value);
       $("#txt").val("");
       var txtObj = $("<div id =\"message\"></div>");
       txtObj.text(value);
       $("#show").append(txtObj);
       move(txtObj);
    });
    //提交时处理键盘点击事件
    $("#txt").keypress(function(event){
        if(event.keyCode == "13") {
            $("#sub").trigger("click");
        }
    });
    //显示数据并移动
    var min = $("#mask").offset().top;
    var max = min + $("#mask").height();
    var top = min - 50;
    //数据移动
    function move (obj){
        var left = $("#mask").width() - obj.width();
        top = top + 50;
        if(top > (max - 50)){
            top = min;
        }
        obj.css({
            left: left,
            top: top,
            color: getRandomColor()
        });
        var time = 20000 + 10000 * Math.random();
        obj.animate({
            left: "-" + left + "px"
        }, time, function(){
            obj.remove();
        });
    };
    //随机颜色
    function getRandomColor(){
        return '#' + (function (h){
            return new Array(7 - h.length).join("0") + h
        })((Math.random() * 0x1000000 << 0).toString(16));
    };
    //指定时间从野狗云随机拿数据并显示
    function getAndShow(){
        if(arr.length > 0){
            var index = Math.floor(Math.random() * arr.length + 1) - 1;
            var txt = $("<div>" + arr[index] + "</div>");
            $("#show").append(txt);
            move(txt);
            setTimeout(getAndShow, 2000);
        }else{
            setTimeout(getAndShow, 100);
        }
    };
    //调整动画在每秒中的运行速度
    jQuery.fx.interval = 20;
    getAndShow();
    //监听野狗云数据变化
    //添加数据
    ref.on("child_added", function(data){
        var text = data.val();
        arr.push(text);
        /*var txtObj = $("<div id =\"message\"></div>");
        txtObj.text(text);
        $("#show").append(txtObj);
        move(txtObj);*/
    });
    //移除数据
    ref.on("child_removed", function(){
        arr = [];
        $("#show").empty();
    });
    //处理清除按钮事件
    $("#clean").click(function(){
        ref.remove();
        arr = [];
        $("#show").empty();
        top = min - 50;
    });
});