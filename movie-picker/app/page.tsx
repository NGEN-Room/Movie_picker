async function getBackendHealth() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";
    const res = await fetch(`${apiUrl}/api/health`, { cache: "no-store" });

    if (!res.ok) {
      return { status: "error", message: `Server error (${res.status})` };
    }

    return await res.json();
  } catch (err) {
    return { status: "offline", message: "Could not reach Flask backend" };
  }
}

export default async function HomePage() {
  const healthData = await getBackendHealth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold">Movie Picker</h1>
      <p className="mt-4 text-lg text-gray-700">
        Backend Status:{" "}
        <span
          className={`font-semibold ${
            healthData.status === "healthy" ? "text-green-600" : "text-red-600"
          }`}
        >
          {healthData.message}
        </span>
      </p>
    </main>
  );
}
