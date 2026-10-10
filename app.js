const learningPaths = [
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

function buildSdetDays() {
  const days = [];
  let legacyIndex = 0;
  let sequenceDay = 1;

  const pushDay = (week, title, objective, deliverable, inserted = false) => {
    const row = [week, `Day ${sequenceDay}`, title, objective, deliverable];
    if (!inserted) {
      row.legacyIndex = legacyIndex;
      legacyIndex += 1;
    }
    sequenceDay += 1;
    days.push(row);
  };

  pushDay("Week 1", "TypeScript for SDETs", "Node.js LTS, strict tsconfig, typed variables, unions, interfaces vs types", "Type definitions for User, AuthCredentials, and ApiResponse");
  pushDay("Week 1", "TypeScript Async Deep-Dive", "Promises, async/await event loop, error handling with custom test errors", "Async retry wrapper with exponential backoff utility");
  pushDay("Week 1", "Git & Trunk-Based Dev", "Git CLI: branch strategies, interactive rebase, conventional commits, .gitignore", "Clean initialized Git repo with production-grade .gitignore");
  pushDay("Week 1", "Playwright Setup & Config", "playwright.config.ts deep-dive, baseURL, viewport, timeouts, trace recording", "Configured enterprise multi-environment Playwright project");
  pushDay("Week 1", "Modern Accessibility Locators", "getByRole, getByLabel, getByTestId vs CSS/XPath. ARIA role prioritization", "Robust login spec without a single hardcoded XPath");
  pushDay("Week 1", "Web-First Assertions", "Auto-waiting mechanics, polling assertions (toPass), toBeVisible, toHaveValue", "Resilient async UI assertion test suite on OrangeHRM login");
  pushDay("Week 1", "Playwright CLI & UI Mode", "CodeGen terminal flags, device emulation, interactive UI Mode (--ui)", "Record, inspect, and refactor a complex user flow using UI mode");
  pushDay("Week 1", "Browser Contexts & Multi-User Isolation", "BrowserContext vs Page architecture, isolated sessions in a single process, multi-user concurrent flows", "Automate a real-time 2-user chat scenario across two isolated BrowserContext instances", true);

  pushDay("Week 2", "Complex DOM Handling", "Nested iframes with frameLocator(), shadow DOM roots, canvas elements", "Iframe and shadow-root automated tests for SaaS dashboard");
  pushDay("Week 2", "Multi-Tab & Dialog Events", "context.waitForEvent('page'), window management, dialog.accept() alerts", "Multi-window popup validation and download event handler");
  pushDay("Week 2", "Page Object Model (POM)", "Enterprise POM: class encapsulation, private locators, fluent method chaining", "OrangeHRM LoginPage and DashboardPage TypeScript classes");
  pushDay("Week 2", "Custom Test Fixtures", "test.extend(), fixture isolation, page objects auto-injection without beforeEach", "Custom test fixture delivering pre-initialized pages to tests");
  pushDay("Week 2", "Global Storage State Auth", "auth.setup.ts, saving cookies & JWT to .auth/user.json, bypassing UI logins", "Global setup project executing 1 UI login and reusing state across 20 specs");
  pushDay("Week 2", "Data-Driven Automation", "Externalizing datasets in JSON/CSV, parameterized test loops with dynamic tags", "Data-driven employee creation test cycling through 5 distinct roles");
  pushDay("Week 2", "BDD Cucumber Integration", "@cucumber/cucumber + Playwright integration, feature files, step definitions", "Gherkin feature file for user checkout with mapped TypeScript steps");
  pushDay("Week 2", "Flaky Test Engineering & Quarantining", "Flakiness triaging, dynamic tags (@smoke, @regression, @quarantine), retry budget strategies", "Quarantine tag runner script executing a 5-run consistency check before PR merging", true);

  pushDay("Week 3", "HTTP Protocol & REST Deep Dive", "HTTP/1.1 vs HTTP/2, RFC status codes (201, 204, 400, 401, 403, 409, 422), headers", "Architectural map of RESTful API endpoints and response codes");
  pushDay("Week 3", "Playwright APIRequestContext", "Native request fixture, context options, baseURL, custom default headers", "Pure headless API test suite hitting CRUD endpoints in under 2 seconds");
  pushDay("Week 3", "Custom HTTP Client Class", "Building a generic typed ApiClient wrapper (GET, POST, PUT, PATCH, DELETE)", "Reusable ApiClient<T> class with automatic payload serialization");
  pushDay("Week 3", "Dynamic Auth & Token Manager", "OAuth2 Bearer token generation, refresh token logic, automatic header injection", "TokenManager utility handling auto-expiry and token caching");
  pushDay("Week 3", "Hybrid UI + API Testing", "Data seeding via API before UI test execution, DB teardown via API in afterEach", "Test creating 5 articles via API, then asserting UI rendering in 1 sec");
  pushDay("Week 3", "Postman & Newman Automation", "Postman environments, collection runner, pre-request & test scripts", "Exported Postman collection automated via headless Newman CLI script");
  pushDay("Week 3", "API Error & Resilience Testing", "Testing rate limits (429 Too Many Requests), invalid bodies, SQL injection inputs", "Negative API test suite verifying robust 4xx error payloads");
  pushDay("Week 3", "API Idempotency & Concurrency Testing", "Idempotency-Key headers, concurrent race condition checks using Promise.all(), double-spend prevention", "Concurrent test sending 5 checkout requests with the same idempotency key asserting exactly 1 database write", true);

  pushDay("Week 4", "JSON Schema Validation (AJV)", "AJV compiler, JSON Schema drafts, strict type & required property validation", "Automated schema validator catching breaking backend field changes");
  pushDay("Week 4", "TypeScript Typebox / Zod", "Runtime validation with Zod/Typebox, generating TS types directly from schemas", "Zod response parsers throwing compile-time & runtime validation errors");
  pushDay("Week 4", "OpenAPI / Swagger Validation", "Validating live API responses against swagger.json / openapi.yaml specs", "Automated contract gate failing tests when responses drift from Swagger");
  pushDay("Week 4", "Network Interception & Mocking", "page.route(), aborting image assets, modifying backend responses, injecting 500s", "Mocking payment failure and slow latency responses on client UI");
  pushDay("Week 4", "GraphQL Testing Fundamentals", "GraphQL architecture vs REST, queries, mutations, variables, operation names", "Playwright test suite validating Conduit / GitHub GraphQL APIs");
  pushDay("Week 4", "GraphQL Schema & Fragments", "Asserting errors array, nullability, query cost, validating fragment responses", "Automated GraphQL test validating complex nested user profile payloads");
  pushDay("Week 4", "Mock Service Worker (MSW)", "Mocking APIs at the network level using MSW / WireMock standalone servers", "Isolated offline API mock server for reproducible E2E tests");
  pushDay("Week 4", "Visual Regression & Snapshot Diffing", "Pixel-level visual comparisons with expect(page).toHaveScreenshot(), maxDiffPixelRatio, CI snapshot updates", "Visual snapshot test suite with pixel diff thresholds and auto-updating flags", true);

  pushDay("Week 5", "Contract Testing with Pact", "Consumer-Driven Contracts, Pact broker concepts, consumer expectations", "Pact consumer test generating contract file for Conduit article API");
  pushDay("Week 5", "Pact Provider Verification", "Verifying backend provider against generated Pact contract JSON", "Pact CLI provider verification script in test pipeline");
  pushDay("Week 5", "Database State Validation (PostgreSQL)", "Connecting to PostgreSQL/MySQL in Playwright via node-postgres, querying rows", "API test verifying data row persisted correctly in database table");
  pushDay("Week 5", "NoSQL State Validation (MongoDB)", "Connecting to MongoDB via mongoose/mongodb driver, asserting document states", "Integration test asserting MongoDB order document after checkout API");
  pushDay("Week 5", "WebSocket & Real-Time Testing", "ws library, testing WebSocket handshakes, event listeners, bidirectional streaming", "Playwright test asserting live real-time notification push over WebSocket");
  pushDay("Week 5", "Event-Driven & Polling Utilities", "Handling async queue processing, polling APIs with exponential backoff", "Reusable pollUntilConditionMet() utility for asynchronous background jobs");
  pushDay("Week 5", "API Security & JWT Tampering", "Testing expired tokens, modified JWT signatures, role privilege escalation", "Security test verifying unauthorized access returns strict 403 Forbidden");

  pushDay("Week 6", "GitHub Actions Matrix Builds", "Multi-browser matrix (Chromium, Firefox, WebKit), runner cache strategies", ".github/workflows/e2e.yml running parallel cross-browser tests");
  pushDay("Week 6", "CI Test Sharding", "--shard=x/y flag, splitting 100 tests across 4 GitHub Actions virtual machines", "Sharded pipeline cutting test run time from 20 minutes to 5 minutes");
  pushDay("Week 6", "CI Artifacts & Live GitHub Pages", "actions/upload-artifact, merging shard reports, hosting HTML report on GitHub Pages", "Public live dashboard URL hosting test execution reports");
  pushDay("Week 6", "Secrets & Multi-Env Management", "GitHub Secrets, .env.staging, .env.prod, dotenv vault, injecting credentials", "Secure parameter injection pipeline without committed credentials");
  pushDay("Week 6", "Dockerizing Playwright Tests", "Official Playwright container image, writing production Dockerfile", "Containerized test execution locally and in CI matching prod linux environment");
  pushDay("Week 6", "Declarative Jenkins Pipeline", "Jenkinsfile, pipeline stages: Checkout -> Docker Run -> HTML Publisher", "Complete Declarative Jenkinsfile with automated Git webhook trigger");
  pushDay("Week 6", "CI Failure Diagnostics & Alerts", "Slack / Teams webhook notifications, capturing trace.zip & video on failure", "Automated Slack alert with failure screenshot and Playwright trace download");
  pushDay("Week 6", "Test Observability & Distributed Tracing", "Injecting traceparent headers, correlation IDs, attaching server request logs to failed Playwright traces", "Custom reporter attaching backend Request-IDs and trace links to Playwright failure artifacts", true);

  pushDay("Week 7", "Playwright MCP Server Setup", "Installing @playwright/mcp, connecting to AI client (Claude Code, Cursor)", "Working MCP server inspecting live browser accessibility trees");
  pushDay("Week 7", "Agentic Test Generation", "Prompting AI agent to explore SaaS workflows, discover forms, and write specs", "AI-generated comprehensive test suite for e-commerce edge cases");
  pushDay("Week 7", "Self-Healing AI Workflows", "Diagnosing broken locators via AI healer agents, automated locator refactoring", "Self-healing test script surviving DOM attribute changes");
  pushDay("Week 7", "API Load Testing with k6", "Writing k6 load scripts in JavaScript, virtual users (VUs), duration, thresholds", "k6 test simulating 200 concurrent users against login & search APIs");
  pushDay("Week 7", "Stress & Spike Testing (k6)", "Ramping arrival rates, measuring p95/p99 latency, identifying API bottlenecks", "Performance summary report asserting p95 response time < 350ms");
  pushDay("Week 7", "Accessibility Testing (@axe-core)", "@axe-core/playwright integration, WCAG 2.1 AA audits, rule violations", "Automated a11y test failing on missing ARIA labels and color contrast issues");
  pushDay("Week 7", "UI Performance Auditing", "Playwright performance timing metrics, First Contentful Paint, Time to Interactive", "UI performance spec tracking core web vitals across page loads");

  pushDay("Week 8", "Selenium to Playwright Bridge", "Mapping Selenium Java (WebDriverWait, FindBy) to Playwright TS (Locators, Auto-wait)", "Comparative cheat sheet and dual-script demonstrating both syntaxes");
  pushDay("Week 8", "DSA for SDETs (Strings & Arrays)", "Two-pointer, sliding window, character frequency map, anagrams, substring search", "Clean TS solutions for top 15 SDET coding round algorithm questions");
  pushDay("Week 8", "DSA for SDETs (HashMaps & Objects)", "LRU cache concept, grouping API responses, finding duplicates, nested object traversal", "Deep object comparison and response diffing algorithm implementation");
  pushDay("Week 8", "Framework Design Defense", "Whiteboard framework design: folder structure, reporting, retry, multi-tenant auth", "High-level architecture diagram and design explanation document");
  pushDay("Week 8", "Project 1 Showcase (OrangeHRM)", "Polishing repo: clean code, linting, README, architecture badges, storage state", "Complete GitHub repository with CI status badges for Project 1");
  pushDay("Week 8", "Project 2 & 3 Showcase", "Conduit Hybrid API+UI repo + Restful-Booker BDD repo with live GitHub Pages report", "Portfolio featuring Contract, API, UI, and BDD test suites");
  pushDay("Week 8", "16 LPA Mock Interview & Pitch", "Resume framing: 2 YOE positioned with senior SDET architectural depth, mock interview", "Ready-to-deploy resume and narrative answering 'Tell me about your framework'");
  pushDay("Week 8", "Production Synthetic Canary Monitoring", "Headless synthetic smoke health-checks running on cron schedules, post-deployment canary gates", "GitHub Actions workflow configured with cron schedule executing critical production smoke flows", true);

  return days;
}

const days = buildSdetDays();

const pythonDays = [
  ["Week 1","Day 1","Python Basics","Learn Python syntax, variables, numbers, strings, lists, and comments","Build a small script that prints a user profile and basic arithmetic"],
  ["Week 1","Day 2","Input & Output","Use input(), print formatting, f-strings, and basic debugging techniques","Create a script that takes a name and prints a formatted greeting"],
  ["Week 1","Day 3","Conditionals","If/elif/else, comparison operators, boolean logic, and nested conditions","Write a quiz score evaluator and password checker"],
  ["Week 1","Day 4","Loops","For loops, while loops, range(), break, continue, and list iteration","Generate tables, email lists, and simple number patterns"],
  ["Week 1","Day 5","Functions","Define functions, parameters, return values, and default arguments","Build a calculator with reusable functions"],
  ["Week 1","Day 6","Lists & Tuples","Manipulating collections, indexing, slicing, and tuple immutability","Practice list sorting, filtering, and tuple unpacking"],
  ["Week 1","Day 7","Dictionaries & Sets","Dictionary keys, values, loops, and set operations","Create a student record manager and unique word counter"],
  ["Week 2","Day 8","String Methods","strip(), split(), join(), replace(), and case conversion","Build a name-cleaning and text-analysis utility"],
  ["Week 2","Day 9","List Comprehensions","Understand concise collection creation and filtering logic","Create compact solutions for even numbers and word lists"],
  ["Week 2","Day 10","Exception Handling","Try/except/finally, raising errors, and validation","Handle invalid user input for a login or calculator script"],
  ["Week 2","Day 11","File Handling","Read and write text files, open modes, and path usage","Store notes and export a report file"],
  ["Week 2","Day 12","Modules & Packages","Importing built-in modules and organizing code into reusable files","Use datetime, random, math, and os modules in a mini app"],
  ["Week 2","Day 13","Virtual Environments","Create isolated Python environments and install packages","Set up a working env for a small automation script"],
  ["Week 2","Day 14","Project: Mini To-Do App","Combine variables, functions, loops, and file writing into one app","Build a working command-line task tracker"],
  ["Week 3","Day 15","OOP Basics","Classes, objects, attributes, and methods","Create a User and Product model for a small catalog"],
  ["Week 3","Day 16","Constructors & Encapsulation","__init__, instance state, and access control basics","Design a BankAccount or Student class"],
  ["Week 3","Day 17","Inheritance","Subclassing, method overriding, and parent-child relationships","Create Employee and Manager classes"],
  ["Week 3","Day 18","Polymorphism","Method overloading patterns and interface-like behavior","Model different payment types with shared methods"],
  ["Week 3","Day 19","Class Methods & Static Methods","When to use @classmethod and @staticmethod","Build utility classes for formatting and validation"],
  ["Week 3","Day 20","Special Methods","__str__, __repr__, __len__, comparison methods","Improve debugging and output for custom Python objects"],
  ["Week 3","Day 21","Project: Expense Tracker","Use OOP to manage categories, totals, and spending reports","Create an expense manager with class-based records"],
  ["Week 4","Day 22","Advanced Functions","Nested functions, closures, lambda expressions, and higher-order functions","Map, filter, and reduce patterns for data processing"],
  ["Week 4","Day 23","Decorators","Function wrappers, logging, and reusable execution wrappers","Track execution time for a data-processing script"],
  ["Week 4","Day 24","Iterators & Generators","Yield-based lazy iteration and custom iteration logic","Generate infinite or filtered sequences for large data"],
  ["Week 4","Day 25","Comprehensions & Generators","Deepen list/dict/set comprehension understanding","Transform data into a cleaned dataset efficiently"],
  ["Week 4","Day 26","Regular Expressions","match, search, groups, and pattern validation","Validate email addresses, phone numbers, and IDs"],
  ["Week 4","Day 27","Date & Time","datetime, timezone basics, date arithmetic, and formatting","Build a reminder app or countdown script"],
  ["Week 4","Day 28","Project: Contact Book","Combine regex, file IO, and data validation into a reusable app","Create a command-line contact manager with search features"],
  ["Week 5","Day 29","SQL Fundamentals","CRUD, tables, queries, joins, and filtering data","Practice querying employee and sales records"],
  ["Week 5","Day 30","Python with SQLite","sqlite3 database connection, create tables, and execute queries","Store user records in a local SQLite database"],
  ["Week 5","Day 31","Pandas Basics","Series, DataFrame, selection, filtering, and transformations","Read CSV data and summarize key insights"],
  ["Week 5","Day 32","Data Cleaning","Missing entries, duplicate handling, type conversion, and normalization","Clean a messy employee dataset for analysis"],
  ["Week 5","Day 33","Visualization Basics","Matplotlib fundamentals and plotting trends","Plot sales or student performance charts"],
  ["Week 5","Day 34","JSON & APIs","Parse JSON, call simple REST APIs, and handle responses","Fetch weather or public API data and log the result"],
  ["Week 5","Day 35","Project: Data Analysis Script","Process raw data into summary tables and charts","Build a script that reads CSV and exports a summary report"],
  ["Week 6","Day 36","Web Scraping Basics","requests, HTML parsing, and safe scraping practices","Scrape a small public webpage and extract article links"],
  ["Week 6","Day 37","HTTP & REST Concepts","HTTP methods, responses, status codes, and JSON payloads","Understand how Python interacts with modern web services"],
  ["Week 6","Day 38","FastAPI Intro","Create simple endpoints, request models, and response models","Build a tiny API with GET and POST routes"],
  ["Week 6","Day 39","FastAPI Validation","Query params, path params, validation rules, and error handling","Validate API requests and return clean responses"],
  ["Week 6","Day 40","Authentication Basics","Bearer tokens, simple auth patterns, and session concepts","Create a mock login flow with protected endpoints"],
  ["Week 6","Day 41","Testing in Python","unittest and pytest basics, writing assertions, and test organization","Write tests for a small calculator or API project"],
  ["Week 6","Day 42","Project: Small API Service","Build a secure mini API with routes, validation, and tests","Create a student or product service with clean endpoints"],
  ["Week 7","Day 43","Automation with Python","Scripting for browser and system automation","Automate file organization or repetitive tasks"],
  ["Week 7","Day 44","Selenium Basics","Browser automation, locating elements, and common actions","Open a page and automate a login flow"],
  ["Week 7","Day 45","Automation Best Practices","Waits, reusable functions, robust selectors, and error handling","Build a stable browser automation workflow"],
  ["Week 7","Day 46","CI/CD for Python","Run tests in a command-line pipeline and automate checks","Set up a GitHub workflow to run pytest"],
  ["Week 7","Day 47","Docker for Python","Containerize a Python app and run it consistently","Create a Dockerfile for a Flask or FastAPI service"],
  ["Week 7","Day 48","Project: Automation Script","Use Python to automate a practical end-to-end workflow","Generate reports, rename files, or submit forms"],
  ["Week 8","Day 49","Python Portfolio Project","Combine API, database, and OOP into a final project","Create a learning tracker or task dashboard"],
  ["Week 8","Day 50","Code Quality & Linting","Black, flake8, and formatting standards","Format and clean a Python project for production"],
  ["Week 8","Day 51","Packaging & CLI","Setuptools, entry points, and command-line tools","Package a script to run from the terminal"],
  ["Week 8","Day 52","Performance & Optimization","Profiling, optimizing loops, and improving efficiency","Measure and improve a slow data-processing script"],
  ["Week 8","Day 53","Concurrency Basics","Threading and multiprocessing fundamentals","Compare simple parallel tasks in Python"],
  ["Week 8","Day 54","Async Programming","async/await, coroutines, and I/O optimization","Build an async fetcher for multiple API calls"],
  ["Week 8","Day 55","Interview Preparation","Python coding patterns, DSA basics, and problem solving","Solve array, string, and dictionary interview questions"],
  ["Week 8","Day 56","Final Python Showcase","Review project, explain growth, and share portfolio work","Present your final Python project and learning summary"]
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

function getCurrentPassword() {
  return localStorage.getItem('currentPassword') || '';
}

function isAuthorizedSdetUser() {
  return getCurrentUser() === 'Anusha' && getCurrentPassword() === 'Anusha';
}

function makeCredentialKey(value) {
  return String(value || 'guest').trim().replace(/\s+/g, '_').toLowerCase();
}

function getUserStorageKey(prefix) {
  const user = getCurrentUser();
  const password = getCurrentPassword();
  const credential = user && password ? `${makeCredentialKey(user)}_${makeCredentialKey(password)}` : `${makeCredentialKey(user)}_guest`;
  return user ? `${prefix}_${credential}` : `${prefix}_guest`;
}

function getProfileStorageKey() {
  return getUserStorageKey('profile');
}

function normalizeProfile(profile = {}) {
  const safeProfile = { ...profile };
  const currentUser = getCurrentUser();

  if (!safeProfile.name) {
    safeProfile.name = currentUser || safeProfile.username || '';
  }

  if (!safeProfile.username) {
    safeProfile.username = currentUser || safeProfile.name || '';
  }

  return safeProfile;
}

function loadProfile() {
  try {
    const storedProfile = JSON.parse(localStorage.getItem(getProfileStorageKey()) || '{}');
    return normalizeProfile(storedProfile);
  } catch {
    return normalizeProfile({});
  }
}

function saveProfile(profile) {
  const mergedProfile = normalizeProfile({ ...loadProfile(), ...profile });
  localStorage.setItem(getProfileStorageKey(), JSON.stringify(mergedProfile));
}

function setProfileEditingState(isEditing) {
  const fields = [
    document.getElementById('profile-name'),
    document.getElementById('profile-username'),
    document.getElementById('profile-role'),
    document.getElementById('profile-email'),
    document.getElementById('profile-focus'),
    document.getElementById('profile-bio')
  ];

  fields.forEach(field => {
    if (!field) return;
    field.disabled = !isEditing;
    field.readOnly = !isEditing;
  });

  const saveBtn = document.getElementById('save-profile-btn');
  const formEditBtn = document.getElementById('profile-form-edit-btn');

  if (saveBtn) {
    saveBtn.style.display = isEditing ? 'inline-block' : 'none';
  }

  if (formEditBtn) {
    formEditBtn.style.display = isEditing ? 'none' : 'inline-block';
  }
}

function getProfileInitials(profileName) {
  if (!profileName) return 'U';
  const parts = profileName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
}

function updateProfileChip() {
  const profile = loadProfile();
  const displayName = profile.name || profile.username || getCurrentUser() || 'Profile';
  const avatar = document.getElementById('profile-avatar');
  const chipName = document.getElementById('profile-chip-name');

  if (avatar) avatar.textContent = getProfileInitials(displayName);
  if (chipName) chipName.textContent = displayName;

  const avatarLarge = document.getElementById('profile-avatar-large');
  const detailName = document.getElementById('profile-detail-name');
  if (avatarLarge) avatarLarge.textContent = getProfileInitials(displayName);
  if (detailName) detailName.textContent = displayName;

  const detailUsername = document.getElementById('profile-detail-username');
  const detailRole = document.getElementById('profile-detail-role');
  const detailEmail = document.getElementById('profile-detail-email');
  const detailFocus = document.getElementById('profile-detail-focus');
  const detailBio = document.getElementById('profile-detail-bio');

  if (detailUsername) detailUsername.textContent = profile.username || profile.name || getCurrentUser() || '-';
  if (detailRole) detailRole.textContent = profile.role || '-';
  if (detailEmail) detailEmail.textContent = profile.email || '-';
  if (detailFocus) detailFocus.textContent = profile.focus || '-';
  if (detailBio) detailBio.textContent = profile.bio || '-';
}

function showDashboard() {
  const dashboardView = document.getElementById('dashboard-view');
  const profileFormCard = document.getElementById('profile-form-card');
  const profileDetailsPage = document.getElementById('profile-details-page');

  if (dashboardView) dashboardView.style.display = 'block';
  if (profileFormCard) profileFormCard.style.display = 'none';
  if (profileDetailsPage) profileDetailsPage.style.display = 'none';
}

function showProfilePage() {
  const dashboardView = document.getElementById('dashboard-view');
  const profileFormCard = document.getElementById('profile-form-card');
  const profileDetailsPage = document.getElementById('profile-details-page');

  if (dashboardView) dashboardView.style.display = 'none';
  if (profileFormCard) profileFormCard.style.display = 'none';
  if (profileDetailsPage) profileDetailsPage.style.display = 'block';

  updateProfileChip();
}

function showProfileEditor() {
  const dashboardView = document.getElementById('dashboard-view');
  const profileFormCard = document.getElementById('profile-form-card');
  const profileDetailsPage = document.getElementById('profile-details-page');

  if (dashboardView) dashboardView.style.display = 'none';
  if (profileFormCard) profileFormCard.style.display = 'block';
  if (profileDetailsPage) profileDetailsPage.style.display = 'none';

  const profile = loadProfile();
  document.getElementById('profile-username').value = profile.username || getCurrentUser() || '';
  document.getElementById('profile-name').value = profile.name || profile.username || getCurrentUser() || '';
  document.getElementById('profile-role').value = profile.role || '';
  document.getElementById('profile-email').value = profile.email || '';
  document.getElementById('profile-focus').value = profile.focus || '';
  document.getElementById('profile-bio').value = profile.bio || '';

  setProfileEditingState(true);
}

function renderProfileForm() {
  const profile = loadProfile();
  document.getElementById('profile-username').value = profile.username || getCurrentUser() || '';
  document.getElementById('profile-name').value = profile.name || profile.username || getCurrentUser() || '';
  document.getElementById('profile-role').value = profile.role || '';
  document.getElementById('profile-email').value = profile.email || '';
  document.getElementById('profile-focus').value = profile.focus || '';
  document.getElementById('profile-bio').value = profile.bio || '';

  showDashboard();
}

function saveProfileForm() {
  const profile = {
    username: document.getElementById('profile-username').value.trim(),
    name: document.getElementById('profile-name').value.trim(),
    role: document.getElementById('profile-role').value.trim(),
    email: document.getElementById('profile-email').value.trim(),
    focus: document.getElementById('profile-focus').value.trim(),
    bio: document.getElementById('profile-bio').value.trim()
  };

  saveProfile(profile);
  setProfileEditingState(false);
  showProfilePage();
  alert('Profile saved successfully.');
}

function enableProfileEdit() {
  showProfileEditor();
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

function getMyCustomCourses() {
  try {
    return JSON.parse(localStorage.getItem('my_custom_courses') || '[]');
  } catch {
    return [];
  }
}

function saveMyCustomCourses(courses) {
  localStorage.setItem('my_custom_courses', JSON.stringify(courses));
}


function inferCourseCategory(topicName) {
  const lowerName = topicName.toLowerCase();
  if (lowerName.includes('python')) return 'Programming';
  if (lowerName.includes('sql') || lowerName.includes('database')) return 'Data';
  if (lowerName.includes('cloud') || lowerName.includes('aws') || lowerName.includes('azure') || lowerName.includes('devops')) return 'Cloud & DevOps';
  if (lowerName.includes('security') || lowerName.includes('cyber')) return 'Security';
  if (lowerName.includes('ai') || lowerName.includes('ml')) return 'AI & Automation';
  if (lowerName.includes('api')) return 'API Engineering';
  return 'Technology';
}

function buildOfflineCourseTemplate(topicName) {
  const safeName = (topicName || 'New Skill').trim() || 'New Skill';
  const formattedName = safeName
    .split(/\s+/)
    .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : '')
    .join(' ');

  return {
    id: `course_${Date.now()}`,
    title: `${formattedName} Mastery (Zero to Pro)`,
    category: inferCourseCategory(safeName),
    modules: [
      { phase: 'Week 1: Fundamentals', day: 'Day 1', topic: `Intro to ${formattedName} foundations`, objective: 'Understand the foundations and learning goals for this skill.', codeDeliverable: `Create a personal learning checklist for ${formattedName}.` },
      { phase: 'Week 1: Fundamentals', day: 'Day 2', topic: `Core concepts and terminology in ${formattedName}`, objective: 'Learn the vocabulary and core ideas behind the subject.', codeDeliverable: 'Write a 1-page concept summary and glossary.' },
      { phase: 'Week 1: Fundamentals', day: 'Day 3', topic: `Hands-on practice with the basics`, objective: 'Build repetition with simple exercises and first steps.', codeDeliverable: 'Build a small exercise file with 5 practical examples.' },
      { phase: 'Week 1: Fundamentals', day: 'Day 4', topic: `Working with real inputs and data`, objective: 'Practice using realistic inputs and validate outputs.', codeDeliverable: 'Run a mini example and log the results for review.' },
      { phase: 'Week 2: Build Confidence', day: 'Day 5', topic: `Create your first small project in ${formattedName}`, objective: 'Turn theory into a mini project with a clear outcome.', codeDeliverable: 'Ship a simple project with a clean output and explanation.' },
      { phase: 'Week 2: Build Confidence', day: 'Day 6', topic: 'Debugging and troubleshooting workflow', objective: 'Learn how to find and fix issues systematically.', codeDeliverable: 'Document 5 common errors and their fixes.' },
      { phase: 'Week 2: Build Confidence', day: 'Day 7', topic: 'Best practices for maintainable code', objective: 'Improve structure, readability, and reuse.', codeDeliverable: 'Refactor one project using cleaner structure and naming.' },
      { phase: 'Week 3: Advanced Practice', day: 'Day 8', topic: 'Intermediate patterns and reusable logic', objective: 'Apply reusable patterns to real problems.', codeDeliverable: 'Create reusable helper functions or modules.' },
      { phase: 'Week 3: Advanced Practice', day: 'Day 9', topic: 'Testing, validation, and improvement', objective: 'Verify output and refine weak areas.', codeDeliverable: 'Validate outputs with a small test checklist.' },
      { phase: 'Week 3: Advanced Practice', day: 'Day 10', topic: 'Launch a polished zero-to-pro project', objective: 'Present and polish a real-world learning artifact.', codeDeliverable: 'Present a final mini project and learning roadmap.' }
    ]
  };
}

function normalizeCourseModules(modules) {
  const safeModules = Array.isArray(modules) ? modules : [];
  return safeModules.map((module, index) => ({
    phase: module?.phase || `Week ${Math.ceil((index + 1) / 3)}: Practice`,
    day: module?.day || `Day ${index + 1}`,
    topic: module?.topic || module?.Topic || `Module ${index + 1}`,
    objective: module?.objective || module?.Objective || 'Complete the learning objective for this module.',
    codeDeliverable: module?.codeDeliverable || module?.['Code Deliverable'] || module?.deliverable || module?.Deliverable || 'Build a small practical code artifact.'
  }));
}

function normalizeGeneratedCourseData(courseData) {
  const fallback = buildOfflineCourseTemplate('New Skill');
  const source = courseData || fallback;
  const title = (source.title || source.courseTitle || 'New Skill').trim() || 'New Skill';
  const modules = normalizeCourseModules(source.modules || source.courseModules || []);

  return {
    id: String(source.id || `course_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`),
    title,
    category: source.category || 'Technology',
    modules: modules.length ? modules : fallback.modules
  };
}

function saveGeneratedCourse(courseData) {
  const course = normalizeGeneratedCourseData(courseData || buildOfflineCourseTemplate('New Skill'));
  const courseName = (course.title || 'New Skill').trim() || 'New Skill';

  const storedCourses = getMyCustomCourses();
  const existingIndex = storedCourses.findIndex(item => String(item.title || item.courseTitle || '').toLowerCase() === courseName.toLowerCase());
  if (existingIndex === -1) {
    storedCourses.push(course);
  } else {
    storedCourses[existingIndex] = course;
  }
  saveMyCustomCourses(storedCourses);

  const customSkill = {
    id: course.id,
    name: courseName,
    subtitle: `${course.category || 'Technology'} roadmap generated for your learning plan`,
    topics: Array.isArray(course.modules) ? course.modules.map(module => module.topic || module.day || 'Custom topic') : ['Foundation', 'Practice', 'Project'],
    source: 'ai-generated',
    courseMeta: course
  };

  const currentSkills = getCustomSkills();
  const existingSkillIndex = currentSkills.findIndex(skill => String(skill.name || '').toLowerCase() === courseName.toLowerCase());
  if (existingSkillIndex === -1) {
    currentSkills.push(customSkill);
    saveCustomSkills(currentSkills);
  } else {
    currentSkills[existingSkillIndex] = customSkill;
    saveCustomSkills(currentSkills);
  }

  return customSkill;
}

async function generateSyllabusWithGemini(topicName) {
  const cleanTopic = (topicName || '').trim();
  if (!cleanTopic) {
    throw new Error('Please enter a skill name before generating the syllabus.');
  }

  const response = await fetch('/api/generate-course', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ topicName: cleanTopic })
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || 'The course generator is unavailable right now.');
  }

  const payload = await response.json();
  return normalizeGeneratedCourseData(payload);
}

