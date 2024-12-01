function buttonclick(val)
{
   
    document.getElementById("screen").value+=val//the + is used to keep the previous value so it will not operlap
}
function clearDisplay (){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}