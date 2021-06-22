class Paper{
    constructor(x, y, width, height){

      

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }
        this.image = loadImage("paper.png");

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        

        World.add(world, this.body);
    }
    display(){
        var groundPos=this.body.position;		
        var angle = this.body.angle;
			push()
			translate(groundPos.x, groundPos.y);
            
			rectMode(CENTER)
			fill(128,128,128)
			image(this.image,0,0,this.width,this.height);
			pop()
    }
}