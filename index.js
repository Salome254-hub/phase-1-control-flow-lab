function scuberGreetingForFeet(distance){

  if (distance <=400) {

  return 'This one is on me!';
  }

  else if (distance > 2000 && distance <2500) {
  
    return 'I will gladly take your thirty bucks.';

  }
  else (distance > 2500) ;{

    return 'No can do.';
  }
}

function ternaryCheckCity(city){return (city === "NYC") ?  'Ok, sounds good.' : 'No go.';}

function switchOnCharmFromTip(string){
  switch(string){
  case 'generous':
  return'Thank you so much.'
   
   case'not as generous':
   return 'Thank you.'
   
   case'thanks for everything':
   return 'Bye.'}
  }