import Statistics from "../features/dashboard/components/Statistics";

export default function Dashboard() {
  return (
    <div className="mx-auto mt-5 flex h-11/12 w-8/12 max-w-screen flex-col overflow-x-auto rounded-xl border border-gray-300 shadow-sm lg:h-11/12 lg:w-10/12 lg:overflow-x-hidden">
      <Statistics />
    </div>
  );
}
