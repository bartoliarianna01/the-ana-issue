// THE ANA ISSUE — EDIT HERE ♡
// Change ONLY the words inside quotation marks. Keep the commas and punctuation outside them.
// Save with Ctrl+S, then refresh index.html in Chrome.
// You can also replace image files in this folder with new JPGs using the SAME filename.

const ANA_EDITS = {
  coverSubtitle: "Too iconic to fit in one lifetime ♡",
  openButton: "OPEN YOUR ISSUE ♡ ↗",
  pageTitles: [
    "Dear birthday girl,",       // Page 2: Editor's letter
    "The Ana Archives.",         // Page 3: Exhibits
    "Chaotic us.",               // Page 4: Memory photos
    "Unhinged us.",              // Page 5
    "Ridiculous us.",            // Page 6
    "Unstoppable us.",           // Page 7
    "Annual performance review.", // Page 8
    "Open when...",              // Page 9
    "Previously, on us...",     // Page 10
    "Different fonts. Same soul." // Final page
  ],
  birthdayButton: "HAPPY BIRTHDAY DONNA ♡",
  memoryPageDescriptions: [
    "Real friendship. Real memories. Absolutely no editorial supervision.",
    "Real friendship. Real memories. Absolutely no editorial supervision.",
    "Real friendship. Real memories. Absolutely no editorial supervision.",
    "Real friendship. Real memories. Absolutely no editorial supervision."
  ],
  // The following images can be swapped by replacing the matching files in this folder.
  // Changing the filenames below is optional; the pictures currently appear inside the HTML.
  // To use your own filename, set the corresponding image override to e.g. "my-photo.jpg".
  imageOverrides: {
    cover: "",        // e.g. "new-cover.jpg"
    grandma: "",       // e.g. "grandma-new.jpg"
    tattoo: ""         // e.g. "uguali-new.jpg"
  }
};

// Do not edit below this line: applies your changes to the existing magazine.
(function () {
  const edit = ANA_EDITS;
  const text = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && typeof value === "string") el.textContent = value;
  };
  text(".subtitle", edit.coverSubtitle);
  text("#openIssue", edit.openButton);
  const pages = [...document.querySelectorAll("#magazine > section")];
  pages.forEach((page, i) => {
    const heading = page.querySelector("h2");
    if (heading && edit.pageTitles[i] !== undefined) heading.textContent = edit.pageTitles[i];
  });
  document.querySelectorAll("#magazine > section.memory-page").forEach((page, i) => {
    const description = page.querySelector("h2 + p");
    if (description && edit.memoryPageDescriptions[i] !== undefined) description.textContent = edit.memoryPageDescriptions[i];
  });
  const birthday = [...document.querySelectorAll("#magazine button")].find(b => b.textContent.includes("HAPPY BIRTHDAY DONNA"));
  if (birthday) birthday.textContent = edit.birthdayButton;
  const override = (selector, name) => {
    const img = document.querySelector(selector);
    if (img && name) img.src = name;
  };
  override(".cover-image img", edit.imageOverrides.cover);
  // Exhibit B is the second exhibit photo in the Archives section.
  const exhibits = document.querySelectorAll("#archives .cards img");
  if (exhibits[1] && edit.imageOverrides.grandma) exhibits[1].src = edit.imageOverrides.grandma;
  override("#finale .finale-photo img", edit.imageOverrides.tattoo);
})();
