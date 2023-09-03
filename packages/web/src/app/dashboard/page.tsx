import Link from "next/link";
import { FC } from "react";
import RouteGuardWrapper from "../../HOC/RoutesGuardWrapper";

const Dashboard: FC = () => {
  return (
    <RouteGuardWrapper>
      <div>
        <h1>Dashboard</h1>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </RouteGuardWrapper>
  );
};

export default Dashboard;
