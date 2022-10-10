const Convert12to24Hours = (fullTime) => {
    const [time, modifier] = fullTime.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
        hours = "00"
    }

    if(modifier === "PM"){
        hours = parseInt(hours) + 12;
    }

    return `${hours}:${minutes}`

}


console.log(Convert12to24Hours("02:02 PM"));
console.log(Convert12to24Hours("04:06 PM"));
console.log(Convert12to24Hours("12:00 PM"));
console.log(Convert12to24Hours("12:00 AM"));