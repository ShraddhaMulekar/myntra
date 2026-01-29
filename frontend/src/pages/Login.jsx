import React from "react";
import { useAuthForm } from "../hooks/useAuthForm";
import { AuthForm } from "../components/AuthForm";
import { Link } from "react-router-dom";

export const Login = () => {
  const { formData, handleChange, handleSubmit } = useAuthForm({
    endpoint: "/auth/login",
    redirectTo: "/register",
  });
  return (
    <div className="register">
      <AuthForm
        title="Welcome! Login to your account."
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showName={false}
        showRole={false}
        buttonText="Log in"
        switchAccount={
          <>
            Create new account? <Link to="/register">Sign up</Link>
          </>
        }
      />
    </div>
  );
};

export default Login;
