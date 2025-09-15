async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();
    displayJoke(data);
  } catch (error) {
    document.getElementById("joke-container").innerHTML =
      `<p class="error"> Couldn’t fetch a joke, try again!</p>`;
  }
}

function displayJoke(joke) {
  document.getElementById("joke-container").innerHTML = `
    <p class="setup">${joke.setup}</p>
    <p class="punchline">${joke.punchline}</p>
  `;
}

// Attach events to buttons
document.getElementById("getJokeBtn").addEventListener("click", getJoke);
document.getElementById("nextJokeBtn").addEventListener("click", getJoke);
