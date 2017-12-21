$(function () {
    const designWidth=750;
    function resize(designWidth) {
        let deviceWidth=$('html').width();
        if(deviceWidth<750){
            $('html').css('fontSize',`${deviceWidth/designWidth*100}px`)
        }else{
            $('html').css('fontSize','100px')
        }

    }
    $(window).resize(resize(750))
    resize(750)
})
