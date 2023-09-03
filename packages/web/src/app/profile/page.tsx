import RouteGuardWrapper from "@/HOC/RoutesGuardWrapper";
import Link from "next/link";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <RouteGuardWrapper>
      <div>
        <h1>Profile</h1>
        <Link href="/dashboard">Dasboard</Link>
      </div>
    </RouteGuardWrapper>
  );
};

export default Profile;
