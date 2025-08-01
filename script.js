// Poem text
const poem = `Four months ago, our story began,
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

// Typewriter effect function
function typeWriter() {
  if (index < poem.length) {
    document.getElementById("poem").innerHTML += poem.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // typing speed
  }
}

// Trigger typewriter when page loads
window.onload = typeWriter;

// Show popup message when heart is clicked
function showMessage() {
  const popup = document.getElementById("message-popup");
  popup.style.display = "block";
  popup.style.opacity = 1;
  setTimeout(() => {
    popup.style.opacity = 0;
    setTimeout(() => {
      popup.style.display = "none";
    }, 500);
  }, 3000); // show for 3 seconds
}
