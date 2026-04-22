document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".team-flip-card");

  flipCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      const clickedBackButton = event.target.classList.contains("flip-back-btn");

      if (clickedBackButton) {
        event.stopPropagation();
        card.classList.remove("is-flipped");
        return;
      }

      const clickedLink = event.target.closest("a");
      if (clickedLink) {
        return;
      }

      card.classList.toggle("is-flipped");
    });
  });
});