async function handleAddNewCourse() {
  const input = document.getElementById('custom-skill-name');
  const topicName = (input ? input.value : '').trim();
  const addButton = document.getElementById('add-custom-skill-btn');

  if (!topicName) {
    alert('Please enter a skill name to continue.');
    return;
  }

  const normalizedTopic = topicName.toLowerCase();
  const builtInMatch = learningPaths.find(path =>
    path.name.toLowerCase() === normalizedTopic || path.id.toLowerCase() === normalizedTopic
  );

  if (builtInMatch) {
    if (builtInMatch.id === 'sdet') {
      currentLearningPath = 'sdet';
      showPage('sdet');
      renderCards();
      return;
    }

    if (builtInMatch.id === 'python') {
      currentLearningPath = 'python';
      showPage('python');
      renderCards();
      return;
    }
  }

  const allExistingCourses = [...getCustomSkills(), ...getMyCustomCourses()].map(course => (course.name || course.title || '').toLowerCase());
  const duplicateCustomSkill = allExistingCourses.some(name => name === normalizedTopic);

  if (duplicateCustomSkill) {
    alert('This custom skill already exists in your list.');
    return;
  }

  if (addButton) {
    addButton.disabled = true;
    addButton.textContent = 'Generating curriculum with AI...';
  }

  try {
    let generatedCourse = null;

    try {
      generatedCourse = await generateSyllabusWithGemini(topicName);
    } catch (geminiError) {
      generatedCourse = buildOfflineCourseTemplate(topicName);
    }

    saveGeneratedCourse(generatedCourse);
    input.value = '';
    renderPlanPageButtons();
    renderLearningPaths();
    currentLearningPath = String(generatedCourse.id);
    showPage(currentLearningPath);
    renderCards();
  } finally {
    if (addButton) {
      addButton.disabled = false;
      addButton.textContent = 'Add Skill';
    }
  }
}

