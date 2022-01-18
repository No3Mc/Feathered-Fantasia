//create the constructor for the class flap
function flap() {

    //initialisation code will go here
    //create private variables for the x and y coordinates
    var x = 0,
        y = 0


    
    ////sprite movement class
    ////create the public move method by adding it to the classes prototype
    flap.prototype.move = function () {
        //change the value of the x axis for the shape
        y++;
    
    }
    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    flap.prototype.draw = function (context) {

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
        //7
        context.lineTo(x + 195, y + 156);
        //8
        context.lineTo(x + 193, y + 167);
        //9
        context.lineTo(x + 196, y + 179);
        //10
        context.lineTo(x + 194, y + 191);
        //11
        context.lineTo(x + 189, y + 202);
        //12
        context.lineTo(x + 178, y + 210);
        //13
        context.lineTo(x + 166, y + 219);
        //14
        context.lineTo(x + 148, y + 226);
        //15
        context.lineTo(x + 131, y + 227);
        //16
        context.lineTo(x + 104, y + 220);
        //17
        context.lineTo(x + 84, y + 232);
        //18
        context.lineTo(x + 35, y + 261);
        //19
        context.lineTo(x + 60, y + 224);
        //20
        context.lineTo(x + 73, y + 212);
        //21
        context.lineTo(x + 58, y + 209);
        //22
        context.lineTo(x + 123, y + 156);
        //23
        context.lineTo(x + 139, y + 156);
        //24
        context.lineTo(x + 143, y + 146);
        //25
        context.lineTo(x + 138, y + 137);
        //26
        context.lineTo(x + 137, y + 122);
        //27
        context.lineTo(x + 152, y + 102);
        //28
        context.lineTo(x + 162, y + 102);
     
        //close the path
        context.closePath();
        //fill the shape
        context.fill();
        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing
        context.restore();


    }

    flap.prototype.move = function () {
        x++
    }
    //public method to set the vector of the Mainspr
    flap.prototype.accelerate = function (Acceleration) {
        //set vx
    }

 
    
    


    //create a public property called Top
    Object.defineProperty(this, 'Top',
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
