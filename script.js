const jobs = [
    {
        id: 1,
        company: "Stripe",
        logo: "S",
        color: "#635bff",
        role: "Senior Product Designer",
        cat: "Product Design",
        type: "Design",
        work: "Remote",
        emp: "Full-time",
        loc: "San Francisco, CA • Remote",
        salary: 130,
        salaryTxt: "$130k – $160k",
        posted: "2 days ago • 32 applicants",
        desc: "Lead end-to-end product design for Stripe Dashboard.",
    },

    {
        id: 2,
        company: "Figma",
        logo: "F",
        color: "#1abcf2",
        role: "UI/UX Designer",
        cat: "Product Design",
        type: "Design",
        work: "Remote",
        emp: "Full-time",
        loc: "Remote",
        salary: 110,
        salaryTxt: "$110k – $135k",
        posted: "1 day ago",
        desc: "Design intuitive interfaces for Figma.",
    },

    {
        id: 3,
        company: "Linear",
        logo: "L",
        color: "#5e6ad2",
        role: "Product Manager",
        cat: "Product Design",
        type: "Product",
        work: "Remote",
        emp: "Full-time",
        loc: "Remote",
        salary: 120,
        salaryTxt: "$120k–$145k",
        posted: "Today • 8 applicants",
        desc: "Define roadmap and ship features customers love.",
    },

    {
        id: 4,
        company: "Notion",
        logo: "N",
        color: "#fff",
        role: "Design System Lead",
        cat: "Product Design",
        type: "Design",
        work: "Hybrid",
        emp: "Full-time",
        loc: "New York, NY • Hybrid",
        salary: 140,
        salaryTxt: "$140k – $165k",
        posted: "3 days ago",
        desc: "Own Notion design system.",
    },

    {
        id: 5,
        company: "Canva",
        logo: "C",
        color: "#00c4cc",
        role: "Interaction Designer",
        cat: "Product Design",
        type: "Design",
        work: "On-site",
        emp: "Full-time",
        loc: "Sydney • On-site",
        salary: 105,
        salaryTxt: "$105k – $125k",
        posted: "5 hours ago",
        desc: "Create delightful interactions.",
    },

    {
        id: 6,
        company: "Vercel",
        logo: "▲",
        color: "#111",
        role: "Backend Engineer",
        cat: "Engineering",
        type: "Engineering",
        work: "Remote",
        emp: "Full-time",
        loc: "New York, NY • Hybrid",
        salary: 140,
        salaryTxt: "$140k – $175k",
        posted: "1 day ago • 18 applicants",
        desc: "Build scalable APIs.",
    },

    {
        id: 7,
        company: "Figma",
        logo: "F",
        color: "#1abcf2",
        role: "Frontend Engineer",
        cat: "Engineering",
        type: "Engineering",
        work: "Remote",
        emp: "Contract",
        loc: "Bangalore • Remote",
        salary: 110,
        salaryTxt: "$110k–$140k",
        posted: "3 days ago",
        desc: "React, TypeScript expert.",
    },

    {
        id: 8,
        company: "Google",
        logo: "G",
        color: "#4285F4",
        role: "Full Stack Engineer",
        cat: "Engineering",
        type: "Engineering",
        work: "Hybrid",
        emp: "Full-time",
        loc: "Bangalore • Hybrid",
        salary: 160,
        salaryTxt: "$160k – $190k",
        posted: "2 days ago",
        desc: "Build next-gen search features.",
    },

    {
        id: 9,
        company: "Meta",
        logo: "M",
        color: "#0668E1",
        role: "React Engineer",
        cat: "Engineering",
        type: "Engineering",
        work: "Remote",
        emp: "Full-time",
        loc: "Menlo Park • Remote",
        salary: 155,
        salaryTxt: "$155k – $185k",
        posted: "4 hours ago",
        desc: "Work on Instagram web.",
    },

    {
        id: 10,
        company: "Amazon",
        logo: "A",
        color: "#FF9900",
        role: "DevOps Engineer",
        cat: "Engineering",
        type: "Engineering",
        work: "On-site",
        emp: "Full-time",
        loc: "Seattle • On-site",
        salary: 145,
        salaryTxt: "$145k – $175k",
        posted: "Today",
        desc: "AWS infrastructure automation.",
    },

    {
        id: 11,
        company: "Netflix",
        logo: "N",
        color: "#E50914",
        role: "Mobile Engineer",
        cat: "Engineering",
        type: "Engineering",
        work: "Remote",
        emp: "Full-time",
        loc: "Remote",
        salary: 170,
        salaryTxt: "$170k – $200k",
        posted: "6 hours ago",
        desc: "Build Netflix mobile apps.",
    },

    {
        id: 12,
        company: "Notion",
        logo: "N",
        color: "#fff",
        role: "Marketing Lead",
        cat: "Marketing",
        type: "Marketing",
        work: "On-site",
        emp: "Full-time",
        loc: "London, UK • On-site",
        salary: 95,
        salaryTxt: "$95k – $120k",
        posted: "4 hours ago • 12 applicants",
        desc: "Own go-to-market for Notion AI.",
    },

    {
        id: 13,
        company: "HubSpot",
        logo: "H",
        color: "#ff7a59",
        role: "Growth Marketer",
        cat: "Marketing",
        type: "Marketing",
        work: "Remote",
        emp: "Full-time",
        loc: "Remote",
        salary: 90,
        salaryTxt: "$90k – $115k",
        posted: "1 day ago",
        desc: "Drive growth campaigns.",
    },

    {
        id: 14,
        company: "Shopify",
        logo: "S",
        color: "#96bf48",
        role: "Content Strategist",
        cat: "Marketing",
        type: "Marketing",
        work: "Hybrid",
        emp: "Full-time",
        loc: "Toronto • Hybrid",
        salary: 85,
        salaryTxt: "$85k – $105k",
        posted: "2 days ago",
        desc: "Own content strategy.",
    },

    {
        id: 15,
        company: "Spotify",
        logo: "S",
        color: "#1DB954",
        role: "Brand Manager",
        cat: "Marketing",
        type: "Marketing",
        work: "On-site",
        emp: "Full-time",
        loc: "Stockholm • On-site",
        salary: 100,
        salaryTxt: "$100k – $125k",
        posted: "Today",
        desc: "Manage Spotify brand.",
    },

    {
        id: 16,
        company: "Adobe",
        logo: "A",
        color: "#FF0000",
        role: "Performance Marketer",
        cat: "Marketing",
        type: "Marketing",
        work: "Remote",
        emp: "Full-time",
        loc: "San Jose • Remote",
        salary: 110,
        salaryTxt: "$110k – $135k",
        posted: "3 hours ago",
        desc: "Run performance ads.",
    },

    {
        id: 17,
        company: "OpenAI",
        logo: "O",
        color: "#fff",
        role: "Data Scientist",
        cat: "Data Science",
        type: "Data",
        work: "On-site",
        emp: "Full-time",
        loc: "San Francisco, CA",
        salary: 180,
        salaryTxt: "$180k–$220k",
        posted: "5 hours ago",
        desc: "Work on LLM evaluation.",
    },

    {
        id: 18,
        company: "Tesla",
        logo: "T",
        color: "#E31937",
        role: "ML Engineer",
        cat: "Data Science",
        type: "Data",
        work: "Hybrid",
        emp: "Full-time",
        loc: "Austin, TX",
        salary: 165,
        salaryTxt: "$165k – $195k",
        posted: "1 day ago",
        desc: "Build Autopilot ML models.",
    },

    {
        id: 19,
        company: "Airbnb",
        logo: "A",
        color: "#FF5A5F",
        role: "Data Analyst",
        cat: "Data Science",
        type: "Data",
        work: "Remote",
        emp: "Full-time",
        loc: "Remote",
        salary: 125,
        salaryTxt: "$125k – $150k",
        posted: "2 hours ago",
        desc: "Analyze marketplace data.",
    },

    {
        id: 20,
        company: "Uber",
        logo: "U",
        color: "#000",
        role: "AI Researcher",
        cat: "Data Science",
        type: "Data",
        work: "On-site",
        emp: "Full-time",
        loc: "San Francisco • On-site",
        salary: 190,
        salaryTxt: "$190k – $230k",
        posted: "Today",
        desc: "Research AI for Uber.",
    },
];


