// allow constructor info to be exported for use elsewhere
module.exports = ClozeCard;

// ClozeCard constructor
function ClozeCard(text, cloze, error){
  
  // checks to see if this constructor belongs to a certain class
  if(this instanceof ClozeCard) {

      // if it does, runs through the text of the cloze card and replaces
      // the cloze part with blank space
      this.text = text;
      this.cloze = cloze;
      this.partial = text.replace(this.cloze, "________");
      this.printInfo = function(){
        console.log(this.text);
        console.log(this.cloze);
        console.log(this.partial);
      }
   }

   // otherwise, it will return a new instance of ClozeCard
   else {
      return new ClozeCard(text, cloze, error);
   }
}