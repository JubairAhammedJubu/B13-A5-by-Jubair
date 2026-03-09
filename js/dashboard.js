const container = document.getElementById("container");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");
const loader = document.getElementById("loader");

searchBtn.addEventListener("click", searchIssue);

// Load all issues
loadIssues();

// Load issues
async function loadIssues(type = "all") {
  const buttons = [allBtn, openBtn, closedBtn];
  // Reset all buttons
  buttons.forEach((btn) => {
    btn.classList.remove("bg-blue-700", "text-white");
    btn.classList.add("bg-white", "hover:border-blue-700");
  });

  // active button
  if (type === "all") {
    allBtn.classList.remove("bg-white", "hover:border-blue-700");
    allBtn.classList.add("bg-blue-700", "text-white");
  }

  if (type === "open") {
    openBtn.classList.remove("bg-white", "hover:border-blue-700");
    openBtn.classList.add("bg-blue-700", "text-white");
  }

  if (type === "closed") {
    closedBtn.classList.remove("bg-white", "hover:border-blue-700");
    closedBtn.classList.add("bg-blue-700", "text-white");
  }

  loader.classList.remove("hidden");

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
  loader.classList.add("hidden");
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

    card.className = `cursor-pointer hover:-translate-y-1 transition duration-350 bg-white rounded-md shadow border-t-4 ${border} py-4 flex flex-col h-full `;

    card.innerHTML = `
    
    <div class="flex justify-between items-center px-4">
        ${logo} 
        <p class="text-xs px-3 py-1 rounded-full ${
          priorityColor[issue.priority]
        }">
          ${issue.priority.toUpperCase()}
        </p>
    </div>
    <h3 class="font-semibold text-lg leading-snug mt-3  px-4">
      ${issue.title}
    </h3>

    <div class="grow"></div> <!-- takes all the empty space -->
    <p class="text-sm text-slate-500 my-3  px-4">
      ${issue.description.slice(0, 80) + "..."}
    </p>

    <div class="flex gap-2  px-4">

      <span class="text-xs px-2 py-1 border border-red-200 bg-red-100 text-red-500 rounded-full">
      <i class="fa-solid fa-bug"></i> BUG
      </span>

      <span class="text-xs px-2 py-1 border border-amber-300 bg-yellow-100 text-amber-600 rounded-full">
       <i class="fa-solid fa-life-ring"></i> HELP WANTED
      </span>

    </div>
  
    <hr class="border-t-2 border-gray-200 my-3">
    
    <div class="text-sm text-slate-500  px-4">
      #${issue.id} by ${issue.author}
    </div>

    <div class="text-xs text-slate-500 px-4">
      ${new Date(issue.createdAt).toLocaleDateString("en-US")}
    </div>

    `;

    card.addEventListener("click", () => openModal(issue));
    container.appendChild(card);
  });
}

// Search
async function searchIssue() {

  loader.classList.remove("hidden");
  const text = document.getElementById("search").value;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`,
  );

  const data = await res.json();

  showIssues(data.data);

  document.getElementById("issueCount").innerText =
    data.data.length + " Issues";
  
  loader.classList.add("hidden");
}

// Open Modal
function openModal(issue) {
  const modal = document.getElementById("issueModal");

  modal.showModal();

  document.getElementById("modalTitle").innerText = issue.title;
  document.getElementById("modalDesc").innerText = issue.description;
  document.getElementById("modalAuthor").innerText = issue.author;
  document.getElementById("modalAssignee").innerText = issue.author;

  document.getElementById("modalDate").innerText = new Date(
    issue.createdAt,
  ).toLocaleDateString();

  // open-close
  const status = document.getElementById("modalStatus");

  const statusMap = {
    open: {text: "Opened", color: "bg-emerald-600"},
    closed: {text: "Closed", color: "bg-purple-600"},
  };

  const s = statusMap[issue.status];

  status.textContent = s.text;
  status.className = `text-white text-sm px-4 py-1 rounded-full font-medium ${s.color}`;

  document.getElementById("modalName").innerText = s.text;

  //priratory
  const priority = document.getElementById("modalPriority");

  const colors = {
    high: "bg-red-500 text-white",
    medium: "bg-yellow-500 text-white",
    low: "bg-gray-400 text-white",
  };

  priority.className = `px-6 py-1 rounded-full text-sm font-semibold ${colors[issue.priority]}`;

  priority.innerText = issue.priority.toUpperCase();
}

//Close Modal
function closeModal() {
  document.getElementById("issueModal").close();
}
