fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.44&lon=-94.04&appid=3f33c11bcd41f8d8b9db43c7db54f707")
.then(function(response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});