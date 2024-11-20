
var reads =[
   {
        sentence : '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind“ .',
        name : ' Bernard M. Baruch',
        
   },
  {
    sentence : '“Be yourself; everyone else is already taken.”',
    name : ' Oscar Wilde',
  },

  {
    sentence : '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
    name : ' Ralph Waldo Emerson',
  },
  {
    sentence : '“I can be changed by what happens to me. But I refuse to be reduced by it.',
    name : 'Maya Angelou',

  },

  {
    sentence : '“If you tell the truth, you dot have to remember anything',
    name : 'Mark Twain',

  },
]

var cartonaa = ''
for (var i = 0 ; i<reads.length ; i++){
    cartonaa +=
     `
     <h1>
     ${reads[i].name}
    </h1>
   <p>
   ${reads[i].sentence}
   </p>  
      
    `
}
 
function getQuote(){
var arndomIndex=(Math.trunc(Math.random()*reads.length));
console.log(reads[arndomIndex]);
document.getElementById("demo").innerHTML=reads[arndomIndex].name
document.getElementById("quote").innerHTML=reads[arndomIndex].sentence
//demo.innerHTML = reads[arndomIndex].name

}

 




