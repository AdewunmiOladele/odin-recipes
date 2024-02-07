var currentYear = new Date().getFullYear();
        document.getElementById("current-year").innerText = currentYear;

// Define an array of recipe filenames in your directory
var recipes = [
  "chicken-peanut.html",
  "banana-bread.html",
  "jollof-rice.html",
  "egusi-soup.html",
  "moi-moi.html",
  "pounded-yam.html",
];

// Get the current filename
var currentFilename = window.location.pathname.split("/").pop();

// Find the index of the current recipe in the array
var currentIndex = recipes.indexOf(currentFilename);

// Set the href for the previous recipe link
var previousRecipeLink = document.getElementById("previousRecipe");
if (currentIndex > 0) {
  previousRecipeLink.href = recipes[currentIndex - 1];
} else {
  // If at the beginning, disable or hide the link
  previousRecipeLink.style.pointerEvents = "none";
  previousRecipeLink.style.color = "#999";
}

// Set the href for the next recipe link
var nextRecipeLink = document.getElementById("nextRecipe");
if (currentIndex < recipes.length - 1) {
  nextRecipeLink.href = recipes[currentIndex + 1];
} else {
  // If at the end, disable or hide the link
  nextRecipeLink.style.pointerEvents = "none";
  nextRecipeLink.style.color = "#999";
}
