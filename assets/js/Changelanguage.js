
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: "en",
    includedLanguages: "en,de",
    autoDisplay: false
  }, "google_translate_element");

  setTimeout(() => {
    let frame = document.querySelector("iframe.goog-te-banner-frame");
    if (frame) frame.style.display = "none";

    if (document.body.style.top === "40px") {
      document.body.style.top = "unset";
    }
  }, 2000);
}

function translatePage() {
  var selectedLang = document.getElementById("language").value;
  if (!selectedLang) return;

  var select = document.querySelector("#google_translate_element select");
  if (select) {
    select.value = selectedLang;

    select.dispatchEvent(new Event("change"));
    setTimeout(() => {
      select.dispatchEvent(new Event("change"));
    }, 500);
  }
}
