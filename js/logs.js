// Redirect back to dashboard
function redirectToDashboard() {
  window.location.href = "dashboard.html";
}

// Example: Fetch Logs from Server (Optional)
// You can fetch real data from an API
async function fetchLogs() {
  try {
    const response = await fetch('/api/logs'); // Update with your API endpoint
    const data = await response.json();
    console.log(data); // Populate table dynamically
  } catch (error) {
    console.error('Error fetching logs:', error);
  }
}

// Call fetchLogs() on page load
// fetchLogs();
