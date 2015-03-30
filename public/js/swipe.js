$(function () {
    //$('#page').hammer().on("swipeleft", function(e){
        //alert('ee');
    //});

    $(document).keydown(function(event){
        var key = event.which;
        switch(key) {
            case 37:
                if(typeof $('#jquery-prev').attr('href') !== 'undefined'){
                    window.location.href = $('#jquery-prev').attr('href');
                 };
            break;
            case 39:
                if(typeof $('#jquery-next').attr('href') !== 'undefined'){
                    window.location.href = $('#jquery-next').attr('href');
                 };
            break;
        }
    });
});
