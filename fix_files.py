from pathlib import Path

index_html = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Skills Learning Tracker</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="login-view" class="auth-screen">
    <div class="auth-box">
      <h1>Skills Learning Tracker</h1>
      <p>Welcome! Sign in to start building your own learning roadmap.</p>
      <div class="auth-form">
        <label for="login-username">Your name</label>
        <input id="login-username" type="text" placeholder="Enter your name" />
        <button id="login-btn" type="button">Login</button>
      </div>
    </div>
  </div>

  <div id="app-shell" class="container" style="display: none;">
    <header class="header-row">
      <div>
        <h1>Skills Learning Tracker</h1>
        <p>Track your progress across any skill path • Auto-saves in your browser</p>
      </div>
      <button id="logout-btn" class="logout-btn" type="button">Logout</button>
    </header>

    <div class="page-switcher">
      <button class="page-btn active" id="page-choose-btn">Page 1: Learning Topics</button>
      <button class="page-btn" id="page-sdet-btn">Page 2: SDET Learning Plan</button>
    </div>

    <section id="view-choose" class="page-view">
      <div class="intro-box">
        <h2>Choose your learning path</h2>
        <p>Select a skill track. New users can start by creating their own custom skill plan.</p>
      </div>

      <div class="custom-skill-box">
        <h3>Add your own skill</h3>
        <div class="custom-skill-form">
          <input id="custom-skill-name" type="text" placeholder="Skill name e.g. Java, SQL, DevOps" />
          <button id="add-custom-skill-btn" type="button">Add Skill</button>
        </div>
      </div>

      <div id="learning-paths-container" class="learning-paths-grid"></div>
    </section>

    <section id="view-sdet" class="page-view" style="display: none;">
      <div class="tabs">
        <button class="tab-btn active" id="tab-daily-btn">Daily Learning Plan</button>
        <button class="tab-btn" id="tab-projects-btn">Practice Projects</button>
        <button class="tab-btn" id="tab-matrix-btn">Skill Matrix</button>
      </div>

      <div class="filters">
        <select id="week-filter">
          <option value="all">All 8 Weeks (56 Days)</option>
          <option value="Week 1">Week 1: TypeScript Core & Git</option>
          <option value="Week 2">Week 2: Advanced Web DOM & POM</option>
          <option value="Week 3">Week 3: Pro API & Custom Client</option>
          <option value="Week 4">Week 4: Schema, GraphQL & Mocking</option>
          <option value="Week 5">Week 5: Contracts, DB & WebSockets</option>
          <option value="Week 6">Week 6: CI/CD, Sharding & Docker</option>
          <option value="Week 7">Week 7: AI Agents, k6 Load & A11y</option>
          <option value="Week 8">Week 8: Bridge, DSA & 16 LPA Defense</option>
        </select>
        <select id="status-filter">
          <option value="all">All Statuses</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div id="cards-container"></div>
    </section>

    <section id="view-projects" style="display: none;">
      <div id="projects-container"></div>
    </section>

    <section id="view-matrix" style="display: none;">
      <div id="matrix-container"></div>
    </section>
  </div>

  <script src="app.js"></script>
</body>
</html>
'''

app_js = '''const learningPaths = [
  {
    id: 'sdet',
    name: 'SDET',
    subtitle: 'Automation, API testing, CI/CD, and quality engineering',
    topics: ['TypeScript', 'Playwright', 'API Testing', 'CI/CD', 'Test Architecture']
  },
  {
    id: 'python',
    name: 'Python',
    subtitle: 'Programming fundamentals, automation, and backend logic',
    topics: ['Python Basics', 'OOP', 'Automation Scripts', 'FastAPI', 'Data Processing']
  }
];

