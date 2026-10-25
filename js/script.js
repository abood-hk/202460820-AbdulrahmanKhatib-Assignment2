const themeToggle = document.getElementById("theme-toggle");
const themeStatus = document.getElementById("theme-status");
const body = document.body;
const greeting = document.getElementById("greeting");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const currentYear = document.getElementById("current-year");
const search = document.getElementById("search");
const projectsContainer = document.querySelector(".project-grid");
const headings = projectsContainer.querySelectorAll("h3");
const noResults = document.getElementById("no-results");

// Display a greeting based on the current time.
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning. Welcome to my portfolio.";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon. Welcome to my portfolio.";
} else {
  greeting.textContent = "Good evening. Welcome to my portfolio.";
}

// Load the user's saved theme preference.
try {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "Light mode";
    themeToggle.setAttribute("aria-pressed", "true");
  }
} catch {
  themeStatus.textContent =
    "Your saved theme could not be loaded. You can still switch themes; allow site storage to remember your choice.";
  themeStatus.hidden = false;
}

// Toggle between light mode and dark mode.
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  themeToggle.textContent = isDarkMode ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", String(isDarkMode));

  try {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    themeStatus.textContent = "";
    themeStatus.hidden = true;
  } catch {
    themeStatus.textContent =
      "Theme changed for this visit. Allow site storage to save your choice for next time.";
    themeStatus.hidden = false;
  }
});

// Show a confirmation message when the form is submitted.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.textContent =
    "Your input is valid. This is a demo form; no message was sent.";

  contactForm.reset();
});

// Display the current year in the footer.
currentYear.textContent = new Date().getFullYear();

// Filter project titles and show feedback when every card is hidden.
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let hiddenProjects = 0;

  headings.forEach((head) => {
    const card = head.closest(".project-card");

    if (!head.textContent.toLowerCase().includes(query)) {
      card.hidden = true;
      hiddenProjects++;
    } else {
      card.hidden = false;
    }
  });

  noResults.hidden = hiddenProjects !== headings.length;
});
