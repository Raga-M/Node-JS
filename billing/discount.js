class Discount{

    offer(cost){
    if(cost > 1000){
        const amt= cost*(0.9)
    console.log(`after adding offer amout pay ₹${amt}`)
    }
    else{
        console.log(` offer Will apply only your buy greater than ₹1000`)
    }
}
}
module.exports=Discount;