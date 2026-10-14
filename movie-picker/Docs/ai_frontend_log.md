AI Task Log
Task: [e.g., TASK-01: Health-check display]

Date: [YYYY-MM-DD] | Developer: [Student Name]

1. Goal & Requirements
Goal: [What are you building or fixing?]

Done When:

[ ] [Requirement 1]

[ ] [Requirement 2]

2. AI Prompt & Output
Prompt Used:

"[Paste prompt here]"

AI Output Summary:

[Brief summary of code or advice provided by AI]

3. Human Changes & Fixes
What I Changed/Fixed:

[e.g., Corrected file location, added error handling, or fixed build flag]

4. Testing & Accessibility (a11y)
[ ] Build: Runs locally without errors (npm run dev).

[ ] Integration: Front-end and back-end communicate properly.

[ ] Keyboard & Semantics: Accessible via Tab key and uses standard HTML tags (<main>, <button>).

[ ] Visuals & Contrast: Readable text contrast and responsive on mobile/desktop.

5. Reflection
What I Learned: [Key takeaway]

Next Steps: [What to work on next]

Task: TASK-01: Connect Next.js Front-End to Flask Back-End

Date: 2026-10-15 | Developer: [Your Name]

1. Goal & Requirements
Goal: Verify front-end to back-end connectivity by fetching data from Flask /api/health and displaying it on the Next.js home page.

Done When:

[x] Flask /api/health endpoint serves JSON with CORS enabled.

[x] Next.js page fetches and renders backend health status dynamically.

[x] Template committed in documentation for future front-end tasks.

2. AI Prompt & Output
Prompt Used:

"Set up front-end fetch for /api/health endpoint using NEXT_PUBLIC_API_URL environment variable."

AI Output Summary:

Provided TypeScript fetch code for App Router page.tsx and environment variable setup for .env.local.

3. Human Changes & Fixes
What I Changed/Fixed:

Swapped dev server flag to next dev --webpack to resolve native binary crash caused by OneDrive sync in node_modules.

Moved component code from layout.tsx into page.tsx.

Wrapped fetch call in a try/catch block to handle offline backend server states gracefully.

4. Testing & Accessibility (a11y)
[x] Build: App compiles and runs cleanly via npm run dev with Webpack.

[x] Integration: Front-end successfully receives and renders JSON payload from [http://127.0.0.1:5000/api/health](http://127.0.0.1:5000/api/health).

[x] Keyboard & Semantics: Used standard <main>, <h1>, and <p> tags.

[x] Visuals & Contrast: High contrast status text (green for connected, red for error).

5. Reflection
What I Learned: How App Router server components fetch data, how NEXT_PUBLIC_ prefixes expose environment variables, and how OneDrive sync interferes with native Node.js binaries.

Next Steps: Use more Ai to brute force  
