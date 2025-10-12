import Statistics from "../features/dashboard/components/Statistics";

export default function Dashboard() {
  return (
    <div className="relative mx-auto mt-5 flex h-120 w-11/12 max-w-screen flex-col overflow-x-auto rounded-xl shadow-sm lg:h-11/12 lg:w-10/12 lg:overflow-x-hidden lg:border lg:border-gray-300">
      <Statistics />
    </div>
  );
}
