import { useSelector } from "react-redux";

export default function Dashboard() {
  const accessToken = useSelector((state) => state.auth.accessToken);
  return <div>dashboard</div>;
}
