async function getTime(){
    
    const response = "https://bscit.sit.kmutt.ac.th/intproj25/nw1/itb-ecors/api/v1/reservation-periods";
    try{
        const time = await fetch(response);
        if(!time.ok){
            throw new Error(`Response status: ${time.status}`)
        }
        
        const result = await time.json()
        console.log(result)

        return result

    }catch(error){
        console.error(error.message);
    }

}

loadPeriod()