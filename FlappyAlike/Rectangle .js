function boundz() {

    Mainspr.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)

        context.beginPath();

        context.fillStyle = "red";
        ////set the start coordinates

        //Starting point
        
        context.lineTo(5, 20);
        context.moveTo(10, 20);
        context.lineTo(11, 19)
        context.lineTo(11, 5);
        context.lineTo(10, 4)
        context.lineTo(5, 4);
        context.lineTo(4, 5)
        context.lineTo(4, 19);


        context.closePath();

        context.fill();
        ////go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing
        context.restore();




    }