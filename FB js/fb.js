var databse= [
   {
	  username="Janhavi"
	  password="secret"
   }
   {
	  username="Rasha"
	  password="123"
   }	
   {
	  username="Eeshita"
	  password="1009"
   }		
];

var newsfeed=[
{
	usernma="Devanshi"
	timeline="I am mad"
},
{
	username="Rasha"
	timeline="Janhavi is the best"
},
{
	username="Eeshita"
	timeline="Janhavi is love "
}
];
function signIn(username, password) {
	for (var i=0; i<database.length; i++){
		if(database[i].username===username &&
		 database[i].password===password)
			console.log(newsfeed);
	}else{
		alert("sorry! wrong username and password") 
	}
}
var username= prompt("what's your username?");
var password= prompt("what's your password?");

signIn(usernamePrompt,passwordPrompt)
