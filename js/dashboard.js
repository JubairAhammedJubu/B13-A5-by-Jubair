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


// showIssues

function showIssues(issues) {
  container.innerHTML = "";

  issues.forEach((issue) => {
    const border =
      issue.status === "open" ? "border-emerald-600" : "border-purple-500";

    const logo =
      issue.status === "open"
        ? `<img src="assets/Open-Status.png" alt="Open">`
        : `<img src="assets/Closed- Status .png" alt="Closed" >`;

    const priorityColor = {
      high: "bg-red-100 text-red-500",
      medium: "bg-yellow-100 text-yellow-600",
      low: "bg-gray-200 text-gray-600",
    };

    const card = document.createElement("div");

    card.className = `bg-white rounded-md shadow border-t-4 ${border} p-4 flex flex-col h-full space-y-3 `;

    card.innerHTML = `
    
    <div class="flex justify-between items-center">
        ${logo} 
        <p class="text-xs px-3 py-1 rounded-full ${
          priorityColor[issue.priority]
        }">
          ${issue.priority.toUpperCase()}
        </p>
    </div>
    <h3 class="font-semibold text-lg leading-snug">
      ${issue.title}
    </h3>


    <p class="text-sm text-gray-500">
      ${issue.description}
    </p>

    <div class="grow"></div> <!-- takes all the empty space -->
    <div class="flex gap-2">

      <span class="text-xs px-2 py-1 bg-red-100 text-red-500 rounded-full">
        BUG
      </span>

      <span class="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full">
        HELP WANTED
      </span>

    </div>

    <hr class="border border-zinc-200">

    <div class="text-sm text-gray-500 ">
      #${issue.id} by ${issue.author}
    </div>

    <div class="text-xs text-gray-400">
      ${new Date(issue.createdAt).toLocaleDateString()}
    </div>

    `;

    card.addEventListener("click", () => openModal(issue));
    container.appendChild(card);
  });
}

// Search
async function searchIssue() {
  const text = document.getElementById("search").value;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`,
  );

  const data = await res.json();

  showIssues(data.data);

  document.getElementById("issueCount").innerText =
    data.data.length + " Issues";
}