let habitList = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habitList));
}

function renderHabits() {
  const ul = document.getElementById("habitList");
  ul.innerHTML = "";
  habitList.forEach((habit, index) => {
    const li = document.createElement("li");
    li.className = habit.completed ? "completed" : "";

    const text = document.createElement("span");
    text.textContent = habit.text;
    text.onclick = () => toggleHabit(index);

    const del = document.createElement("button");
    del.innerHTML = "❌";
    del.onclick = () => deleteHabit(index);

    li.appendChild(text);
    li.appendChild(del);
    ul.appendChild(li);
  });
}

function addHabit() {
  const input = document.getElementById("habitInput");
  const text = input.value.trim();
  if (text !== "") {
    habitList.push({ text, completed: false });
    input.value = "";
    saveHabits();
    renderHabits();
  }
}

function toggleHabit(index) {
  habitList[index].completed = !habitList[index].completed;
  saveHabits();
  renderHabits();
}

function deleteHabit(index) {
  habitList.splice(index, 1);
  saveHabits();
  renderHabits();
}

window.onload = renderHabits;
