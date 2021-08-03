class Processor{
    static Process(data){
        var element = data.split("\r\n")
        var rows = []

        element.forEach(row => {
            var arr = row.split(",")
            rows.push(arr)
        })

        return rows

    }
}

module.exports = Processor