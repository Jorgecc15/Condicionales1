let urlcarafeliz = "https://www.google.es/search?q=carita+feliz&tbm=isch&source=iu&ictx=1&fir=wK7ItErFEi1R8M%252CUKkrZJP-y-oi2M%252C_%253BWb1vPr9kjWUFgM%252Cc9bsN3YtbqqGZM%252C_%253B7ww6dohJ-eal1M%252CEiHxW_sY3a_EzM%252C_%253BfUbs6dFAABtB9M%252C_LvwsVk6UBsEKM%252C_%253BT83InPLTkojmCM%252CRlT8EmB8dNyv5M%252C_%253B72KfanvVsRC7zM%252CfAs6_gAtORR-zM%252C_%253BeVxXZZIne5HGjM%252CQNgBkJgnMXvpFM%252C_%253Bdf0_h_sGn5wv4M%252COvIshd9d4XgpUM%252C_%253BGnYgNZ5dd2LSfM%252CSvFtbntnnNPBKM%252C_%253BO1-b3MnxqhPCYM%252CegDNlxDFIteEhM%252C_%253BbVRUW-OqrTN2lM%252CxPTrPWoNiELMhM%252C_%253BRGjr9kh-jetrCM%252CDpiYziEstgYAfM%252C_%253BLNUzBJI4bf7hFM%252CEiHxW_sY3a_EzM%252C_%253BDLoZ4r2phSos2M%252C0bP2p_HhM87kOM%252C_%253BLlK407nNXzNxfM%252CMaHV8Iyp9E2dtM%252C_&vet=1&usg=AI4_-kRfQXwTMOCn2CHy4vXAhciFF_OImw&sa=X&ved=2ahUKEwir2cn366_0AhUStTEKHX2rBJwQ9QF6BAgMEAE&biw=1920&bih=969&dpr=1#imgrc=wK7ItErFEi1R8M"
let urlcaratriste = "https://www.pikpng.com/pngl/m/371-3711139_cara-feliz-y-triste-png-deutsch-biginf-smiley.png"
let imgHtml = document.querySelector("#imagencara")
let nota1 = Number (prompt("Ingrese su primera nota"))
let nota2 = Number (prompt("Ingrese su segunda nota"))
let nota3 = Number (prompt("Ingrese su tercera nota"))
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: "+ p)
if (p>6){
    imgHtml.scr = urlcarafeliz
}
else{
    imgHtml.src = urlcaratriste
}
