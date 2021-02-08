class Ground
{
    constructor(x,y,width,height)
    {
       var ground_option = {
           isStatic : true 
       }
        this.body = Bodies.rectangle(x,y,width,height,ground_option);
        this.width = width;
        this.height = height;

        World.add(myWorld,this.body);
    }

    display()
    {
    
        var pos = this.body.position;
        rectMode(CENTER);
    strokeWeight(4);  
    stroke("green");  
    fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}