const days = [
  ["Week 1","Day 1","TypeScript for SDETs","Node.js LTS, strict tsconfig, typed variables, unions, interfaces vs types","Type definitions for User, AuthCredentials, and ApiResponse"],
  ["Week 1","Day 2","TypeScript Async Deep-Dive","Promises, async/await event loop, error handling with custom test errors","Async retry wrapper with exponential backoff utility"],
  ["Week 1","Day 3","Git & Trunk-Based Dev","Git CLI: branch strategies, interactive rebase, conventional commits, .gitignore","Clean initialized Git repo with production-grade .gitignore"],
  ["Week 1","Day 4","Playwright Setup & Config","playwright.config.ts deep-dive, baseURL, viewport, timeouts, trace recording","Configured enterprise multi-environment Playwright project"],
  ["Week 1","Day 5","Modern Accessibility Locators","getByRole, getByLabel, getByTestId vs CSS/XPath. ARIA role prioritization","Robust login spec without a single hardcoded XPath"],
  ["Week 1","Day 6","Web-First Assertions","Auto-waiting mechanics, polling assertions (toPass), toBeVisible, toHaveValue","Resilient async UI assertion test suite on OrangeHRM login"],
  ["Week 1","Day 7","Playwright CLI & UI Mode","CodeGen terminal flags, device emulation, interactive UI Mode (--ui)","Record, inspect, and refactor a complex user flow using UI mode"],
  ["Week 2","Day 8","Complex DOM Handling","Nested iframes with frameLocator(), shadow DOM roots, canvas elements","Iframe and shadow-root automated tests for SaaS dashboard"],
  ["Week 2","Day 9","Multi-Tab & Dialog Events","context.waitForEvent('page'), window management, dialog.accept() alerts","Multi-window popup validation and download event handler"],
  ["Week 2","Day 10","Page Object Model (POM)","Enterprise POM: class encapsulation, private locators, fluent method chaining","OrangeHRM LoginPage and DashboardPage TypeScript classes"],
  ["Week 2","Day 11","Custom Test Fixtures","test.extend(), fixture isolation, page objects auto-injection without beforeEach","Custom test fixture delivering pre-initialized pages to tests"],
  ["Week 2","Day 12","Global Storage State Auth","auth.setup.ts, saving cookies & JWT to .auth/user.json, bypassing UI logins","Global setup project executing 1 UI login and reusing state across 20 specs"],
  ["Week 2","Day 13","Data-Driven Automation","Externalizing datasets in JSON/CSV, parameterized test loops with dynamic tags","Data-driven employee creation test cycling through 5 distinct roles"],
  ["Week 2","Day 14","BDD Cucumber Integration","@cucumber/cucumber + Playwright integration, feature files, step definitions","Gherkin feature file for user checkout with mapped TypeScript steps"],
  ["Week 3","Day 15","HTTP Protocol & REST Deep Dive","HTTP/1.1 vs HTTP/2, RFC status codes (201, 204, 400, 401, 403, 409, 422), headers","Architectural map of RESTful API endpoints and response codes"],
  ["Week 3","Day 16","Playwright APIRequestContext","Native request fixture, context options, baseURL, custom default headers","Pure headless API test suite hitting CRUD endpoints in under 2 seconds"],
  ["Week 3","Day 17","Custom HTTP Client Class","Building a generic typed ApiClient wrapper (GET, POST, PUT, PATCH, DELETE)","Reusable ApiClient<T> class with automatic payload serialization"],
  ["Week 3","Day 18","Dynamic Auth & Token Manager","OAuth2 Bearer token generation, refresh token logic, automatic header injection","TokenManager utility handling auto-expiry and token caching"],
  ["Week 3","Day 19","Hybrid UI + API Testing","Data seeding via API before UI test execution, DB teardown via API in afterEach","Test creating 5 articles via API, then asserting UI rendering in 1 sec"],
  ["Week 3","Day 20","Postman & Newman Automation","Postman environments, collection runner, pre-request & test scripts","Exported Postman collection automated via headless Newman CLI script"],
  ["Week 3","Day 21","API Error & Resilience Testing","Testing rate limits (429 Too Many Requests), invalid bodies, SQL injection inputs","Negative API test suite verifying robust 4xx error payloads"],
  ["Week 4","Day 22","JSON Schema Validation (AJV)","AJV compiler, JSON Schema drafts, strict type & required property validation","Automated schema validator catching breaking backend field changes"],
  ["Week 4","Day 23","TypeScript Typebox / Zod","Runtime validation with Zod/Typebox, generating TS types directly from schemas","Zod response parsers throwing compile-time & runtime validation errors"],
  ["Week 4","Day 24","OpenAPI / Swagger Validation","Validating live API responses against swagger.json / openapi.yaml specs","Automated contract gate failing tests when responses drift from Swagger"],
  ["Week 4","Day 25","Network Interception & Mocking","page.route(), aborting image assets, modifying backend responses, injecting 500s","Mocking payment failure and slow latency responses on client UI"],
  ["Week 4","Day 26","GraphQL Testing Fundamentals","GraphQL architecture vs REST, queries, mutations, variables, operation names","Playwright test suite validating Conduit / GitHub GraphQL APIs"],
  ["Week 4","Day 27","GraphQL Schema & Fragments","Asserting errors array, nullability, query cost, validating fragment responses","Automated GraphQL test validating complex nested user profile payloads"],
  ["Week 4","Day 28","Mock Service Worker (MSW)","Mocking APIs at the network level using MSW / WireMock standalone servers","Isolated offline API mock server for reproducible E2E tests"],
  ["Week 5","Day 29","Contract Testing with Pact","Consumer-Driven Contracts, Pact broker concepts, consumer expectations","Pact consumer test generating contract file for Conduit article API"],
  ["Week 5","Day 30","Pact Provider Verification","Verifying backend provider against generated Pact contract JSON","Pact CLI provider verification script in test pipeline"],
  ["Week 5","Day 31","Database State Validation (PostgreSQL)","Connecting to PostgreSQL/MySQL in Playwright via node-postgres, querying rows","API test verifying data row persisted correctly in database table"],
  ["Week 5","Day 32","NoSQL State Validation (MongoDB)","Connecting to MongoDB via mongoose/mongodb driver, asserting document states","Integration test asserting MongoDB order document after checkout API"],
  ["Week 5","Day 33","WebSocket & Real-Time Testing","ws library, testing WebSocket handshakes, event listeners, bidirectional streaming","Playwright test asserting live real-time notification push over WebSocket"],
  ["Week 5","Day 34","Event-Driven & Polling Utilities","Handling async queue processing, polling APIs with exponential backoff","Reusable pollUntilConditionMet() utility for asynchronous background jobs"],
  ["Week 5","Day 35","API Security & JWT Tampering","Testing expired tokens, modified JWT signatures, role privilege escalation","Security test verifying unauthorized access returns strict 403 Forbidden"],
  ["Week 6","Day 36","GitHub Actions Matrix Builds","Multi-browser matrix (Chromium, Firefox, WebKit), runner cache strategies",".github/workflows/e2e.yml running parallel cross-browser tests"],
  ["Week 6","Day 37","CI Test Sharding","--shard=x/y flag, splitting 100 tests across 4 GitHub Actions virtual machines","Sharded pipeline cutting test run time from 20 minutes to 5 minutes"],
  ["Week 6","Day 38","CI Artifacts & Live GitHub Pages","actions/upload-artifact, merging shard reports, hosting HTML report on GitHub Pages","Public live dashboard URL hosting test execution reports"],
  ["Week 6","Day 39","Secrets & Multi-Env Management","GitHub Secrets, .env.staging, .env.prod, dotenv vault, injecting credentials","Secure parameter injection pipeline without committed credentials"],
  ["Week 6","Day 40","Dockerizing Playwright Tests","Official Playwright container image, writing production Dockerfile","Containerized test execution locally and in CI matching prod linux environment"],
  ["Week 6","Day 41","Declarative Jenkins Pipeline","Jenkinsfile, pipeline stages: Checkout -> Docker Run -> HTML Publisher","Complete Declarative Jenkinsfile with automated Git webhook trigger"],
  ["Week 6","Day 42","CI Failure Diagnostics & Alerts","Slack / Teams webhook notifications, capturing trace.zip & video on failure","Automated Slack alert with failure screenshot and Playwright trace download"],
  ["Week 7","Day 43","Playwright MCP Server Setup","Installing @playwright/mcp, connecting to AI client (Claude Code, Cursor)","Working MCP server inspecting live browser accessibility trees"],
  ["Week 7","Day 44","Agentic Test Generation","Prompting AI agent to explore SaaS workflows, discover forms, and write specs","AI-generated comprehensive test suite for e-commerce edge cases"],
  ["Week 7","Day 45","Self-Healing AI Workflows","Diagnosing broken locators via AI healer agents, automated locator refactoring","Self-healing test script surviving DOM attribute changes"],
  ["Week 7","Day 46","API Load Testing with k6","Writing k6 load scripts in JavaScript, virtual users (VUs), duration, thresholds","k6 test simulating 200 concurrent users against login & search APIs"],
  ["Week 7","Day 47","Stress & Spike Testing (k6)","Ramping arrival rates, measuring p95/p99 latency, identifying API bottlenecks","Performance summary report asserting p95 response time < 350ms"],
  ["Week 7","Day 48","Accessibility Testing (@axe-core)","@axe-core/playwright integration, WCAG 2.1 AA audits, rule violations","Automated a11y test failing on missing ARIA labels and color contrast issues"],
  ["Week 7","Day 49","UI Performance Auditing","Playwright performance timing metrics, First Contentful Paint, Time to Interactive","UI performance spec tracking core web vitals across page loads"],
  ["Week 8","Day 50","Selenium to Playwright Bridge","Mapping Selenium Java (WebDriverWait, FindBy) to Playwright TS (Locators, Auto-wait)","Comparative cheat sheet and dual-script demonstrating both syntaxes"],
  ["Week 8","Day 51","DSA for SDETs (Strings & Arrays)","Two-pointer, sliding window, character frequency map, anagrams, substring search","Clean TS solutions for top 15 SDET coding round algorithm questions"],
  ["Week 8","Day 52","DSA for SDETs (HashMaps & Objects)","LRU cache concept, grouping API responses, finding duplicates, nested object traversal","Deep object comparison and response diffing algorithm implementation"],
  ["Week 8","Day 53","Framework Design Defense","Whiteboard framework design: folder structure, reporting, retry, multi-tenant auth","High-level architecture diagram and design explanation document"],
  ["Week 8","Day 54","Project 1 Showcase (OrangeHRM)","Polishing repo: clean code, linting, README, architecture badges, storage state","Complete GitHub repository with CI status badges for Project 1"],
  ["Week 8","Day 55","Project 2 & 3 Showcase","Conduit Hybrid API+UI repo + Restful-Booker BDD repo with live GitHub Pages report","Portfolio featuring Contract, API, UI, and BDD test suites"],
  ["Week 8","Day 56","16 LPA Mock Interview & Pitch","Resume framing: 2 YOE positioned with senior SDET architectural depth, mock interview","Ready-to-deploy resume and narrative answering 'Tell me about your framework'"]
];

