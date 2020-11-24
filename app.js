let a=prompt('Введите a')
let b=prompt('Введите b')
let c=prompt('Введите c')
let d=Math.pow(b,2)-4*a*c
let s=4*a*c
let ab=a*2
let ba=Number(-b)+Number(Math.sqrt(d))
let ban=Number(-b)-Number(Math.sqrt(d))
let cor1
let cor2
document.write("<span style='font:20px Tahoma;'>a="+a+" b="+b+" c="+c+"<br \\/></span>")
if(a != 0 && b != 0 && c != 0) {
    if (b >= 0) {
        if (s >= 0) {
            document.write("D=b²-4ac=" + b + "²-4*" + a + "*" + c + "=" + Math.pow(b, 2) + "-" + s + "=" + d + "<br \\/>")
        } else {
            document.write("D=b²-4ac=" + b + "²-4*" + a + "*" + c + "=" + Math.pow(b, 2) + "-(" + s + ")=" + d + "<br \\/>")
        }
    } else {
        if (s >= 0) {
            document.write("D=b²-4ac=(" + b + ")²-4*" + a + "*" + c + "=" + Math.pow(b, 2) + "-" + s + "=" + d + "<br \\/>")
        } else {
            document.write("D=b²-4ac=(" + b + ")²-4*" + a + "*" + c + "=" + Math.pow(b, 2) + "-(" + s + ")=" + d + "<br \\/>")
        }
    }
    if (d > 0) {
        cor1 = ba / ab
        cor2 = ban / ab
        document.write("D>0-->2 корня" + "<br \\/>")
        document.write("x=-b±√D/2a" + "<br \\/>")
        document.write("x1=" + -b + "+√" + d + "/2*" + a + "=" + -b + "+" + Math.sqrt(d) + "/" + ab + "=" + ba + "/" + ab + "=" + cor1 + "<br \\/>")
        document.write("x2=" + -b + "-√" + d + "/2*" + a + "=" + -b + "-" + Math.sqrt(d) + "/" + ab + "=" + ban + "/" + ab + "=" + cor2 + "<br \\/>")
        document.write("x1=" + cor1 + "<br \\/>")
        document.write("x2=" + cor2 + "<br \\/>")
    } else if (d == 0) {
        cor1 = Number(-b) / ab
        cor2 = 'НЕТ'
        document.write("D=0-->1 корень" + "<br \\/>")
        document.write("x=-b/2a" + "<br \\/>")
        document.write("x1=" + -b + "/2*" + a + "=" + -b + "/" + ab + "=" + cor1 + "<br \\/>")
        document.write("x1=" + cor1 + "<br \\/>" + 'x2=' + cor2)
    } else if (d < 0) {
        document.write("D<0-->корня нет" + "<br \\/>")
    }
}
if (a != 0 && b != 0 && c == 0){
    let aabb = -b/a
    let bbaa = Number(a)*Number(aabb)+Number(b)
    if (bbaa!=0){
        cor1=0
    }else {
        cor1=aabb
    }
    if (b>0) {
        document.write(a + 'x²+' + b + 'x=0' + "<br \\/>")
        document.write('x(' + a + 'x+' + b + ')=0' + "<br \\/>")
        document.write('x=0 или ' + a + 'x+' + b +'=0' + "<br \\/>")
        document.write('_______' + a + 'x=' + -b + "<br \\/>")
        document.write('_______' + 'x=' + -b + '/' + a + "<br \\/>")
    }else {
        document.write(a + 'x²' + b + 'x=0' + "<br \\/>")
        document.write('x(' + a + 'x' + b + ')=0' + "<br \\/>")
        document.write('x=0 или ' + a + 'x' + b +'=0' + "<br \\/>")
        document.write('_______' + a + 'x=' + -b + "<br \\/>")
        document.write('_______' + 'x=' + -b + '/' + a + "<br \\/>")
    }
    document.write('_______' + 'x=' + cor1 + "<br \\/>")
}
if (a != 0 && b == 0 && c != 0){
    let xyq = -c/a
    cor1 = Math.sqrt(xyq)
    if (c>0){
        document.write(a + 'x²+' + c + '=0' + "<br \\/>")
        document.write(a + 'x²' + '=' + -c + "<br \\/>")
        document.write('x²=' + -c + '/' + a + "<br \\/>")
        document.write('x=' + '√' + xyq + "<br \\/>")
    }else {
        document.write(a + 'x²' + c + '=0' + "<br \\/>")
        document.write(a + 'x²' + '=' + -c + "<br \\/>")
        document.write('x²=' + -c + '/' + a + "<br \\/>")
        document.write('x=' + '√' + xyq + "<br \\/>")
    }
    document.write('x=' + cor1 + "<br \\/>")
}
if (a == 0 && b != 0 && c != 0){
    cor1 = -c/b
    if (c>0){
        document.write(b + 'x+' + c + '=0' + "<br \\/>")
        document.write(b + 'x=' + -c + "<br \\/>")
        document.write('x=' + -c + '/' + b + "<br \\/>")
    }else {
        document.write(b + 'x' + c + '=0' + "<br \\/>")
        document.write(b + 'x=' + -c + "<br \\/>")
        document.write('x=' + -c + '/' + b + "<br \\/>")
    }
    document.write('x=' + cor1 + "<br \\/>")
}
if(a == 0 && b == 0 && c == 0){
    document.write("<span style='font:20px Tahoma;'>хорошая попытка</span>")
}//100!!!