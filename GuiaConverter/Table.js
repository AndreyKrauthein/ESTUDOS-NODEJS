class Table{

    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }

    get RowCount(){ //campo Virtual
        return this.rows.length
    }

    get ColumnsCount(){ //campo Virtual
        return this.header.length
    }

}

module.exports = Table