const projects = [
  { id: "Project 1", name: "Enterprise SaaS B2B Application", url: "https://opensource-demo.orangehrmlive.com/", arch: "Strict POM + Custom Fixtures (test.extend) + Global Storage State Auth", ui: "Employee Onboarding (PIM), dynamic multi-column data tables, pagination, role-based admin vs user views, dynamic dropdowns, file uploads.", api: "Direct auth cookie extraction, session bypass, bulk employee creation via backend endpoints, database reconciliation." },
  { id: "Project 2", name: "Modern SPA Full-Stack Blog Platform", url: "https://conduit.bondaracademy.com/ (API: https://realworld-docs.netlify.app/)", arch: "Hybrid Testing (Playwright UI + APIRequestContext) + AJV JSON Schema + MSW Mocking", ui: "User registration, JWT token storage, creating/editing articles, dynamic tag filtering, comment feeds, optimistic UI rendering.", api: "Headless API test data seeding before UI execution, network route interception (page.route) forcing 500 errors, Pact contract validation." },
  { id: "Project 3", name: "Full-Lifecycle Booking & Hotel Engine", url: "https://automationintesting.online/", arch: "BDD Gherkin (Cucumber-JS + Playwright) + Playwright MCP AI Agent + k6 Load Testing", ui: "Interactive calendar date-range drag selection, room reservation booking, customer inquiry contact form, admin room management dashboard.", api: "Validating booking state in backend API, k6 stress testing against booking endpoint (100 VUs), autonomous edge-case discovery using Playwright MCP Agent." }
];

