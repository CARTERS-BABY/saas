//https://teachablemachine.withgoogle.com/models/MfXeXvl_3/




console.log ('versoam5',ml5.version)
Webcam.set({
Width:350,
height: 300 , 
img_format : 'png', 
png_quality: 900
})
var camera = document.getElementById ('camera')
Webcam.attach(camera)
function tirarfoto (){
    Webcam.snap(function(data_uri){
document.getElementById ('resultado').innerHTML = `<img id = 'foto' src = '${data_uri}'/>`
    })
}
var classificaçao = ml5.imageClassifier ('https://teachablemachine.withgoogle.com/models/MfXeXvl_3/model.json', carregarmodelo )
function carregarmodelo (){
console.log ('modelo')


}