let activeCat = "All";
let activeLoc = "All";
let activeRemote = "All";
let activeSal = "All";
let saved = JSON.parse(localStorage.getItem("saved") || "[]");
let applications = JSON.parse(localStorage.getItem("myApplications") || "[]");
let isLogin = localStorage.getItem("isLogin") === "true";
let currentJob = null;
let lastApp = null;
let recoExpanded = false;
let isCreateMode = false;


const DOM = {
    locDrop: document.getElementById("locDrop"),
    remoteDrop: document.getElementById("remoteDrop"),
    salDrop: document.getElementById("salDrop"),
    locLabel: document.getElementById("locLabel"),
    remoteLabel: document.getElementById("remoteLabel"),
    salLabel: document.getElementById("salLabel"),
    popular: document.getElementById("popular"),
    searchInput: document.getElementById("searchInput"),

    jobGrid: document.getElementById("jobGrid"),
    recoList: document.getElementById("recoList"),
    recoAll: document.getElementById("recoAll"),
    appList: document.getElementById("appList"),
    myApplications: document.getElementById("myApplications"),
    hideAppBtn: document.getElementById("hideAppBtn"),

    appCount: document.getElementById("appCount"),
    jobCount: document.getElementById("jobCount"),

    detailModal: document.getElementById("detailModal"),
    detailBox: document.getElementById("detailBox"),
    applyModal: document.getElementById("applyModal"),
    successModal: document.getElementById("successModal"),
    authModal: document.getElementById("authModal"),

    applyRole: document.getElementById("applyRole"),
    fName: document.getElementById("fName"),
    fEmail: document.getElementById("fEmail"),
    fPhone: document.getElementById("fPhone"),
    fLinkedIn: document.getElementById("fLinkedIn"),
    fCCTC: document.getElementById("fCCTC"),
    fECTC: document.getElementById("fECTC"),
    fResume: document.getElementById("fResume"),
    fCover: document.getElementById("fCover"),
    pdfName: document.getElementById("pdfName"),
    formError: document.getElementById("formError"),

    successRole: document.getElementById("successRole"),
    successDetails: document.getElementById("successDetails"),

    authTitle: document.getElementById("authTitle"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    createFields: document.getElementById("createFields"),
    cName: document.getElementById("cName"),
    cEmail: document.getElementById("cEmail"),
    cPass: document.getElementById("cPass"),
    cConfirmPass: document.getElementById("cConfirmPass"),
    cPassError: document.getElementById("cPassError"),
    avatarImg: document.getElementById("avatarImg"),

    allDropdowns: () => document.querySelectorAll(".dropdown"),
    allModals: () => document.querySelectorAll(".modal"),
};


function init() {
    DOM.locDrop.innerHTML = [
        "All",
        "San Francisco, CA",
        "New York, NY",
        "London, UK",
        "Remote",
        "Bangalore",
    ]
        .map((l) => `<div onclick="setF('loc','${l}')">${l}</div>`)
        .join("");

    DOM.remoteDrop.innerHTML = ["All", "Remote", "Hybrid", "On-site"]
        .map((l) => `<div onclick="setF('remote','${l}')">${l}</div>`)
        .join("");

    DOM.salDrop.innerHTML = [
        "All",
        "< $100k",
        "$100k - $130k",
        "$130k - $160k",
        "> $160k",
    ]
        .map((l) => `<div onclick="setF('sal','${l}')">${l}</div>`)
        .join("");

    DOM.popular.innerHTML =
        `<span class="popular-label">Popular:</span>` +
        ["Product Design", "Engineering", "Marketing", "Data Science"]
            .map(
                (c) =>
                    `<span class="pill ${activeCat === c ? "active" : ""}" onclick="filterCat('${c}')">${c}</span>`
            )
            .join("");

    render(jobs);
    renderReco();
    renderApps();
    updCount();

    DOM.hideAppBtn.onclick = () => {
        DOM.myApplications.classList.add("hidden");
    };
}


function render(list) {
    DOM.jobGrid.innerHTML = list
        .map(
            (j) => `
        <div class="card" onclick="openDetail(${j.id})">
          <div class="cardTop">
            <div class="company">
              <div class="c-logo" style="background:${j.color};color:${j.color === "#fff" ? "#000" : "#fff"}">
                ${j.logo}
              </div>
              ${j.company}
            </div>
            <span onclick="event.stopPropagation(); toggleSave(${j.id})">
              ${saved.includes(j.id) ? "🔖" : "♡"}
            </span>
          </div>
          <h3>${j.role}</h3>
          <div class="tags">
            <span class="t green" onclick="event.stopPropagation(); filterCat('${j.cat}')">${j.type}</span>
            <span class="t" onclick="event.stopPropagation(); setF('remote','${j.work}')">${j.work}</span>
            <span class="t" onclick="event.stopPropagation(); setF('remote','${j.emp}')">${j.emp}</span>
          </div>
          <div class="meta">📍 ${j.loc}<br><b>${j.salaryTxt}</b><br>${j.posted}</div>
        </div>
      `
        )
        .join("");
}

function renderReco() {
    const main = [jobs[2]];
    const all = jobs;

    DOM.recoList.innerHTML = main
        .map(
            (j) => `
        <div class="recoItem">
          <div class="recoItem-info">
            <div class="c-logo" style="background:${j.color}">${j.logo}</div>
            <div>
              <b>${j.role}</b>
              <div class="recoItem-meta">${j.company} • ${j.work} • ${j.salaryTxt}</div>
            </div>
          </div>
          <button class="pill" onclick="openDetail(${j.id})">View</button>
        </div>
      `
        )
        .join("");

    DOM.recoAll.innerHTML = all
        .map(
            (j) => `
        <div class="recoItem">
          <div class="recoItem-info">
            <div class="c-logo" style="background:${j.color}">${j.logo}</div>
            <div>
              <b>${j.role}</b>
              <div class="recoItem-meta">${j.company} • ${j.work} • ${j.salaryTxt}</div>
            </div>
          </div>
          <button class="pill" onclick="openDetail(${j.id})">Apply</button>
        </div>
      `
        )
        .join("");
}

function renderApps() {
    if (applications.length === 0) {
        DOM.appList.innerHTML = `<p class="subtext">No applications yet. Apply to jobs to see here.</p>`;
        return;
    }

    DOM.appList.innerHTML = applications
        .map(
            (a) => `
        <div class="recoItem column">
          <div class="recoItem-top">
            <b>${a.role} @ ${a.company}</b>
            <span class="recoItem-meta small">${a.date}</span>
          </div>
          <div class="recoItem-desc">
            ${a.name} • ${a.email} • ${a.phone} • Resume: ${a.resumeName}<br>
            ECTC: ${a.ectc} • CCTC: ${a.cctc}
          </div>
          <div class="tags">
            <button class="pill" onclick="editApp(${a.id})">Edit</button>
            <button class="pill" onclick="delApp(${a.id})">Delete</button>
          </div>
        </div>
      `
        )
        .join("");
}


function filterCat(c) {
    activeCat = activeCat === c ? "All" : c;
    init();
    doSearch();
}

function toggleDrop(id) {
    DOM.allDropdowns().forEach((d) => {
        if (d.id !== id) d.classList.remove("show");
    });
    document.getElementById(id).classList.toggle("show");
}

function setF(type, val) {
    if (type === "loc") {
        activeLoc = val;
        DOM.locLabel.innerText = val;
    }
    if (type === "remote") {
        activeRemote = val;
        DOM.remoteLabel.innerText = val;
    }
    if (type === "sal") {
        activeSal = val;
        DOM.salLabel.innerText = val;
    }
    DOM.allDropdowns().forEach((d) => d.classList.remove("show"));
    doSearch();
}

function doSearch() {
    console.log("Searching for:", DOM.searchInput.value);
    const q = DOM.searchInput.value.toLowerCase();

    const filtered = jobs.filter((j) => {
        const mq =
            !q ||
            j.role.toLowerCase().includes(q) ||
            j.company.toLowerCase().includes(q) ||
            j.cat.toLowerCase().includes(q);

        const mc = activeCat === "All" || j.cat === activeCat;

        const ml =
            activeLoc === "All" ||
            j.loc.includes(activeLoc) ||
            (activeLoc === "Remote" && j.work === "Remote");

        const mr =
            activeRemote === "All" ||
            j.work === activeRemote ||
            j.emp === activeRemote;

        let ms = true;
        if (activeSal === "< $100k") ms = j.salary < 100;
        if (activeSal === "$100k - $130k") ms = j.salary >= 100 && j.salary <= 130;
        if (activeSal === "$130k - $160k") ms = j.salary >= 130 && j.salary <= 160;
        if (activeSal === "> $160k") ms = j.salary > 160;

        return mq && mc && ml && mr && ms;
    });

    render(filtered);
}


function openDetail(id) {
    console.log("Opening job id:", id);
    const j = jobs.find((x) => x.id === id);
    currentJob = j;

    DOM.detailBox.innerHTML = `
    <span class="close" onclick="closeM('detailModal')">✕</span>
    <div class="detail-header">
      <div class="c-logo large" style="background:${j.color}">${j.logo}</div>
      <div>
        <h2>${j.role}</h2>
        <p class="subtext">${j.company} • ${j.loc}</p>
      </div>
    </div>
    <div class="tags m-16">
      <span class="t green">${j.type}</span>
      <span class="t">${j.work}</span>
      <span class="t">${j.emp}</span>
      <span class="t">${j.salaryTxt}</span>
    </div>
    <h4>About the role</h4>
    <p class="detail-desc">${j.desc}</p>
    <h4 class="detail-h4">Responsibilities</h4>
    <ul class="detail-list">
      <li>Develop and maintain responsive UI components</li>
      <li>Collaborate with design to implement pixel-perfect UI</li>
      <li>Optimize performance and accessibility</li>
    </ul>
    <button class="btn btn-apply mt-18" onclick="openApply('${j.role}')">Apply Now</button>
  `;

    DOM.detailModal.classList.add("show");
}

function validatePDF(input) {
    const file = input.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
        DOM.formError.innerText = "Only PDF files allowed!";
        input.value = "";
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        DOM.formError.innerText = "PDF size should be <2MB";
        input.value = "";
        return;
    }

    DOM.pdfName.innerText = `Selected: ${file.name}`;
    DOM.formError.innerText = "";
}