function getUserStorageValue(prefix, index) {
  return localStorage.getItem(`${prefix}_${getUserStorageKey(prefix).replace(`${prefix}_`, '')}_${index}`);
}

function setUserStorageValue(prefix, index, value) {
  localStorage.setItem(`${prefix}_${getUserStorageKey(prefix).replace(`${prefix}_`, '')}_${index}`, value);
}

function handleCreateAccount() {
  const usernameInput = document.getElementById('login-username');
  const passwordInput = document.getElementById('login-password');
  const name = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!name || !password) {
    alert('Please enter both your user name and password to create your account.');
    return;
  }

  const profiles = getUserProfiles();
  const existingProfile = profiles[name];

  if (existingProfile) {
    alert('This user name already exists. Please log in using the same password or choose another user name.');
    return;
  }

  if (name === 'Anusha' && password === 'Anusha') {
    profiles[name] = {
      createdAt: Date.now(),
      password,
      startedWithDemo: false,
      canAccessSdet: true
    };
  } else {
    profiles[name] = {
      createdAt: Date.now(),
      password,
      startedWithDemo: false,
      canAccessSdet: false
    };
  }

  saveUserProfiles(profiles);

  localStorage.setItem('currentUser', name);
  localStorage.setItem('currentPassword', password);
  usernameInput.value = '';
  passwordInput.value = '';
  showApp();
}

