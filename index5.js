var count=0;

function changered(){
    var res=document.getElementById("shape")
    res.style.backgroundColor="red"
}
function changeblue(){
    var res1=document.getElementById("shape")
    res1.style.backgroundColor="blue"
}
function changeStart(){
    var res2=document.getElementById("shape")
    res2.style.backgroundColor="black"
    res2.style.width="500px";
        res2.style.height="100px";
    count==0;
}
function changeCount(){
  
    if(count%2==0){
        var res4=document.getElementById("shape")
        res4.style.width="100px";
        res4.style.height="100px";
    }else{
        var res4=document.getElementById("shape")
        res4.style.width="500px";
        res4.style.height="100px";
    }
    // if(count%5==0){
    //     var res3=document.getElementById("shape")
    //     res3.style.width="50px";
    //     res3.style.height="50px";
    //     res3.style.borderRadius="50%"
        
    // }
    count++
}