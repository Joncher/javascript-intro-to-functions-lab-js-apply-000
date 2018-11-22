function shout(String){
  return String.toUpperCase();
}
function whisper(String){
  return String.toLowerCase();
}
function logShout(String){
  console.log(shout(String));
}
function logWhisper(String){
  console.log(whisper(String));
}
function sayHiToGrandma(String){
  if (String === whisper(String))
  {return "I can't hear you!"}

  if (String === shout(String));
 { return "YES INDEED!"}

 if (String === "I love you, Grandma."){
   return "I love you, too."
 }
}