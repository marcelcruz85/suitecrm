$( document ).ready(function() {
    console.log( "ready!" );
    $( document ).ajaxComplete(function() {

        //change the size and position for email template field in compose modal
        $('#detailpanel_-1 > div > div > div:nth-child(1)').removeClass('col-sm-6');
        $('#detailpanel_-1 > div > div > div:nth-child(1)').addClass('col-sm-12');

        $('#detailpanel_-1 > div > div > div:nth-child(1) > .label').removeClass('col-sm-4');
        $('#detailpanel_-1 > div > div > div:nth-child(1) > .label').addClass('col-sm-2');

        //hide related to from email compose modal
        $('#detailpanel_-1 > div > div > div:nth-child(2)').hide();
      });
});


