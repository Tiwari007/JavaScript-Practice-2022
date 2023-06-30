let amount = 1341
let hundres_notes = 0, fifty_notes = 0, twenty_notes = 0, ones_notes =  0

let temp_amount = amount

while(temp_amount > 0 ){
    if(temp_amount >= 100){
        hundres_notes = parseInt(temp_amount / 100)
        temp_amount %= 100
    }
    else if(temp_amount >= 50){
        fifty_notes = parseInt(temp_amount / 50)
        temp_amount %= 50
    }
    else if(temp_amount >= 20){
        twenty_notes = parseInt(temp_amount / 20)
        temp_amount %= 20
    }
    else{
        ones_notes = parseInt(temp_amount / 1)
        temp_amount %= 1
    }
}


console.log(`100 Notes - ${hundres_notes}
50 Notes - ${fifty_notes}
20 Notes - ${twenty_notes}
1 Notes - ${ones_notes}`)