const matrix = [
  { area: "Programming & TypeScript", service: "Relies on Thread.sleep, copy-pastes scripts, basic syntax only.", product: "Async/await event loop mastery, custom retry wrapper with exponential backoff, strict types." },
  { area: "Web UI Automation", service: "Monolithic scripts, brittle XPaths, manual wait times.", product: "Accessible locators (getByRole), native auto-waiting, Page Object Model + Custom Fixtures." },
  { area: "API Engineering", service: "Manual Postman GUI runs, checks status 200 only.", product: "Typed ApiClient wrapper, AJV JSON Schema validation, Pact contracts, hybrid data seeding." },
  { area: "CI/CD & Infrastructure", service: "Clicks 'Build Now' in Jenkins; DevOps fixes failures.", product: "Builds GitHub Actions matrix workflows from scratch, test sharding, Docker containers." },
  { area: "AI in Testing", service: "Uses ChatGPT for basic regex prompts.", product: "Configures Playwright MCP server with AI coding agents (Cursor/Claude) for autonomous testing." }
];

function getCurrentUser() {
  return localStorage.getItem('currentUser') || '';
}

function getUserStorageKey(prefix) {
  const user = getCurrentUser();
  return user ? `${prefix}_${user}` : `${prefix}_guest`;
}

function getUserProfiles() {
  try {
    return JSON.parse(localStorage.getItem('userProfiles') || '{}');
  } catch {
    return {};
  }
}

