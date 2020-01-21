// Code your solutions in this file

function writeCards(recipients, occasion){
  const messages = [];
  
  for(let i = 0; i < recipients.length; i++){
    messages.push(`Thank you, ${recipient}, for the wonderful ${occasion} card!`);
  }
  
  return messages;
}