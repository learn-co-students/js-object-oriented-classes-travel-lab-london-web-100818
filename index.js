class Driver {
    constructor(name, day) {
        this.name = name
        this.day = day
        this.startDate = new Date(day)
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear()
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled() {

        const eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
        ]
    
        this.getHorizontalDiff = (beginningLocation, endingLocation) => {
            let start = null
            let end = null
            eastWest.forEach(function(item, index) {
                if (beginningLocation === item) {
                    start = index
                }
                if (endingLocation === item) {
                    end = index
                }
            })
            return end - start
        }
        
        const vertical = (this.endingLocation.vertical - this.beginningLocation.vertical)
        const horizontal = this.getHorizontalDiff(this.beginningLocation.horizontal, this.endingLocation.horizontal)

        return vertical + horizontal
    }

    estimatedTime(rushHour) {
        return !rushHour ? this.blocksTravelled() / 3 : this.blocksTravelled() / 2
    }


}