function saveUserProfiles(profiles) {
  localStorage.setItem('userProfiles', JSON.stringify(profiles));
}

function ensureCurrentUserProfile() {
  const user = getCurrentUser();
  if (!user) return;

  const profiles = getUserProfiles();
  if (!profiles[user]) {
    profiles[user] = { createdAt: Date.now(), startedWithDemo: false };
    saveUserProfiles(profiles);
  }
}

function isNewUser() {
  const user = getCurrentUser();
  if (!user) return true;

  const profile = getUserProfiles()[user];
  return !profile || profile.startedWithDemo === false;
}

function getCustomSkills() {
  try {
    return JSON.parse(localStorage.getItem(getUserStorageKey('customSkills')) || '[]');
  } catch {
    return [];
  }
}

function saveCustomSkills(skills) {
  localStorage.setItem(getUserStorageKey('customSkills'), JSON.stringify(skills));
}

function getUserStorageValue(prefix, index) {
  return localStorage.getItem(`${prefix}_${getCurrentUser()}_${index}`);
}

function setUserStorageValue(prefix, index, value) {
  localStorage.setItem(`${prefix}_${getCurrentUser()}_${index}`, value);
}

function handleLogin() {
  const input = document.getElementById('login-username');
  const name = input.value.trim();

  if (!name) {
    alert('Please enter your name to continue.');
    return;
  }

  const profiles = getUserProfiles();
  if (!profiles[name]) {
    profiles[name] = { createdAt: Date.now(), startedWithDemo: false };
    saveUserProfiles(profiles);
  }

  localStorage.setItem('currentUser', name);
  showApp();
}

function handleLogout() {
  localStorage.removeItem('currentUser');
  document.getElementById('login-username').value = '';
  showLogin();
}

function showLogin() {
  document.getElementById('login-view').style.display = 'flex';
  document.getElementById('app-shell').style.display = 'none';
}

function showApp() {
  ensureCurrentUserProfile();
  document.getElementById('login-view').style.display = 'none';
  document.getElementById('app-shell').style.display = 'block';
  renderLearningPaths();
  renderCards();
}

function addCustomSkill() {
  const input = document.getElementById('custom-skill-name');
  const name = input.value.trim();

  if (!name) {
    alert('Please enter a skill name.');
    return;
  }

  const current = getCustomSkills();
  const alreadyExists = current.some(skill => skill.name.toLowerCase() === name.toLowerCase());

  if (alreadyExists) {
    alert('This skill already exists.');
    return;
  }

  current.push({
    id: Date.now(),
    name,
    subtitle: 'Custom skill plan created by the user',
    topics: ['Add your topics', 'Track your progress', 'Plan your milestones']
  });

  saveCustomSkills(current);
  input.value = '';
  renderLearningPaths();
}

