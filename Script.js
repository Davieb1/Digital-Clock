// Setting variables

let timezoneOffset = new Date().getTimezoneOffset(); // get the timezone offset of the user

setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');



    // Set Time
    let h = new Date(new Date().getTime() + timezoneOffset * 60 * 1000).getHours(); // add the timezone offset
    let m = new Date(new Date().getTime() + timezoneOffset * 60 * 1000).getMinutes();
    let s = new Date(new Date().getTime() + timezoneOffset * 60 * 1000).getSeconds();
    let am = h >= 12 ? "PM" : "AM";


    // Add a zero before single digit numbers
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dot.style.transform = `rotate(${h * 30} deg)`;
    min_dot.style.transform = `rotate(${m * 6} deg)`;
    sec_dot.style.transform = `rotate(${s * 6} deg)`;
}, 1000) // 1000 milliseconds delay