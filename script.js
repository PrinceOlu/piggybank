// Initialize Feather icons
feather.replace();

// Roadmap Step 1: Select DOM elements
const goalAmountEl = document.getElementById("goal-amount");
const currentSavingsEl = document.getElementById("current-savings");
const monthlyContributionEl = document.getElementById("monthly-contribution");
const calculateBtn = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");

// Roadmap Step 2: Add event listener for calculate button
calculateBtn.addEventListener("click", () => {
  // Roadmap Step 3: Validate user input
  const goalAmount = parseFloat(goalAmountEl.value);
  const currentSavings = parseFloat(currentSavingsEl.value);
  const monthlyContribution = parseFloat(monthlyContributionEl.value);
  if (
    isNaN(goalAmount) ||
    isNaN(currentSavings) ||
    isNaN(monthlyContribution)
  ) {
    // Using DOM manipulation to inject the text inside the HTML
    result.textContent = "Please enter a valid number!";
    // Using DOM manipulation for CSS
    result.classList.add("show");
    return;
  }

  // Roadmap Step 4: Calculate remaining amount and months to reach goal
  const remainingAmount = goalAmount - currentSavings;
  // Math function ceil to round up
  const monthsToGoal = Math.ceil(remainingAmount / monthlyContribution);
  // Progress percentage
  const progressPercentage = (currentSavings / goalAmount) * 100;

  // Roadmap Step 5: Update progress bar based on current savings
  progressBar.style.width = `${progressPercentage}%`;

  // Roadmap Step 6: Display result based on the savings progress using setTimeout
  result.classList.remove("show");
  setTimeout(() => {
    if (currentSavings >= goalAmount) {
      result.innerHTML = "Congratulations, you made it!";
    } else {
      result.innerHTML = `Good job, you have ${monthsToGoal} months left to reach your goal.`;
    }
    // Roadmap Step 7: Handle UI updates and transitions for result display
    result.classList.add("show");
  }, 100);
});
