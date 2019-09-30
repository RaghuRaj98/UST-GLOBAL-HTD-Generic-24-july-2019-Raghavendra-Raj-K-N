function cir(r) {
        console.log(2*3.14*r)
}
cir(4)

var cir2=function(r) {
    console.log(2*3.14*r)
}
cir2(4);

(function(r) {
    console.log(2*3.14*r)
}(4))

var cir4=(r)=> {
    console.log(2*3.14*r)
}
cir4(4);