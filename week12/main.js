import { formatUtcDateToBrowserLocalReserve} from './utils';

async function loadPeriod() {

    const get = await getTime()
    // check current period
    const currentPeriodStatus = document.getElementById("open")
    if(!get.currentPeriod){
        currentPeriodStatus.textContent = 'closed'
        currentPeriodStatus.classList.add("close")
    }else{
        currentPeriodStatus.classList.remove("close")
            // current
        const start = document.getElementById("current_period")
        //start and endtime
        const currentStart = get.currentPeriod.startDateTime
        const currentStartTime = formatUtcDateToBrowserLocalReserve(currentStart) //do in function
        const currentEnd = get.currentPeriod.endDateTime
        const currentEndTime = formatUtcDateToBrowserLocalReserve(currentEnd) //do in function
        //call time 
        start.textContent = `Period: ${currentStartTime.formattedDate}, ${currentStartTime.formattedTime} - ${currentEndTime.formattedDate} , ${currentEndTime.formattedTime} , ${currentStartTime.userTimeZoneName}` 

    }

}