function openApply(role) {
    if (!isLogin) {
        openAuth();
        toast("Please login first");
        return;
    }

    DOM.applyRole.innerText = role;
    closeM("detailModal");
    DOM.applyModal.classList.add("show");

    if (lastApp && lastApp.editMode) {
        DOM.fName.value = lastApp.name;
        DOM.fEmail.value = lastApp.email;
        DOM.fPhone.value = lastApp.phone;
        DOM.fLinkedIn.value = lastApp.linkedin || "";
        DOM.fCCTC.value = lastApp.cctc || "";
        DOM.fECTC.value = lastApp.ectc || "";
    }
}

function submitApp() {
    const name = DOM.fName.value.trim();
    const email = DOM.fEmail.value.trim();
    const phone = DOM.fPhone.value.trim();
    const eCTC = DOM.fECTC.value.trim();
    const resume = DOM.fResume.files[0];

    if (!name || !email || !phone || !eCTC) {
        DOM.formError.innerText = "Please fill all fields";
        return;
    }

    if (!resume && !(lastApp && lastApp.editMode)) {
        DOM.formError.innerText = "Please upload PDF resume";
        return;
    }

    const app = {
        id: Date.now(),
        jobId: currentJob.id,
        role: currentJob.role,
        company: currentJob.company,
        name,
        email,
        phone,
        linkedin: DOM.fLinkedIn.value,
        cctc: DOM.fCCTC.value,
        ectc: eCTC,
        cover: DOM.fCover.value,
        resumeName: resume ? resume.name : lastApp ? lastApp.resumeName : "",
        date: new Date().toLocaleString(),
    };

    if (lastApp && lastApp.editMode) {
        const idx = applications.findIndex((a) => a.id === lastApp.id);
        if (idx > -1) applications[idx] = app;
        else applications.push(app);
    } else {
        applications.push(app);
    }

    localStorage.setItem("myApplications", JSON.stringify(applications));
    console.log("Application saved:", app);
    lastApp = app;

    closeM("applyModal");

    DOM.successRole.innerText = app.role;
    DOM.successDetails.innerHTML = `
    <b>Company:</b> ${app.company}<br>
    <b>Name:</b> ${app.name}<br>
    <b>Email:</b> ${app.email}<br>
    <b>Resume:</b> ${app.resumeName}<br>
    <b>Applied:</b> ${app.date}
  `;

    DOM.successModal.classList.add("show");

    renderApps();
    updCount();
    clearForm();
}

