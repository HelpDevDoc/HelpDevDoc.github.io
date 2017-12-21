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
            var eleParent=$("#js_sonw");
            var maxWidth=parseInt(eleParent.width());
            // console.log(maxWidth)
            var randomLeft=Math.floor(Math.random()*maxWidth)-100;
            // console.log(randomLeft)
            return randomLeft;
        }
        // 让其向下移动
        function moveDown(){
            var moveElem=creatDiv();

            var eleTop=moveElem.position().top;

            var t=setInterval(function(){
                eleTop++;
                moveElem.css('top',eleTop+"px");
                if(eleTop>=$(window).height()){
                    clearInterval(t);
                    // console.log(1)
                    document.getElementById('js_sonw').removeChild(moveElem.get(0));
                }
            },10);
        }
        var t=setInterval(function(){
            moveDown();
        },100);
    })()
    /************/


});
