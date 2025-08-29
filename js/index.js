// HEART ICON FUNCTIONALITY

const heartCount = document.getElementById("heart-count");

const heartButtons = {
  "heart-emergency": 0,
  "heart-police": 0,
  "heart-fire": 0,
  "heart-ambulance": 0,
  "heart-women": 0,
  "heart-corruption": 0,
  "heart-electricity": 0,
  "heart-brac": 0,
  "heart-railway": 0
};

for (let id in heartButtons) {
  const button = document.getElementById(id);
  button.addEventListener("click", () => {
    // increase heart count
    heartCount.textContent = parseInt(heartCount.textContent) + 1;

    // toggle heart icon
    button.querySelector("i").classList.toggle("fa-solid");
  });
}



// CALL BUTTON FUNCTIONALITY
const coinCount = document.getElementById("coin-count");
const historyContainer = document.getElementById("history-container");

const callButtons = {
  "call-emergency": { name: "National Emergency Number", number: "999" },
  "call-police": { name: "Police Helpline Number", number: "999" },
  "call-fire": { name: "Fire Service Number", number: "999" },
  "call-ambulance": { name: "Ambulance Service", number: "1994-999999" },
  "call-women": { name: "Women & Child Helpline", number: "109" },
  "call-corruption": { name: "Anti-Corruption Helpline", number: "106" },
  "call-electricity": { name: "Electricity Helpline", number: "16216" },
  "call-brac": { name: "Brac Helpline", number: "16445" },
  "call-railway": { name: "Bangladesh Railway Helpline", number: "163" }
};

for (let id in callButtons) {
  const button = document.getElementById(id);
  const service = callButtons[id];

  button.addEventListener("click", () => {
    let coins = parseInt(coinCount.textContent.trim());

    if (coins < 20) {
      alert("Sorry:) You do not have enough coins!");
      return;
    }

    alert(`Calling ${service.name} at ${service.number}...`);
    coinCount.textContent = coins - 20;

    const time = new Date().toLocaleTimeString();
    const entry = document.createElement("p");
    entry.textContent = `${service.name} - ${service.number} (${time})`;
    historyContainer.appendChild(entry);
  });
}

// CLEAR CALL HISTORY

document.getElementById("clear-history").addEventListener("click", () => {
  historyContainer.innerHTML = "";
});


// COPY BUTTON FUNCTIONALITY

const copyCount = document.getElementById("copy-count");

const copyButtons = {
  "copy-emergency": "999",
  "copy-police": "999",
  "copy-fire": "999",
  "copy-ambulance": "1994-999999",
  "copy-women": "109",
  "copy-corruption": "106",
  "copy-electricity": "16216",
  "copy-brac": "16445",
  "copy-railway": "163"
};

for (let id in copyButtons) {
  const button = document.getElementById(id);
  const number = copyButtons[id];

  button.addEventListener("click", () => {
    navigator.clipboard.writeText(number);
    alert(`${number} copied to clipboard!`);

    let currentCopy = parseInt(copyCount.textContent.trim());
    copyCount.textContent = currentCopy + 1;
  });
}
