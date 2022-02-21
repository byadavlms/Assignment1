class TempTracker {

    constructor() {
        this.count = 0;

        // mode
        this.maxOccurrences = 0;
        this.occurrences = new Array(150).fill(0);
        this.mode = null;

        // mean
        this.total = 0;
        this.mean = null;

        // min and max
        this.minTemp = null;
        this.maxTemp = null;
    }

    insert(temperature) {
        this.count++;

        // mode
        this.occurrences[temperature]++;
        if (this.occurrences[temperature] > this.maxOccurrences) {
            this.mode = temperature;
            this.maxOccurrences = this.occurrences[temperature];
        }

        // mean
        this.total += temperature;
        this.mean = this.total / this.count;

        // min and max
        if (this.maxTemp === null || temperature > this.maxTemp) {
            this.maxTemp = temperature;
        }
        if (this.minTemp === null || temperature < this.minTemp) {
            this.minTemp = temperature;
        }
    }

    get_max() {
        return this.maxTemp;
    }

    get_min() {
        return this.minTemp;
    }

    get_mean() {
        return this.mean;
    }

    get_mode() {
        return this.mode;
    }
}


let temp = new TempTracker();

temp.insert(2);
temp.insert(3);
temp.insert(4);
temp.insert(8);
temp.insert(7);
console.log(temp.get_min());
console.log(temp.get_max());
console.log(temp.get_mean());
console.log(temp.get_mode());
