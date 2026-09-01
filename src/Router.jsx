import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { LoginPage } from "./pages/loginpage";
import { ExamMain } from "./pages/exam/ExamMain";
import { ExamDetail } from "./pages/exam/ExamDetail";
import { AssignmentDetail } from "./pages/exam/AssignmentDetail";

// API 연동 전 임시 로그인 사용자입니다. 인증 API 연결 시 Context 또는 상태 관리 값으로 교체합니다.
export const currentUser = { name: "다람쥐", role: "USER" }; // USER | CLASS_ADMIN | ADMIN

const requireRole = (allowedRoles) => (
  allowedRoles.includes(currentUser.role) ? <Outlet /> : <Navigate to="/exam" replace />
);

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    element: requireRole(["USER", "CLASS_ADMIN", "ADMIN"]),
    children: [
      { path: "/", element: <Navigate to="/exam" replace /> },
      { path: "/exam", element: <ExamMain /> },
      { path: "/exam/:examId", element: <ExamDetail /> },
      { path: "/assignment/:assignmentId", element: <AssignmentDetail /> },
    ],
  },
  { path: "*", element: <Navigate to="/exam" replace /> },
]);
