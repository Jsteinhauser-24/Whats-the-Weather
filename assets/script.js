var card = document.getElementsByClassName("#card")
var APIkey = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=3f33c11bcd41f8d8b9db43c7db54f707"
fetch(APIkey)

.then(function(response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});
