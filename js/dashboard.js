const container = document.getElementById("container");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

searchBtn.addEventListener("click", searchIssue);

// Load all issues
loadIssues();

// Load issues
async function loadIssues(type = "all") {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  let issues = data.data;

  if (type === "open") issues = issues.filter((i) => i.status === "open");
  if (type === "closed") issues = issues.filter((i) => i.status === "closed");

  // issues = issues.filter((i) => type === "all" || i.status === type);

  showIssues(issues);
  document.getElementById("issueCount").innerText = `${issues.length} Issues`;
}
