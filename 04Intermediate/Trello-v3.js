// Define object
let myTodos = {
    meetScheduled:0,
    meetDone:0,
    // Define methods to use members
    // Define method to add meetings
    addMeetings: function(num) {
        this.meetScheduled += num
    },
    // Define method to increment done meetings
    meetingsDone: function(numberDone) {
        this.meetDone += numberDone
    },
    // Define method to display meetings left
    getSummaryOfTheDay: function() {        
        return `Meetings left: ${this.meetScheduled - this.meetDone}`
    }
}
// Call all the methods
myTodos.addMeetings(7)
myTodos.meetingsDone(3)
console.log(myTodos.getSummaryOfTheDay())