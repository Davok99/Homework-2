
const stars = function(a) {
  if(a<2)
  return "*";
    return "*" + (stars(a-1));
};
 const space = function(b) {
	if(b<0)
	return "";
	return " " + (space(b-1));
 };
 const triangle = function(n, m=1){	
if(n<=0)
	return "";
return space(n) + stars(m)+ "\n" + triangle(n-1, m+2);
 };
 console.log(triangle(18));