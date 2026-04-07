const input = document.querySelector("[data-recipe-search]");
const cards = Array.from(document.querySelectorAll("[data-recipe-card]"));

if (input && cards.length) {
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    for (const card of cards) {
      const haystack = (card.dataset.search || "").toLowerCase();
      const match = !query || haystack.includes(query);
      card.style.display = match ? "" : "none";
    }
  });
}
