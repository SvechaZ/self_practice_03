  //check next period
    const nextPeriodMessage = document.querySelector('.next-message')
   
    console.log(get.nextPeriod)
    if(!get.nextPeriod){
        nextPeriodMessage.textContent = 'There are no upcoming active reservation periods.'
        // console.log("dawdaw")
        
    }
    else{
        // console.log('kuy')
            // next
        nextPeriodMessage.style.color = 'black'    
        const end = document.getElementById("next-period")
        //start
        const nextStart = get.nextPeriod.startDateTime
        const nextStartTime = formatUtcDateToBrowserLocalReserve(nextStart)
        // end
        const nextEnd = get.nextPeriod.endDateTime
        const nextEndTime = formatUtcDateToBrowserLocalReserve(nextEnd)
        

        end.textContent = `Period: ${nextStartTime.formattedDate}, ${nextStartTime.formattedTime} - ${nextEndTime.formattedDate} , ${nextEndTime.formattedTime} , ${nextEndTime.userTimeZoneName} `

    }

 
