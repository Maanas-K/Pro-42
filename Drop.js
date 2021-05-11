class Rain{
    constructor(x,y){

        var options ={
            friction: 0.1
            
        }

   
            this.rain = Bodies.circle(x,y,5, options);
        

        World.add(world,this.rain)
        
    }
    display(){

        var pos=this.rain.position

        fill ("blue")
        ellipse(pos.x,pos.y,5,7.5)
    }
    update(){

        var pos=this.rain.position

        if(pos.y > 700){

            /*this.rain.position.y = 
            this.rain.position.x = */

            Matter .Body.setPosition(this.rain,{x: random (0,400), y: random(0,400)})
        }
    
    }
}