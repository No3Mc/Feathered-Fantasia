//create the constructor for the class bars
function bars() {

    //initialisation code will go here
    //create private variables for the x and y coordinates
    var x = 0,
        y = 0,
        vy = 0;

    
    ////sprite movement class
    ////create the public move method by adding it to the classes prototype
    bars.prototype.move = function () {
        //change the value of the x axis for the shape
        y++;
    
    }
    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    bars.prototype.draw = function (context) {

        //save the state of the drawing context before we change it
        context.save();
        //start the line (path)
        context.beginPath();
        context.fillStyle = "red";
        ////set the start coordinates






        //context.moveTo(x, y);
        //1 coord
        context.lineTo(x + 152, y + 70);
        //2
        context.lineTo(x + 182, y + 102);
        //3
        context.lineTo(x + 191, y + 102);
        //4
        context.lineTo(x + 202, y + 123);
        //5
        context.lineTo(x + 249, y + 134);
        //6
        context.lineTo(x + 203, y + 143);

     
        //close the path
        context.closePath();
        //fill the shape
        context.fill();
        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing
        context.restore();


    }

    bars.prototype.move = function () {
        y =- vy;
        
    }
    //public method to set the vector of the Mainspr
    bars.prototype.accelerate = function (Acceleration) {
        //set vx
        vy += Acceleration.AY;
    }

 

    


    //create a public property called Top
    Object.defineProperty(this, 'Space',
        {
            //getter
            get: function () {
                //return the value of y less height
                return y - 20;
            }
        }
    )

    //public property for X
    Object.defineProperty(this, 'X',
    {
    get: function () {
        return x;
    },
    set: function (value) {
        x = value;
    }
    }
    )

    //public property for Y
    Object.defineProperty(this, 'Y',
    {
        get: function () {
            return y;
        },
        set: function (value) {
            y = value;
        }
    }
    )




















}
