var Reader = require("./Reader")
var Writer = require ("./Writer")
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var PDFWriter = require("./PDFWriter")

var leitor = new Reader();
var escritor = new Writer();



async function main(){
    var dados = await leitor.read("./users.csv")
    var dadosProcessados = await Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)
    var linhasDaTabela = await usuarios.RowCount
    var colunasDaTabela = await usuarios.ColumnsCount

    var html = await HtmlParser.Parse(usuarios)
    
    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html)
}
main()