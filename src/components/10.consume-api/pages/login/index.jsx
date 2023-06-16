import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGoogleLogin from "../../../9.auth/ButtonGoogleLogin";
import { useLocalStorage } from "../../hooks/localStorage";

export const LoginPage = () => {
  const [credential] = useLocalStorage("credential");
  const navigate = useNavigate();

  const checkLogin = () => {
    if (credential) {
      navigate("/home");
      alert("anda berhasil login");
    } else {
      alert("mohon login terlebih dahulu");
    }
  };
  useEffect(() => {
    checkLogin();
  }, [credential]);
  return (
    <>
      <h1>Login Page</h1>
      <ButtonGoogleLogin />
    </>
  );
};