function handleLogin() {
  const usernameInput = document.getElementById('login-username');
  const passwordInput = document.getElementById('login-password');
  const name = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!name || !password) {
    alert('Please enter both your user name and password to continue.');
    return;
  }

  const profiles = getUserProfiles();
  const existingProfile = profiles[name];

  if (!existingProfile) {
    alert('No account found for this user name. Please create your account first.');
    return;
  }

  if (existingProfile.password !== password) {
    alert('Incorrect password for this user. Please try again.');
    return;
  }

  if (!(name === 'Anusha' && password === 'Anusha')) {
    localStorage.setItem('currentUser', name);
    localStorage.setItem('currentPassword', password);
    usernameInput.value = '';
    passwordInput.value = '';
    showApp();
    return;
  }

  localStorage.setItem('currentUser', name);
  localStorage.setItem('currentPassword', password);
  usernameInput.value = '';
  passwordInput.value = '';
  showApp();
}

function handleLogout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentPassword');
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
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

  const sdetButton = document.getElementById('page-sdet-btn');
  if (sdetButton) {
    sdetButton.style.display = isAuthorizedSdetUser() ? 'inline-block' : 'none';
  }

  const userKey = `${makeCredentialKey(getCurrentUser())}_${makeCredentialKey(getCurrentPassword())}`;
  const hasSavedPlan = Object.keys(localStorage).some(key => key.startsWith('track_') && key.includes(userKey));

  if (isAuthorizedSdetUser()) {
    showPage(hasSavedPlan ? 'sdet' : 'choose');
  } else {
    showPage('choose');
  }

  renderProfileForm();
  renderPlanPageButtons();
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
  const builtInNames = learningPaths.map(path => path.name.toLowerCase());
  const alreadyExists = [...current, ...learningPaths].some(skill =>
    (skill.name || skill.id || '').toString().toLowerCase() === name.toLowerCase()
  );

  if (alreadyExists) {
    alert('This skill already exists in the learning topics list.');
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
  const matchingSkill = getCustomSkills().find(item => String(item.id) === String(skillId));
  const matchingCourse = getMyCustomCourses().find(item => String(item.id) === String(skillId));
  const skillTitle = matchingSkill?.name || matchingCourse?.title || 'this skill';

  if (!matchingSkill && !matchingCourse) return;

  const confirmed = window.confirm(
    `Are you sure you want to delete the skill "${skillTitle}"? This action cannot be undone.`
  );

  if (!confirmed) return;

  const updatedSkills = getCustomSkills().filter(item => String(item.id) !== String(skillId));
  saveCustomSkills(updatedSkills);

  const updatedCourses = getMyCustomCourses().filter(item => String(item.id) !== String(skillId));
  saveMyCustomCourses(updatedCourses);

  if (String(currentLearningPath) === String(skillId)) {
    currentLearningPath = 'choose';
    showPage('choose');
  }

  renderPlanPageButtons();
  renderLearningPaths();
}

