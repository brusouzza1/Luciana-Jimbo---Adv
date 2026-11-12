// Menu por âncoras e perguntas frequentes funcionam pelo próprio HTML.
// Fecha as outras respostas quando uma nova pergunta é aberta.
const perguntas = document.querySelectorAll(".faq details");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("toggle", () => {
    if (!pergunta.open) return;

    perguntas.forEach((outra) => {
      if (outra !== pergunta) outra.open = false;
    });
  });
});
