function DigPow(n, k) {
	let arr = []
    let counter = 0
    arr.push(n)
    
	arr = arr.join('').split('') 
    arr.forEach((el,i) => counter += Math.pow(el, k+i))
    if (counter % n == 0) return counter / n
    else return -1 

}
console.log(DigPow(89,1))
console.log(DigPow(695,2))
console.log(DigPow(92,1))
console.log(DigPow(46288,3))