function renderLearningPaths() {
  const container = document.getElementById('learning-paths-container');
  if (!container) return;

  container.style.display = 'grid';

  const customSkills = getCustomSkills();
  const generatedCourses = getMyCustomCourses().map(course => ({
    id: String(course.id || course.title || Date.now()),
    name: course.title || 'Custom Course',
    subtitle: `${course.category || 'Technology'} roadmap generated for your learning plan`,
    topics: Array.isArray(course.modules) ? course.modules.map(module => module.topic || module.day || 'Custom topic') : ['Foundation', 'Practice', 'Project'],
    courseMeta: course
  }));

  const seen = new Set();
  const allPaths = [...learningPaths, ...customSkills, ...generatedCourses].filter(path => {
    const key = (path.name || path.id || '').toString().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  renderPlanPageButtons();

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
          <button class="choose-path-btn" data-path="${path.id}">${path.id === 'sdet' ? 'Open SDET Plan' : path.id === 'python' ? 'Open Python Plan' : 'Choose This Path'}</button>
          ${isCustomSkill ? `<button class="delete-custom-skill-btn" data-skill-id="${path.id}">Delete</button>` : ''}
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.choose-path-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pathId = btn.getAttribute('data-path');
      if (pathId === 'sdet') {
        currentLearningPath = 'sdet';
        showPage('sdet');
        renderCards();
      } else if (pathId === 'python') {
        currentLearningPath = 'python';
        showPage('python');
        renderCards();
      } else {
        const matchingCourse = getMyCustomCourses().find(course => String(course.id) === String(pathId));
        if (matchingCourse) {
          currentLearningPath = String(pathId);
          showPage(currentLearningPath);
          renderCards();
          return;
        }

        const matchingSkill = getCustomSkills().find(skill => String(skill.id) === String(pathId));
        if (matchingSkill && matchingSkill.courseMeta) {
          currentLearningPath = String(pathId);
          showPage(currentLearningPath);
          renderCards();
          return;
        }

        alert('This custom skill path is ready for future setup.');
      }
    });
  });

  document.querySelectorAll('.delete-custom-skill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      deleteCustomSkill(btn.getAttribute('data-skill-id'));
    });
  });
}

