const Convert12to24Hours = (fullTime) => {
    let [hours, minutes] = fullTime.split(":");

    let modifier = "AM";

    if (hours > "12") {
        hours -= 12
        modifier = "PM"
    }
    if(hours === "00")
    {
        hours = parseInt(hours) + 12
        modifier = "AM"
    }

    return `${hours}:${minutes} ${modifier}`

}


console.log(Convert12to24Hours("14:02"));
console.log(Convert12to24Hours("16:06"));
console.log(Convert12to24Hours("12:00"));
console.log(Convert12to24Hours("00:00"));