$(function () {
    /*创建雪花*/
    (function(){
        function creatDiv(){
            var snowDiv=$("<div>");
           $("#js_sonw").append(snowDiv);
            var whatName=["snow_one","snow_two","snow_three","snow_four"];
            var index=Math.floor(Math.random()*whatName.length);
            snowDiv.addClass(whatName[index]);
            var whatLeft=getLeft()+'px';
            snowDiv.css('left',whatLeft);
            return snowDiv;
        }
        function getLeft(){
            var eleParent=$("#js_sonw").get(0);
            var style=window.getComputedStyle(eleParent);
            var maxWidth=parseInt(style.width);
            var randomLeft=Math.floor(Math.random()*maxWidth)-100;
            return randomLeft;
        }
        // 让其向下移动
        function moveDown(){
            var moveElem=creatDiv().get(0);
            var eleStyle=window.getComputedStyle(moveElem);
            var eleTop=parseInt(eleStyle.top);

            var t=setInterval(function(){
                eleTop++;
                moveElem.style.top=eleTop+"px";
                if(eleTop>=$(window).height()){
                    clearInterval(t);
                    document.getElementById("js_sonw").removeChild(moveElem);
                }
            },10);
        }
        var t=setInterval(function(){
            moveDown();
        },100);
    })()
    /************/


});
