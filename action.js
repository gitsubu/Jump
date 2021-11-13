


function clockwise(){
    const currentDOMPosition = document.getElementById("smallrect").getBoundingClientRect();
    const parentDOMPosition = document.getElementById("smallrect").parentElement.getBoundingClientRect();
    if(currentDOMPosition.x + 2*(currentDOMPosition.width) > parentDOMPosition.x+parentDOMPosition.width)
    {
        if(currentDOMPosition.y + 2*(currentDOMPosition.height) > parentDOMPosition.y+parentDOMPosition.height)
        {
            document.getElementById("smallrect").style.transform = "translate(0px,"+(1.3*currentDOMPosition.height)+"px)";
        }else{
            document.getElementById("smallrect").style.transform = "translate("+ (1.3*currentDOMPosition.width) +"px,"+(1.3*currentDOMPosition.height)+"px)";
        }
    }else{
        if(currentDOMPosition.y + 2*(currentDOMPosition.height) > parentDOMPosition.y+parentDOMPosition.height)
        {
            document.getElementById("smallrect").style.transform = "translate(0px,0px)";
        }else{
            document.getElementById("smallrect").style.transform = "translate("+(1.3*currentDOMPosition.width)+"px,0%)";
        }
    }
}


function anticlockwise(){
    const currentDOMPosition = document.getElementById("smallrect").getBoundingClientRect();
    const parentDOMPosition = document.getElementById("smallrect").parentElement.getBoundingClientRect();
    if(currentDOMPosition.x - currentDOMPosition.width > 0)
    {
        if(currentDOMPosition.y - currentDOMPosition.height > 0)
        {
            document.getElementById("smallrect").style.transform = "translate("+(1.3*currentDOMPosition.width)+"px,0%)";
        }else{
            document.getElementById("smallrect").style.transform = "translate(0px,0px)";
        }
    }else{
        if(currentDOMPosition.y + 2*(currentDOMPosition.height) > parentDOMPosition.y+parentDOMPosition.height)
        {
            document.getElementById("smallrect").style.transform = "translate("+ (1.3*currentDOMPosition.width) +"px,"+(1.3*currentDOMPosition.height)+"px)";
        }else{
            document.getElementById("smallrect").style.transform = "translate(0px,"+(1.3*currentDOMPosition.height)+"px)";
        }
    }
}