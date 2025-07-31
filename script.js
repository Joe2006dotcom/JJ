const poemText = `Four months ago, our story began,
Not just by fate, but by a perfect plan.
Through late-night talks and morning smiles,
We’ve built a bond that stretches miles.

Each "good morning" lights my day,
Each "I miss you" comes to stay.
Though distance keeps us far apart,
You live each day inside my heart.

You’re not just mine — you’re my best friend too,
And every little thing feels brand new.
We laugh, we fight, we make it right,
And love grows stronger every night.

So here's to us, and what’s to be,
Four months down, a lifetime to see.
Happy Anniversary, my sweetest Jee,
You’re my now, my always — my destiny. 💫`;

let index = 0;
const speed = 50;
const poemElement = document.getElementById('poem');

function typePoem() {
  if (index < poemText.length) {
    poemElement.innerHTML += poemText.charAt(index);
    index++;
    setTimeout(typePoem, speed);
  }
}

typePoem();

function showMessage() {
  document.getElementById("message-popup").style.display = "block";
}