function getSelectedLearningDays() {
  const customCourse = getMyCustomCourses().find(course => String(course.id) === String(currentLearningPath));
  if (customCourse) {
    return normalizeCourseModules(customCourse.modules).map(module => [module.phase, module.day, module.topic, module.objective, module.codeDeliverable]);
  }

  const customSkill = getCustomSkills().find(skill => String(skill.id) === String(currentLearningPath));
  if (customSkill && customSkill.courseMeta) {
    return normalizeCourseModules(customSkill.courseMeta.modules).map(module => [module.phase, module.day, module.topic, module.objective, module.codeDeliverable]);
  }

  return currentLearningPath === 'python' ? pythonDays : days;
}

function getRowStorageIndex(row, index) {
  if (row && row.legacyIndex !== undefined && row.legacyIndex !== null) {
    return Number(row.legacyIndex);
  }
  return index;
}

function buildDynamicFilterOptions(isPython) {
  const select = document.getElementById(isPython ? 'python-week-filter' : 'week-filter');
  if (!select) return;

  const selectedDays = getSelectedLearningDays();
  const labels = [];
  const seen = new Set();

  selectedDays.forEach(row => {
    const phase = String(row[0] || '').trim();
    const day = String(row[1] || '').trim();
    const combinedLabel = phase && day ? `${phase} • ${day}` : (phase || day || 'Learning Module');

    if (!seen.has(combinedLabel)) {
      seen.add(combinedLabel);
      labels.push(combinedLabel);
    }
  });

  const previousValue = select.value;
  select.innerHTML = `<option value="all">All Learning Modules</option>${labels.map(label => `<option value="${label}">${label}</option>`).join('')}`;
  select.value = labels.includes(previousValue) ? previousValue : 'all';
}

