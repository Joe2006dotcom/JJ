document.addEventListener("DOMContentLoaded", () => {
  const poemText = `Each "good morning" lights my day,
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

  const poemElement = document.getElementById("poem");
  let index = 0;

  function typeWriter() {
    if (index < poemText.length) {
      poemElement.textContent += poemText.charAt(index);
      index++;
      setTimeout(typeWriter, 35);
    }
  }

  typeWriter();
});

function showMessage() {
  const popup = document.getElementById("message-popup");
  popup.style.display = "block";
}
