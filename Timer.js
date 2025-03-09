let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msg = document.getElementById("msg");

let stbtn = document.getElementById("startbtn");
let stpbtn = document.getElementById("stopbtn");
let resetbtn = document.getElementById("resetbtn");
let sbbtn = document.getElementById("sbreakbtn");
let lbbtn = document.getElementById("lbreakbtn");

let interval;
stbtn.addEventListener('click', function() {
    let count = 59;
    interval = setInterval(function() {
        if (count === 0) {
            count = 59;
            let k = document.getElementById("min").innerHTML;
            min.textContent = parseInt(k) - 1;

        }
        sec.textContent = count;
        count = count - 1;
        if (min.value === 0 && sec.value === 0) {
            msg.textContent = "Times Up..!!!!";
        }

    }, 1000);
});
stpbtn.addEventListener('click', function() {
    clearInterval(interval);
});

resetbtn.addEventListener('click', function() {
    msg.textContent = "";
    min.textContent = 25;
    sec.textContent = "00";
});
sbbtn.addEventListener('click', function() {
    msg.textContent = "";
    min.textContent = 5;
    sec.textContent = "00";
});
lbbtn.addEventListener('click', function() {
    msg.textContent = "";
    min.textContent = 15;
    sec.textContent = "00";
});
