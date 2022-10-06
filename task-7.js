let weeklyArray = ["Mon", "Wed", "Fri"];
let mon_start_time = 10;
let tue_start_time = 9;
let wed_start_time = 11;
let thu_start_time = 25;
let fri_start_time = 14;
let sat_start_time = 16;
let sun_start_time = 50;

let time = {
    mon_start_time,
    tue_start_time,
    wed_start_time,
    thu_start_time,
    fri_start_time,
    sat_start_time, sun_start_time
};

let result = weeklyArray.map(
    (value) => ({
        Name: value,
        start_time: time[value.toLowerCase() + "_start_time"]
    }));
console.log(result);