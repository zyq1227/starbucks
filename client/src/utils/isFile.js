class Isfile {
    constructor(file, option) {
        this.type = file.type;
        this.size = file.size;
        this.option = option
    }
    isFile() {
        let { type } = this.option
        let types = this.type.match(/\/(\w+)$/);
        if(types){
            return type.includes(types[1]);
        }
    }
    isSize() {
        let { size } = this.option;
        return (size * 1024 * 1024) > this.size
    }
}
export default Isfile