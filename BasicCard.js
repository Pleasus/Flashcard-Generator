// allow constructor info to be exported for use elsewhere
module.exports = BasicCard;

// BasicCard constructor
function BasicCard(front, back){

	// if/else checking to see if BasicCard belongs to a certain class
   if(this instanceof BasicCard) {
	  this.front = front;
	  this.back = back;
	  this.printInfo = function(){
	    console.log(this.front);
	    console.log(this.back);
	  }
    }

    // if it doesn't, return a new instance of the BasicCard with Front and back arguments
    else {
      return new BasicCard(front, back);
    }
}