function renderCards() {
  const isPython = currentLearningPath === 'python';
  const containerId = isPython ? 'python-cards-container' : 'cards-container';
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  buildDynamicFilterOptions(isPython);

  const wVal = document.getElementById(isPython ? 'python-week-filter' : 'week-filter').value;
  const sVal = document.getElementById(isPython ? 'python-status-filter' : 'status-filter').value;
  const selectedDays = getSelectedLearningDays();

  selectedDays.forEach((row, i) => {
    const storageIndex = getRowStorageIndex(row, i);
    const status = getUserStorageValue(`track_${currentLearningPath}`, storageIndex) || 'Not Started';
    const note = getUserStorageValue(`note_${currentLearningPath}`, storageIndex) || '';
    const phaseText = String(row[0] || '').trim();
    const dayText = String(row[1] || '').trim();
    const phaseDayText = phaseText && dayText ? `${phaseText} • ${dayText}` : (phaseText || dayText || 'Learning Module');

    if (wVal !== 'all' && wVal !== phaseText && wVal !== phaseDayText) return;
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
      setUserStorageValue(`note_${currentLearningPath}`, storageIndex, noteField.value);
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
  const selectedDays = getSelectedLearningDays();
  const row = selectedDays[i];
  const storageIndex = getRowStorageIndex(row, i);
  setUserStorageValue(`track_${currentLearningPath}`, storageIndex, val);
  renderCards();
}

function updateStats() {
  const selectedDays = getSelectedLearningDays();
  let done = 0;
  selectedDays.forEach((row, i) => {
    const storageIndex = getRowStorageIndex(row, i);
    if ((getUserStorageValue(`track_${currentLearningPath}`, storageIndex) || 'Not Started') === 'Completed') done++;
  });

  const pct = Math.round((done / selectedDays.length) * 100);
  const statCount = document.getElementById('stat-count');
  const statPct = document.getElementById('stat-pct');
  const barFill = document.getElementById('bar-fill');

  if (statCount) statCount.innerText = `${done} of ${selectedDays.length} Completed`;
  if (statPct) statPct.innerText = pct + '%';
  if (barFill) barFill.style.width = pct + '%';
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

document.getElementById('add-custom-skill-btn').onclick = handleAddNewCourse;
document.getElementById('custom-skill-name').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleAddNewCourse();
  }
});
document.getElementById('create-account-btn').onclick = handleCreateAccount;
document.getElementById('login-btn').onclick = handleLogin;
document.getElementById('profile-logout-btn').onclick = handleLogout;
document.getElementById('save-profile-btn').onclick = saveProfileForm;
document.getElementById('profile-form-edit-btn').onclick = enableProfileEdit;
document.getElementById('profile-details-edit-btn').onclick = enableProfileEdit;
document.getElementById('back-to-dashboard-btn').onclick = showDashboard;
document.getElementById('profile-chip').onclick = () => {
  showProfilePage();
};
document.getElementById('page-choose-btn').onclick = () => {
  currentLearningPath = 'choose';
  showPage('choose');
};
document.getElementById('page-sdet-btn').onclick = () => {
  currentLearningPath = 'sdet';
  showPage('sdet');
};
document.getElementById('page-python-btn').onclick = () => {
  currentLearningPath = 'python';
  showPage('python');
};
document.getElementById('close-plan-btn').onclick = () => closeCurrentPlan();
document.getElementById('close-python-plan-btn').onclick = () => closeCurrentPlan();
document.getElementById('tab-daily-btn').onclick = () => showTab('daily');
document.getElementById('tab-projects-btn').onclick = () => showTab('projects');
document.getElementById('tab-matrix-btn').onclick = () => showTab('matrix');
document.getElementById('tab-python-daily-btn').onclick = () => showTab('daily');

