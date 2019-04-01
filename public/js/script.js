$(document).ready(function(){

});

$('#form').submit(function(event){
    event.preventDefault();
  //  $('#tweetCard').empty();
    var url = 'http://192.168.33.10:5000';
    var value = $('#search').val();
    if(value.length > 0){
        $('#tweetCard').append('<div class="loader"></div>');
        url += "/search=" + value;
    } else {
        alert("please enter a value");
        return;
    }

    $.ajax({
        url: url,
        dataType: 'json',
        success:function(tweet){
            console.log(tweet);
            //$('#tweetCard').empty();
            for (var i = 0; i < tweet.statuses.length; i++) {
            $('#tweetCard').append(
                '<div class="card flex-row flex-wrap">'+
                    '<div class="card flex-row flex-wrap">'+
                        '<div class="card-header border-0">'+
                            '<img src="'+tweet.statuses[i].user.profile_image_url+'" alt="">'+
                        '</div>'+
                    '<div class="card-block px-2">'+
                        '<h4 class="card-title">'+tweet.statuses[i].user.name+'</h4>'+
                        '<p class="card-text">'+tweet.statuses[i].text+'</p>'+
                    '</div>'+
                    '<div class="card-footer w-100">'+
                        tweet.statuses[i].created_at+
                    '</div>'+
                '</div>'
              )
            };//for closing
            // console.log(tweet.statuses[0]);
        },
        error:function(error){
            $('#tweetCard').empty()
            alert("error, look into your console");
            console.log(error);
        }
    });
})
