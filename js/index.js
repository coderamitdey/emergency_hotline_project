// heartcount functionality
const heartCount = document.getElementById("heart-count");

const heartButtons = [
  "heart-emergency",
  "heart-police",
  "heart-fire",
  "heart-ambulance",
  "heart-women",
  "heart-corruption",
  "heart-electricity",
  "heart-brac",
  "heart-railway"
];

for (const id of heartButtons) {
  const button = document.getElementById(id);

  button.addEventListener("click", function(){
    const icon = button.querySelector("i");
    const isActive = icon.classList.toggle("text-red-500"); 

    let count = parseInt(heartCount.textContent);
    heartCount.textContent = isActive ? count + 1 : count - 1;
  });
}


// CALL BUTTON FUNCTIONALITY
const coinCount = document.getElementById("coin-count");
const historyContainer = document.getElementById("history-container");

const callButtons = [
  {id: "call-emergency", name: "National Emergency Number", number: "999"},
  {id: "call-police", name: "Police Helpline Number", number: "999"},
  {id: "call-fire", name: "Fire Service Number", number: "999"},
  {id: "call-ambulance", name: "Ambulance Service", number: "1994-999999"},
  {id: "call-women", name: "Women & Child Helpline", number: "109"},
  {id: "call-corruption", name: "Anti-Corruption Helpline", number: "106"},
  {id: "call-electricity", name: "Electricity Helpline", number: "16216"},
  {id: "call-brac", name: "Brac Helpline", number: "16445"},
  {id: "call-railway", name: "Bangladesh Railway Helpline", number: "163"}
];

for (const service of callButtons) {
  const button = document.getElementById(service.id);
  button.addEventListener("click", function() {
    let coins = parseInt(coinCount.textContent.trim());
    if (coins < 20) {
      alert("Sorry:) You do not have enough coins!");
      return;
    }
    alert(`Calling ${service.name} at ${service.number}...`);
    coinCount.textContent = coins - 20;

    const time = new Date().toLocaleTimeString();
    const entry = document.createElement("div");
    entry.classList.add(
      "bg-gray-50", "shadow", "rounded-lg", "p-3", "flex", "justify-between", "items-center"
    );
    entry.innerHTML = `
      <div>
        <p class="font-bold">${service.name}</p>
        <p class="text-gray-600">${service.number}</p>
      </div>
      <span class="text-gray-500 ml-4">${time}</span>
    `;
    historyContainer.appendChild(entry);
  });
}

// CLEAR CALL HISTORY
document.getElementById("clear-history").addEventListener("click", function() {
  historyContainer.innerHTML = "";
});

// COPY BUTTON FUNCTIONALITY
const copyCount = document.getElementById("copy-count");

const copyButtons = [
  {id: "copy-emergency", number: "999"},
  {id: "copy-police", number: "999"},
  {id: "copy-fire", number: "999"},
  {id: "copy-ambulance", number: "1994-999999"},
  {id: "copy-women", number: "109"},
  {id: "copy-corruption", number: "106"},
  {id: "copy-electricity", number: "16216"},
  {id: "copy-brac", number: "16445"},
  {id: "copy-railway", number: "163"}
];

for (const item of copyButtons) {
  const button = document.getElementById(item.id);
  button.addEventListener("click", function() {
    navigator.clipboard.writeText(item.number);
    alert(`${item.number} copied to clipboard!`);
    let currentCopy = parseInt(copyCount.textContent.trim());
    copyCount.textContent = currentCopy + 1;
  });
}
