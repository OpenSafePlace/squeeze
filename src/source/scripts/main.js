document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    let
      lang = document.getElementById("lang"),
      langTextInput = document.getElementById("lang-text-input"),
      langTextResult = document.getElementById("lang-text-result"),
      langSqueezeBtn = document.getElementById("lang-squeeze-btn"),
      stageStart = document.getElementById("stage-start"),
      stageMenu = document.getElementById("stage-menu");

    stageStart.style.display = "none";
    stageMenu.style.display = "block";

    langSqueezeBtn.addEventListener("click", () => {
      if (langTextInput.value != "") {
        langTextResult.value = "Подождите...";

        window.api.invoke('text-squeeze', { lang: lang.value, text: langTextInput.value}).then((result) => langTextResult.value = result);
      }
    });
  }, 1500);
});
