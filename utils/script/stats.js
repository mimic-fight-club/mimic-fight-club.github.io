export const stats = {
    data: {},
    log(key, value){
        if(!this.data[key]) this.data[key] = {};
        this.data[key][value] = (this.data[key][value])
            ? this.data[key][value] + 1
            : 1;
    }
};