function loadHabits() {
  const savedList = JSON.parse(localStorage.getItem("habits")) || [];
  renderHabits(savedList);

  window.habitList = savedList;
}

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(window.habitList));
}

function renderHabits(list) {
  const ul = document.getElementById("habitList");
  ul.innerHTML = "";
  list.forEach((h, idx) => {
    const li = document.createElement("li");
    li.textContent = h.text;
    if (h.done) li.classList.add("done");
    li.addEventListener("click", () => toggleHabit(idx));
    ul.appendChild(li);
  });
}

function addHabit() {
  const input = document.getElementById("habitInput");
  const val = input.value.trim();
  if (!val) return;
  window.habitList.push({ text: val, done: false });
  input.value = "";
  saveHabits();
  renderHabits(window.habitList);
}

function toggleHabit(idx) {
  window.habitList[idx].done = !window.habitList[idx].done;
  saveHabits();
  renderHabits(window.habitList);
}

window.onload = loadHabits;
