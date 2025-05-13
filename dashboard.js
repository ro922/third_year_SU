function updateCounts() {
  const checkboxes = document.querySelectorAll("#subjectList input[type='checkbox']");
  const registered = Array.from(checkboxes).filter(cb => cb.checked).length;
  const total = checkboxes.length;
  const remaining = total - registered;

  document.getElementById("registeredCount").textContent = registered;
  document.getElementById("remainingCount").textContent = remaining;
}


updateCounts();

document.querySelectorAll("#subjectList input[type='checkbox']").forEach(cb => {
  cb.addEventListener('change', updateCounts);
});
