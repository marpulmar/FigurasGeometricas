function compruebaClases() 
{
    compruebaFiguraGeometrica()
    compruebaPoligonoRegular()
    compruebaTriangulo()
    compruebaCirculo()
    compruebaTrianguloEquilatero()
    compruebaRectangulo()
}

function compruebaFiguraGeometrica()
{
    let fg = new FiguraGeometrica("Figura Geométrica",5)
    document.getElementById("FG01").innerText = "Correcto"
    document.getElementById("FG02").innerText = fg.nombre
    document.getElementById("FG03").innerText = fg.dato1
    document.getElementById("FG04").innerText = fg.toString()
}

function compruebaPoligonoRegular()
{
    let pr = new PoligonoRegular(5,3)
    document.getElementById("PR01").innerText = "Correcto"
    document.getElementById("PR02").innerText = pr.nombre
    pr = new PoligonoRegular(5,4)
    document.getElementById("PR03").innerText = pr.nombre
    pr = new PoligonoRegular(5,5)
    document.getElementById("PR04").innerText = pr.nombre
    pr = new PoligonoRegular(5,6)
    document.getElementById("PR09").innerText = pr.toString()
    document.getElementById("PR05").innerText = pr.nombre
    pr = new PoligonoRegular(5,13)
    document.getElementById("PR06").innerText = pr.nombre
    document.getElementById("PR07").innerText = pr.dato1
    document.getElementById("PR08").innerText = pr.numLados    
    document.getElementById("PR10").innerText = pr.toString()
    document.getElementById("PR11").innerText = pr.calcularPerimetro()
    document.getElementById("PR12").innerText = pr.calcularArea()
    document.getElementById("PR13").innerText = pr.calcularApotema()
}

function compruebaTriangulo()
{
    let tria = new Triangulo(5,4,7)
    document.getElementById("T01").innerText = "Correcto"
    document.getElementById("T02").innerText = tria.nombre
    document.getElementById("T03").innerText = tria.dato1
    document.getElementById("T04").innerText = tria.dato2
    document.getElementById("T05").innerText = tria.dato3
    document.getElementById("T06").innerText = tria.toString()
    document.getElementById("T07").innerText = tria.calcularPerimetro()
    document.getElementById("T08").innerText = tria.calcularArea()
}

function compruebaCirculo()
{
    let cir = new Circulo(7)
    document.getElementById("C01").innerText = "Correcto"
    document.getElementById("C02").innerText = cir.nombre
    document.getElementById("C03").innerText = cir.dato1
    document.getElementById("C04").innerText = cir.toString()
    document.getElementById("C05").innerText = cir.calcularPerimetro()
    document.getElementById("C06").innerText = cir.calcularArea()
}

function compruebaTrianguloEquilatero()
{
    let trEq = new TrianguloEquilatero(6)
    document.getElementById("TE01").innerText = "Correcto"
    document.getElementById("TE02").innerText = trEq.nombre
    document.getElementById("TE03").innerText = trEq.dato1
    document.getElementById("TE04").innerText = trEq.dato2
    document.getElementById("TE05").innerText = trEq.dato3
    document.getElementById("TE06").innerText = trEq.toString()
    document.getElementById("TE07").innerText = trEq.calcularPerimetro()
    document.getElementById("TE08").innerText = trEq.calcularArea()
}

function compruebaRectangulo()
{
    let rect = new Rectangulo(6,8)
    document.getElementById("R01").innerText = "Correcto"
    document.getElementById("R02").innerText = rect.nombre
    document.getElementById("R03").innerText = rect.dato1
    document.getElementById("R04").innerText = rect.dato2
    document.getElementById("R05").innerText = rect.toString()
    document.getElementById("R06").innerText = rect.calcularPerimetro()
    document.getElementById("R07").innerText = rect.calcularArea()
}