const moment=require("moment")

let value = { stratTime: '09:00', endTime: '12:00', time: '00:30' };
var dateformat = 'hh:mm';

var starttimevalue = moment(value.stratTime,dateformat);
var intervaltime = moment(value.stratTime,dateformat).add(value.time,dateformat);
var endtimevalue = moment(value.endTime,dateformat);

function resultTime() {
    var result = [];
    while (starttimevalue < endtimevalue) {
        var timeformat = starttimevalue.format(dateformat) + "-" + intervaltime.format(dateformat);
        result.push(timeformat);
        starttimevalue.add(value.time,dateformat);
        endtimevalue.add(value.time,dateformat);
    }
    return result;
}
    console.log(resultTime());