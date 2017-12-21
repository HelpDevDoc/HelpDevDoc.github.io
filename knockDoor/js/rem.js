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
    $('window').on('resize',function () {
        resize(designWidth)
    })
    resize(designWidth)
})
