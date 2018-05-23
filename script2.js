
let quotes =[
    ["Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying. If you love life, don’t waste time, for time is what life is made up of.", "Bruce Lee"],
    ["Life is what happens when you’re busy making other plans.", "John Lennon"],
    ["It is better to be hated for what you are than to be loved for what you are not. ", "Andre Gide"],
    ["Dost thou love life? Then do not squander time, for that is the stuff life is made of.", "Benjamin Franklin"],
    ["Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", "Marcus Aurelius"],
    ["Life is like playing a violin in public and learning the instrument as one goes on.", "Samuel Butler"],
    ["In the end, it’s not the years in your life that count. It’s the life in your years.", "Abraham Lincoln"],
    ["You’ve gotta dance like there’s nobody watching.", "William W. Purkey"],
    ["Believe that life is worth living and your belief will help create the fact.", "William James"],
    ["Do not take life too seriously. You will never get out of it alive.", "Elbert Hubbard"],
    ["I suck.", "Chantal Theriault"],
    ["Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager.", "Susan Sontag"],

];
let quoteCounter = 0;
let quoteTracker =[];
let outputQuote = document.getElementById("quote");
let outputAuthor = document.getElementById("author");



function randomQuote(){
  let random = quotes[Math.floor((Math.random() * quotes.length + 1))-1];
  if (quoteCounter === 0 || random != quoteTracker[quoteTracker.length-1]) {
      quoteCounter++;
      quoteTracker.push(random);
      outputQuote.innerHTML = random[0];
      outputAuthor.innerHTML = random[1];
  } else {
    randomQuote();
  };
};
document.getElementById("newQuote").addEventListener("click", randomQuote)
