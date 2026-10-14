| Criteria  | Supabase                 | Firebase / Firestore  | PocketBase           |
| :-------- | :----------------------- | :-------------------- | :------------------- |
| Database  | PostgreSQL (Relational)  | Firestore (NoSQL)     | SQLite (Relational)  |
| Free Tier | 500 MB DB / 1 GB Storage | 1 GB Storage          | 100% Free            |
| API       | Auto-generated REST      | Firebase Web/Node SDK | Auto-generated REST  |

Sources & Documentation
Supabase: supabase.com/docs

Firebase / Firestore: firebase.google.com/docs

PocketBase: pocketbase.io/docs

Recommendation for Movie Picker
1. Relational Data Fit
A movie picker application relies heavily on relational links (movies, genres, users, ratings, favorites).

Complex relational queries (e.g., "Find action movies rated above 8.0 that the user hasn't watched") are straightforward in SQL.

Doing this in NoSQL stores like Firestore requires duplicate data or multiple round-trip queries.

2. Full-Stack Ecosystem Support
Supabase offers official, well-supported SDKs for both Next.js (App Router) and Python.

Fits naturally with a decoupled frontend/backend architecture.

3. Portable Data & Skills
Powered by PostgreSQL, eliminating proprietary vendor lock-in.

Builds industry-standard SQL skills that transfer directly to future projects.