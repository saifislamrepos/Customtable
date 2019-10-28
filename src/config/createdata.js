function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
} 
var a= [];

for(var i=0 ; i<200;i++){
	var b = {}
	b.name = makeid(5);
	b.price = randomNumber(2000,8000)
    b.discount = randomNumber(200,500)
    b.rating = randomNumber(1,5)
	a.push(b)
}