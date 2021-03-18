fetch('http://api.openweathermap.org/data/2.5/onecall?lat=49.98654795153299&lon=36.24150062428471&lang=eu&appid=82a380452823fd4c5708c2d3e229ff35')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return toListDay(data.daily)
    })
    .then((listDay) => {
        listDay.forEach((it) => {
            fillWeather(it)
        })
    });

function toListDay(arr) {
    const list = Array(arr.length);
    let i = 0;
    for (const index in arr) {
        const today = new Date;
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + i);
        list[index] = new Day(
            tomorrow.toLocaleDateString("en-US"),
            "http://openweathermap.org/img/wn/" + arr[index].weather[0].icon + "@2x.png",
            arr[index].temp.day - 273.15
        )
        i++;
    }
    return list;
}

function Day(day, img, temperature) {
    this.day = day;
    this.img = img;
    this.temperature = temperature;
}

function fillWeather(day) {
    const layout = document.createElement("div");
    let item = document.createElement("div");
    item.innerText = day.day;
    layout.appendChild(item);

    item = document.createElement("img");
    item.src = day.img;
    layout.appendChild(item);
    item = document.createElement("div");
    item.innerText = Number.parseInt(Number(day.temperature)) + "°c";
    item.classList.add("temperature");
    layout.appendChild(item);
    document.getElementById("container").appendChild(layout);
}