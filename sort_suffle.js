function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // loop until there is elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArray = arr;
function numberSuffleHandler(){
    newArray = shuffle(arr);
    reRenderNumberTable();
    console.log('Suffled Array-' + newArray);
}

function numberSortHandler(){ 
    newArray = arr.sort();
    reRenderNumberTable();
    console.log('Soted Array-' + newArray);
}

function reRenderNumberTable() {
    document.getElementById('numberContainer').innerHTML = '';
    newArray.forEach((v, i) => {
        var ele = document.createElement('div');
        var ele1 = document.createElement('span');
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var isScreenDesktop = width > 375;
        if(i == 0 || i == 7) {
			ele.style.backgroundColor = isScreenDesktop ? '#6F98A8' : '#EFEFEF';
			ele1.style.backgroundColor = '#6F98A8';
		} else if (i == 1 || i == 3) {
			ele.style.backgroundColor = isScreenDesktop ? '#2B8EAD' : '#EFEFEF';
			ele1.style.backgroundColor = '#2B8EAD';
		} else if (i == 2 || i == 4 || i == 8) {
			ele.style.backgroundColor = isScreenDesktop ? '#2F454E' : '#EFEFEF';
			ele1.style.backgroundColor = '#2F454E';
		} else {
            ele.style.backgroundColor = isScreenDesktop ? '#BFBFBF' : '#EFEFEF';
			ele1.style.backgroundColor = '#BFBFBF';
		}  
		if(!isScreenDesktop){
			ele.appendChild(ele1);
		}
        ele.appendChild(document.createTextNode(v));
        document.getElementById('numberContainer').appendChild(ele);
    });

}
