export const stats = {
    data: {},
    computed:{},
    log(key, value){
        if(!this.data[key]) this.data[key] = {};
        this.data[key][value] = (this.data[key][value])
            ? this.data[key][value] + 1
            : 1;
    },
    logLevelStats(key1, key2, value){
        if(!this.data[key1]) this.data[key1] = {};
        if(!this.data[key1][key2]) this.data[key1][key2] = [];
        this.data[key1][key2].push(value);
        this.generate(key1)
    },
    generate(key){
        for(let k in this.data[key]){
            if(!this.computed[key]) this.computed[key] = {};
            let sum = this.data[key][k].reduce((acc, val) => acc + val, 0);
            let count = this.data[key][k].length;
            var avg = sum/count;
            let stddev = Math.sqrt(this.data[key][k].reduce((acc, val) => acc + Math.pow(val - avg,2), 0)/count);
            let min = this.data[key][k].reduce((acc, val) => val < acc ? val : acc , 9999);
            let max = this.data[key][k].reduce((acc, val) => val > acc ? val : acc , 0);
            this.computed[key][k] = {
                sum: sum,
                count: count,
                avg: avg,
                stddev: stddev,
                max: max,
                min: min
            }
        }
    }
};