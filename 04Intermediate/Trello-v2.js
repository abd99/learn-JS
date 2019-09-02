// Define an object
let meetObject = {
    meetScheduled:0,
    meetDone:0
}

// Define function to add meetings
let meetAdd = function(object, numberAdd) {
    object.meetScheduled += numberAdd
}

// Define function to increment done meetings
let meetingsDone = function(object, numberDone) {
    object.meetDone += numberDone
}

// Define function to display meetings left
let getSummaryOfTheDay = function(object) {
    return `Meetings left: ${object.meetScheduled - object.meetDone}`
}

// Add meetings
meetAdd(meetObject, 5)

// Add more meetings
meetAdd(meetObject, 4)

// Complete meetings
meetingsDone(meetObject, 7)

// Display Summary
console.log(getSummaryOfTheDay(meetObject));