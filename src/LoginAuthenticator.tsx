import { Navigate } from "react-router-dom";

interface Props {
  okRole: string[];
  children: React.ReactNode;
}

export default function LoginAuthenticator({ okRole, children }: Props) {
  const token = sessionStorage.getItem("loginToken");
  console.log("token", token);

  const role = token ?? "";

  if (0 !== okRole.length && !okRole.includes(role)) {
    return <Navigate to="/" replace />;
  }
  console.log("token", token);

  return children;
}
