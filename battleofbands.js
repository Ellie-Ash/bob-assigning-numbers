console.log("hello")

let bandNumber = 1

const takeNumber = function (bandName) {
    return `${bandNumber++}. ${bandName}`
    // increment in the return so that the variable is taken at face value, instead of incrementing in addition to 1, it goes straight into incrementing STARTING with 1
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console