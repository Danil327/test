// 1
function count() {
	let num = 0;
	
	return function() {
		console.log(num++);
	}
}

let foo = count();

foo(); 
foo(); 
foo(); 



//2
function replace(n) {
    if (n === 1){
      return 0;
    } 
    if (n === 0){
      return 1;
    } 
  }
  
  function obFoo(d) {
    if (typeof d.left === 'number'){
      d.left = replace(d.left);
    } 
    if (typeof d.right === 'number'){
      d.right = replace(d.right);
    } 
    if (typeof d.left === 'object'){
      obFoo(d.left);
    } 
    if (typeof d.right === 'object'){
      obFoo(d.right);
    } 
  }
  
  const d = {
    left: {
      left: {
        left: 1,
        right: {
          left: 0,
          right: 1,
        },
      },
      right: {
        left: 0,
        right: 1,
      },
    },
    right: 1,
  };
  
  obFoo(d);
  console.log(d);


//3
function bar(n) {
    const array = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (y == x || y == n - x - 1){
            array[y][x] = 2;
        } 
        else if ((y < x && x < n - y - 1) || (y > n / 2 && x < y && x > n - y - 1)){
            array[y][x] = 1;
        } 
      }
    }
  
    return array;
  }
  
  
  console.log(bar(20));


//4
function random() {
	return Math.floor(Math.random() * 256);
}

const wrap = document.getElementById('wrapper');
wrap.addEventListener("click", (event) => {
	let target = event.target;
	if (target.tagName != 'DIV') return;

	event.target.style.background = 'rgb(' + random() + ',' + random() + ',' + random() + ')';
});
