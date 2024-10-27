function speedcheck(speed){
    const speedLimit = 70;
    const demeritPointsPerKm = 5
    if (speed <= speedLimit){
        console.log('ok');
    }else {

    const demeritPoints = Math.floor((speed -speedLimit) / demeritPointsPerKm);
       if (demeritPoints > 12){
         console.log("licence suspended")
       }else {
         console.log(`points;${demeritPoints}`);
       }
    }
}
speedcheck(67)