let currentLearningPath = 'sdet';

function showSelectedPathCards() {
  if (document.getElementById('view-sdet')) {
    renderCards();
  }
}

document.getElementById('login-username').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleLogin();
  }
});

document.getElementById('login-password').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleLogin();
  }
});

function renderPlanPageButtons() {
  const switcher = document.querySelector('.page-switcher');
  if (!switcher) return;

  switcher.querySelectorAll('[data-dynamic-plan]').forEach(btn => btn.remove());

  const customCourses = getMyCustomCourses();
  customCourses.forEach((course, index) => {
    const customButton = document.createElement('button');
    const courseId = String(course.id);
    customButton.type = 'button';
    customButton.className = 'page-btn dynamic-plan-btn';
    customButton.dataset.dynamicPlan = 'true';
    customButton.dataset.planId = courseId;
    customButton.id = `page-custom-${courseId}`;
    customButton.textContent = `Page ${index + 4}: ${course.title || 'Custom Learning Plan'}`;
    customButton.onclick = () => {
      currentLearningPath = courseId;
      showPage(courseId);
    };
    switcher.appendChild(customButton);
  });
}

function setPlanButtonsVisible(activePage) {
  const pageChooseBtn = document.getElementById('page-choose-btn');
  const pageSdetBtn = document.getElementById('page-sdet-btn');
  const pagePythonBtn = document.getElementById('page-python-btn');
  const customButtons = document.querySelectorAll('[data-dynamic-plan]');

  const activeCourse = getMyCustomCourses().find(course => String(course.id) === String(activePage)) || getCustomSkills().find(skill => String(skill.id) === String(activePage));
  const customTitle = activeCourse?.title || activeCourse?.name || '';

  if (pageChooseBtn) {
    pageChooseBtn.style.display = 'inline-block';
    pageChooseBtn.textContent = customTitle ? `Page 1: Learning Topics • ${customTitle}` : 'Page 1: Learning Topics';
  }

  if (pageSdetBtn) {
    pageSdetBtn.style.display = activePage === 'sdet' && isAuthorizedSdetUser() ? 'inline-block' : 'none';
  }

  if (pagePythonBtn) {
    pagePythonBtn.style.display = activePage === 'python' ? 'inline-block' : 'none';
  }

  customButtons.forEach(btn => {
    const planId = btn.getAttribute('data-plan-id');
    btn.style.display = activePage === String(planId) ? 'inline-block' : 'none';
  });
}

function showPage(name) {
  const isCustomCoursePath = !!name && name !== 'choose' && name !== 'sdet' && name !== 'python';
  currentLearningPath = String(name);

  if (name === 'sdet' && !isAuthorizedSdetUser()) {
    alert('Access denied. Only the Anusha account can view the SDET Learning Plan.');
    currentLearningPath = 'choose';
    name = 'choose';
  }

  const chooseView = document.getElementById('view-choose');
  const sdetView = document.getElementById('view-sdet');
  const pythonView = document.getElementById('view-python');

  if (chooseView) chooseView.style.display = name === 'choose' ? 'block' : 'none';
  if (sdetView) sdetView.style.display = name === 'sdet' || isCustomCoursePath ? 'block' : 'none';
  if (pythonView) pythonView.style.display = name === 'python' ? 'block' : 'none';

  const pageChooseBtn = document.getElementById('page-choose-btn');
  const pageSdetBtn = document.getElementById('page-sdet-btn');
  const pagePythonBtn = document.getElementById('page-python-btn');
  const customButtons = document.querySelectorAll('[data-dynamic-plan]');

  if (pageChooseBtn) pageChooseBtn.classList.toggle('active', name === 'choose');
  if (pageSdetBtn) pageSdetBtn.classList.toggle('active', name === 'sdet');
  if (pagePythonBtn) pagePythonBtn.classList.toggle('active', name === 'python');
  customButtons.forEach(btn => {
    btn.classList.toggle('active', String(btn.getAttribute('data-plan-id')) === String(name));
  });

  if (name === 'choose') {
    setPlanButtonsVisible('choose');
  } else if (name === 'sdet' || name === 'python' || isCustomCoursePath) {
    setPlanButtonsVisible(name);
    renderCards();
    showTab('daily');
  }
}

function closeCurrentPlan() {
  currentLearningPath = 'choose';
  const chooseView = document.getElementById('view-choose');
  const sdetView = document.getElementById('view-sdet');
  const pythonView = document.getElementById('view-python');

  if (chooseView) chooseView.style.display = 'block';
  if (sdetView) sdetView.style.display = 'none';
  if (pythonView) pythonView.style.display = 'none';

  document.getElementById('page-choose-btn')?.classList.add('active');
  document.getElementById('page-sdet-btn')?.classList.remove('active');
  document.getElementById('page-python-btn')?.classList.remove('active');
  document.querySelectorAll('[data-dynamic-plan]').forEach(btn => btn.classList.remove('active'));
  setPlanButtonsVisible('choose');
}

function showTab(name) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

  if (currentLearningPath === 'python') {
    document.getElementById('tab-python-daily-btn')?.classList.add('active');
    return;
  }

  const dailyPanel = document.getElementById('daily-panel');
  const viewProjects = document.getElementById('view-projects');
  const viewMatrix = document.getElementById('view-matrix');

  if (dailyPanel) {
    dailyPanel.classList.toggle('active', name === 'daily');
    dailyPanel.style.display = name === 'daily' ? 'block' : 'none';
  }
  if (viewProjects) {
    viewProjects.classList.toggle('active', name === 'projects');
    viewProjects.style.display = name === 'projects' ? 'block' : 'none';
  }
  if (viewMatrix) {
    viewMatrix.classList.toggle('active', name === 'matrix');
    viewMatrix.style.display = name === 'matrix' ? 'block' : 'none';
  }

  if (name === 'daily') {
    document.getElementById('tab-daily-btn').classList.add('active');
  } else if (name === 'projects') {
    document.getElementById('tab-projects-btn').classList.add('active');
  } else if (name === 'matrix') {
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
