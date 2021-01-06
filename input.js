class Inputbox{
    constructor(){
        this.input=createElement("Answer")
         
    }
display(){
    this.input.position(displayWidth/2,displayHeight/2+150);
    var answer1=this.input.value()
    if(answer1==1){
        score++
    }
    if(answer1==2){
        score=score-1
    }
}
}