function deleteCustomSkill(skillId) {
  const skill = getCustomSkills().find(item => item.id === Number(skillId));

  if (!skill) return;

  const confirmed = window.confirm(
    `Are you sure you want to delete the skill "${skill.name}"? This action cannot be undone.`
  );

  if (!confirmed) return;

  const updatedSkills = getCustomSkills().filter(item => item.id !== Number(skillId));
  saveCustomSkills(updatedSkills);
  renderLearningPaths();
}

function renderLearningPaths() {
  const container = document.getElementById('learning-paths-container');
  if (!container) return;

  const customSkills = getCustomSkills();
  const shouldShowDefaultPaths = !isNewUser();
  const allPaths = shouldShowDefaultPaths ? [...learningPaths, ...customSkills] : customSkills;

  if (!allPaths.length) {
    container.innerHTML = `
      <div class="empty-state-box">
        <h3>No learning plans yet</h3>
        <p>Create your first skill to start building a custom learning roadmap.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = allPaths.map(path => {
    const isCustomSkill = !['sdet', 'python'].includes(String(path.id));

    return `
      <div class="learning-path-card">
        <div class="path-badge">${path.name}</div>
        <h3>${path.name}</h3>
        <p>${path.subtitle}</p>
        <ul>
          ${path.topics.map(topic => `<li>${topic}</li>`).join('')}
        </ul>
        <div class="path-actions">
          <button class="choose-path-btn" data-path="${path.id}">${path.id === 'sdet' ? 'Open SDET Plan' : 'Choose This Path'}</button>
          ${isCustomSkill ? `<button class="delete-custom-skill-btn" data-skill-id="${path.id}">Delete</button>` : ''}
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.choose-path-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pathId = btn.getAttribute('data-path');
      if (pathId === 'sdet') {
        showPage('sdet');
      } else {
        alert('This custom skill path is ready for future setup. SDET remains the active learning plan for now.');
      }
    });
  });

  document.querySelectorAll('.delete-custom-skill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      deleteCustomSkill(btn.getAttribute('data-skill-id'));
    });
  });
}

