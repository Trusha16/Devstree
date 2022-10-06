//use if..else loop

let day = "Friday";
if(day=="Monday"){
    console.log("Today Is Monday");
}
else if(day=="Tuesday"){
    console.log("Today Is Tuesday");
}
else if(day=="Wednesday"){
    console.log("Today Is Wednesday");
}
else if(day== "Thursday"){
    console.log("Today Is Thursday");
}
else if(day== "Friday"){
    console.log("Today Is Friday");
}
else if(day== "Saturday"){
    console.log("Today Is Saturday");
}
else{
    console.log("input is Not Valid!");
}


//use switch cases
let days;
switch("Monday"){
    case "Sunday":
        //days=="Sunday";
        console.log("Today is Sunday ");
    break;
    case "Monday":
       // days=="Monday";
        console.log("Today is Monday ");
    break;
    case "Tuesday":
        //days=="Tuesday";
        console.log("Today is Tuesday");
    break;
    case "Wednesday":
        //days=="Wednesday";
        console.log("Today is Wednesday");
    break;
    case "Thursday":
       // days=="Thursday";
        console.log("Today is Thursday");
    break;
    case "Friday":
        //days=="Friday";
        console.log("Today is Friday");
    break;
    case "Saturday":
        //days=="Saturday";
        console.log("Today is Saturday");
    break;
    default:
        console.log("Choose any Day..");
        break;
}
