
function fetchRandomDogimg(){
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var Imageurl = responseJSON.message;
        $('#dog-image').attr('src',Imageurl);
    };
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random');
    xhrRequest.send();
}

$('#fetchbutton').click(fetchRandomDogimg);