function renderCards() {
  const container = document.getElementById('cards-container');
  container.innerHTML = '';

  const wVal = document.getElementById('week-filter').value;
  const sVal = document.getElementById('status-filter').value;

  days.forEach((row, i) => {
    const status = getUserStorageValue('track', i) || 'Not Started';
    const note = getUserStorageValue('note', i) || '';

    if (wVal !== 'all' && row[0] !== wVal) return;
    if (sVal !== 'all' && status !== sVal) return;

    const card = document.createElement('div');
    card.className = 'card ' + (status === 'Completed' ? 'completed' : '');
    const safeNote = (note || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    card.innerHTML = `
      <div class="card-head">
        <span class="tag">${row[0]} ·${row[1]}</span>
        <span style="font-size:11px; color:#94a3b8;">${row[2]}</span>
      </div>
      <div class="title">${row[2]}</div>
      <div class="desc">${row[3]}</div>
      <div class="deliverable">Deliverable: ${row[4]}</div>
      <div class="card-footer">
        <select class="status-select" onchange="updateStatus(${i}, this.value)">
          <option value="Not Started" ${status === 'Not Started' ? 'selected' : ''}>Not Started</option>
          <option value="In Progress" ${status === 'In Progress' ? 'selected' : ''}>In Progress</option>
          <option value="Completed" ${status === 'Completed' ? 'selected' : ''}>Completed</option>
        </select>
        <textarea class="note-input" rows="1" placeholder="PR link / notes...">${safeNote}</textarea>
      </div>
    `;

    const noteField = card.querySelector('.note-input');
    noteField.addEventListener('input', () => {
      setUserStorageValue('note', i, noteField.value);
      noteField.style.height = 'auto';
      noteField.style.height = `${noteField.scrollHeight}px`;
    });
    noteField.style.height = 'auto';
    noteField.style.height = `${noteField.scrollHeight}px`;

    container.appendChild(card);
  });

  updateStats();
}

function updateStatus(i, val) {
  setUserStorageValue('track', i, val);
  renderCards();
}

function updateStats() {
  let done = 0;
  days.forEach((_, i) => {
    if ((getUserStorageValue('track', i) || 'Not Started') === 'Completed') done++;
  });

  const pct = Math.round((done / days.length) * 100);
  document.getElementById('stat-count').innerText = `${done} of ${days.length} Completed`;
  document.getElementById('stat-pct').innerText = pct + '%';
  document.getElementById('bar-fill').style.width = pct + '%';
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = projects.map(p => `
    <div class="project-card">
      <h3>${p.id}:${p.name}</h3>
      <a href="${p.url.split(' ')[0]}" target="_blank">🔗 Target App: ${p.url}</a>
      <div class="project-box"><strong>Architecture:</strong> ${p.arch}</div>
      <div class="project-box"><strong>Core UI Scenarios:</strong> ${p.ui}</div>
      <div class="project-box"><strong>Pro API & Integration:</strong> ${p.api}</div>
    </div>
  `).join('');
}

function renderMatrix() {
  const container = document.getElementById('matrix-container');
  container.innerHTML = matrix.map(m => `
    <div class="matrix-box">
      <strong style="color:#38bdf8; font-size:14px;">${m.area}</strong>
      <div class="matrix-grid">
        <div class="cell-service"><strong>❌ Beginner Level:</strong> ${m.service}</div>
        <div class="cell-product"><strong>✅ Advanced Level:</strong> ${m.product}</div>
      </div>
    </div>
  `).join('');
}

document.getElementById('add-custom-skill-btn').onclick = addCustomSkill;
document.getElementById('login-btn').onclick = handleLogin;
document.getElementById('logout-btn').onclick = handleLogout;
document.getElementById('page-choose-btn').onclick = () => showPage('choose');
document.getElementById('page-sdet-btn').onclick = () => showPage('sdet');
document.getElementById('tab-daily-btn').onclick = () => showTab('daily');
document.getElementById('tab-projects-btn').onclick = () => showTab('projects');
document.getElementById('tab-matrix-btn').onclick = () => showTab('matrix');
document.getElementById('login-username').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleLogin();
  }
});

function showPage(name) {
  document.getElementById('view-choose').style.display = name === 'choose' ? 'block' : 'none';
  document.getElementById('view-sdet').style.display = name === 'sdet' ? 'block' : 'none';
  document.getElementById('page-choose-btn').classList.toggle('active', name === 'choose');
  document.getElementById('page-sdet-btn').classList.toggle('active', name === 'sdet');

  if (name === 'sdet') {
    showTab('daily');
  }
}

function showTab(name) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('view-sdet').style.display = 'block';
  document.getElementById('view-projects').style.display = 'none';
  document.getElementById('view-matrix').style.display = 'none';

  if (name === 'daily') {
    document.getElementById('tab-daily-btn').classList.add('active');
  } else if (name === 'projects') {
    document.getElementById('view-projects').style.display = 'block';
    document.getElementById('tab-projects-btn').classList.add('active');
  } else if (name === 'matrix') {
    document.getElementById('view-matrix').style.display = 'block';
    document.getElementById('tab-matrix-btn').classList.add('active');
  }
}

document.getElementById('week-filter').onchange = renderCards;
document.getElementById('status-filter').onchange = renderCards;

if (getCurrentUser()) {
  showApp();
} else {
  showLogin();
}

renderProjects();
renderMatrix();
showPage('choose');
'''

style_css = '''* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background-color: #0f172a;
  color: #f8fafc;
  padding: 20px 16px;
  line-height: 1.5;
}

.auth-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.auth-box {
  width: min(420px, 100%);
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.45);
}

.auth-box h1 {
  margin: 0 0 8px;
  font-size: 32px;
  color: #f8fafc;
}

.auth-box p {
  margin: 0 0 20px;
  color: #cbd5e1;
}

.auth-form {
  display: grid;
  gap: 12px;
}

.auth-form label {
  font-size: 13px;
  font-weight: 600;
  color: #cbd5e1;
}

.auth-form input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #475569;
  background: #0f172a;
  color: white;
  font-size: 14px;
}

