function scuberGreetingForFeet(){
  // Write your code here!
  if(scuberGreetingForFeet(199) <= 400){ 
  result='This one is on me!'
  }

  else if (scuberGreetingForFeet(2001) > 2000){
  result='I will gladly take your thirty bucks.'
  }

  else if(scuberGreetingForFeet(2501) > 2500){
  result='No can do'
  }

  return result;
}

function ternaryCheckCity(){
  // Write your code here!
   city = NYC ? "Ok, sounds good" :  "No go";

 
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';

     case 'not as generous':
      return 'Thank you.'

     case  'if anything else':
      return  'Bye'

  }

}