function clearForm() {
    [
        DOM.fName,
        DOM.fEmail,
        DOM.fPhone,
        DOM.fLinkedIn,
        DOM.fCCTC,
        DOM.fECTC,
        DOM.fCover,
        DOM.fResume,
    ].forEach((el) => {
        if (el) el.value = "";
    });

    DOM.pdfName.innerText = "";
    DOM.formError.innerText = "";
}


function toggleReco() {
    recoExpanded = !recoExpanded;
    DOM.recoAll.classList.toggle("hidden");
}

function editApp(id) {
    lastApp = applications.find((a) => a.id === id);
    lastApp.editMode = true;
    currentJob = jobs.find((j) => j.id === lastApp.jobId) || jobs[0];
    openApply(lastApp.role);
}

function delApp(id) {
    applications = applications.filter((a) => a.id !== id);
    localStorage.setItem("myApplications", JSON.stringify(applications));
    renderApps();
    updCount();
    toast("Deleted");
}

function openApplications() {
    DOM.myApplications.classList.remove("hidden");
    DOM.myApplications.scrollIntoView({ behavior: "smooth" });
}

function editLast() {
    closeM("successModal");
    lastApp.editMode = true;
    openApply(lastApp.role);
}


function openAuth() {
    DOM.authModal.classList.add("show");
}

