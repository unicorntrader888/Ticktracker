function addHabit() {
  const input = document.getElementById("habitInput");
  const habit = input.value.trim();

  if (habit !== "") {
    const li = document.createElement("li");
    li.textContent = habit;

    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    document.getElementById("habitList").appendChild(li);
    input.value = "";
  }
}
