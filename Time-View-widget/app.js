function getTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = formattedTime;
  }
setInterval(getTime, 1000);