.auth-form button,
.logout-btn {
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  font-weight: 700;
  cursor: pointer;
  background: #0284c7;
  color: white;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

header {
  background: linear-gradient(135deg, #1e293b, #0369a1);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

header h1 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 4px;
}

header p {
  font-size: 13px;
  color: #94a3b8;
}

.stats-box {
  background: rgba(15, 23, 42, 0.6);
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 14px;
}

.stat-info {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
}

.stat-info strong {
  color: #38bdf8;
}

.bar-bg {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 6px;
}

.bar-fill {
  height: 100%;
  width: 0%;
  background: #10b981;
  transition: width 0.3s ease;
}

.page-switcher {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.page-btn {
  background: #1e293b;
  color: #cbd5e1;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
}

.page-btn.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
}

.page-view {
  display: block;
}

.intro-box {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 18px;
}

.intro-box h2 {
  font-size: 18px;
  margin-bottom: 6px;
}

.intro-box p {
  font-size: 13px;
  color: #cbd5e1;
}

.custom-skill-box {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 18px;
}

.custom-skill-box h3 {
  font-size: 15px;
  margin-bottom: 10px;
}

.custom-skill-form {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.custom-skill-form input {
  flex: 1;
  min-width: 200px;
  background: #0f172a;
  color: #ffffff;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 13px;
}

.custom-skill-form button {
  background: #0284c7;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
}

.learning-paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
}

.learning-path-card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.path-badge {
  display: inline-block;
  width: fit-content;
  background: #0b132b;
  color: #67e8f9;
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.learning-path-card h3 {
  font-size: 18px;
  color: #f8fafc;
}

.learning-path-card p {
  font-size: 12.5px;
  color: #cbd5e1;
}

.learning-path-card ul {
  list-style: disc;
  padding-left: 18px;
  color: #e2e8f0;
  font-size: 12px;
  display: grid;
  gap: 6px;
}

.empty-state-box {
  background: rgba(15, 23, 42, 0.7);
  border: 1px dashed #475569;
  border-radius: 14px;
  padding: 30px 20px;
  text-align: center;
  color: #cbd5e1;
}

.empty-state-box h3 {
  margin: 0 0 8px;
  color: #f8fafc;
}

.path-actions {
  margin-top: auto;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.choose-path-btn,
.delete-custom-skill-btn {
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.delete-custom-skill-btn {
  background: #b91c1c;
}

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
}

.tab-btn {
  background: #1e293b;
  color: #94a3b8;
  border: 1px solid #334155;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

.tab-btn.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

#week-filter,
#status-filter {
  background: #0f172a;
  color: #e2e8f0;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 12px;
}

#cards-container {
  display: grid;
  gap: 16px;
}

.card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 16px;
}

.card.completed {
  border-color: #10b981;
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.tag {
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 11px;
  color: #67e8f9;
}

.title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 8px;
}

.desc,
.deliverable {
  font-size: 12.5px;
  color: #cbd5e1;
  margin-bottom: 10px;
}

.card-footer {
  display: grid;
  gap: 10px;
}

.status-select {
  width: 160px;
  background: #0f172a;
  color: #f8fafc;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 12px;
}

.note-input {
  width: 100%;
  min-height: 36px;
  resize: vertical;
  background: #0f172a;
  color: #f8fafc;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 12px;
  line-height: 1.5;
}

.project-card,
.matrix-box {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 14px;
}

.project-card h3,
.matrix-box strong {
  color: #f8fafc;
}

.project-card a {
  display: inline-block;
  margin: 10px 0;
  color: #7dd3fc;
  text-decoration: none;
  font-size: 12px;
}

.project-box {
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  color: #e2e8f0;
  font-size: 12px;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.cell-service,
.cell-product {
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
  color: #e2e8f0;
}
'''

Path(r'C:\Users\pottu\OneDrive\Desktop\SDET-Tracker-App\index.html').write_text(index_html, encoding='utf-8')
Path(r'C:\Users\pottu\OneDrive\Desktop\SDET-Tracker-App\app.js').write_text(app_js, encoding='utf-8')
Path(r'C:\Users\pottu\OneDrive\Desktop\SDET-Tracker-App\style.css').write_text(style_css, encoding='utf-8')
print('Files rewritten successfully.')
