
	const fact = function(a){
	if(a<=0)
	return 1;
	return  a * fact(a-1);
	};
console.log(fact(9));