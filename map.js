//Just created the map file
function Tile (type){
    this.type = type;
};

Tile.prototype.isWalkable = function(type){
    if (this.type === 'sand' || this.type === 'grass'){
        return true;
    }
    else{
        return false;
    }
};

//created array in global area

function Map (width, height){
	this.width = width;
	this.height = height;
	this.tile = (function(w, h){
		var array = [];
		for(var i = 0; i < w; i++){
			var arrayTwo = [];
			
			//add in push here? 
			
			for (var j = 0; j < h; j++){
				var typeOfTer;
				var random = Math.floor(Math.random()*4);
				if(random ===1){
					typeOfTer = 'sand';
				}
				else if(random === 2){
					typeOfTer = 'grass';
				}
				else {
					typeOfTer = 'water';
				}				
				arrayTwo.push(new Tile(typeOfTer));  
			}
			array.push(arrayTwo);
		}
		return array;
		
		//------------------------------------------
		
		
	})(this.width, this.height);
}


// Trying to fill first aray, than push it into the first aray, creating the 2d file