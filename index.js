
adjustText(); // for onload 
    

window.addEventListener("resize", adjustText);

function adjustText(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    if(width < height){
        console.log("width < height")
        document.getElementById('name').style.fontSize = "2em"
        document.getElementById('email-text').style.display = "none"
        document.getElementById('git-text').style.display = "none"
    }
    else if(height < width){
        console.log("height < width")
        document.getElementById('name').style.fontSize = "4em"
        document.getElementById('email-text').style.display = "inline"
        document.getElementById('git-text').style.display = "inline"
    } 
}
