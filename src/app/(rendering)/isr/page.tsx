import getRandomNumber from "@/app/get-random-number";

export const revalidate = 5;

export default async function Page() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${getRandomNumber()}`
  );
  const data = await res.json();

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-xl">ISR</div>
      <div>Generated at {new Date().toISOString()}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