function closeM(id) {
    document.getElementById(id).classList.remove("show");
}

function oauth(provider) {
    isLogin = true;
    localStorage.setItem("isLogin", "true");
    toast(`Logged in with ${provider}`);
    closeM("authModal");
    DOM.avatarImg.src = "https://i.pravatar.cc/100?img=12";
}

function emailLogin() {
    const e = DOM.email.value.trim();
    const pw = DOM.password.value.trim();

    if (!e || !pw) {
        toast("Enter email & password");
        return;
    }

    oauth("Email");
}

function createAccount() {
    const n = DOM.cName.value.trim();
    const e = DOM.cEmail.value.trim();
    const p = DOM.cPass.value;
    const cp = DOM.cConfirmPass.value;

    if (!n || !e || !p || !cp) {
        DOM.cPassError.innerText = "Please fill all fields";
        toast("Fill all fields");
        return;
    }

    if (p.length < 6) {
        DOM.cPassError.innerText = "Password must be at least 6 characters";
        return;
    }

    if (p !== cp) {
        DOM.cPassError.innerText = "Password and Confirm Password do not match!";
        toast("Password mismatch");
        return;
    }

    DOM.cPassError.innerText = "";
    oauth("New Account");

    DOM.cName.value = "";
    DOM.cEmail.value = "";
    DOM.cPass.value = "";
    DOM.cConfirmPass.value = "";
}

function switchAuth() {
    isCreateMode = !isCreateMode;
    DOM.createFields.classList.toggle("hidden");
    DOM.authTitle.innerText = isCreateMode ? "Create account" : "Welcome back";
    DOM.cPassError.innerText = "";
}


function toggleSave(id) {
    if (saved.includes(id)) saved = saved.filter((x) => x !== id);
    else saved.push(id);

    localStorage.setItem("saved", JSON.stringify(saved));
    init();
    doSearch();
}

function updCount() {
    DOM.appCount.innerText = applications.length;
    DOM.jobCount.innerText = jobs.length;
}

function resetF() {
    activeCat = "All";
    activeLoc = "All";
    activeRemote = "All";
    activeSal = "All";

    DOM.searchInput.value = "";
    DOM.locLabel.innerText = "Location";
    DOM.remoteLabel.innerText = "Remote";
    DOM.salLabel.innerText = "Salary Range";

    init();
    doSearch();
}

function openSec(s) {
    toast(`${s} - Coming soon`);
}

function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.innerText = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
}

window.onclick = (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("show");
    }

    if (!e.target.closest(".f-btn")) {
        DOM.allDropdowns().forEach((d) => d.classList.remove("show"));
    }
};

init();