import React, {useState} from "react";
import styles from "./Login.module.scss"; // Import the styles
import googleIcon from "../assets/google.png"; // Import Google icon
import linkedinIcon from "../assets/linkedin.png"; // Import LinkedIn icon
import logo from "../assets/logo_brand.svg";
import GroupIcon from "@mui/icons-material/Group";

interface LoginProps {
    onLoginSuccess : () => void
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      if (!email || !password) {
        alert("Please enter both email and password!");
        return;
      }
      // Simulate login
      setTimeout(() => {
        console.log("Simulating login...");
        onLoginSuccess(); // Redirect to library
      }, 1000);
    };

    // just dummy methods
    const handleOAuthLogin = (provider: string) => {
        console.log(`Logging in with ${provider}...`);
        onLoginSuccess(); // Redirect to library after OAuth login
      };

       // just dummy methods
      const handleSignUp = () => {
        if (!email || !password) {
          alert("Please enter a valid email and password to sign up!");
          return;
        }
        console.log("Signing up...");
        onLoginSuccess(); // Redirect to library after signup
      };

  return (
    <div className={styles.container}>
      <img src={logo} alt="ObviouslyAI" className={styles.logo} />
      <div className={styles.formContainer}>
        <GroupIcon className={styles.groupIcon} />
        <h2 className={styles.title}>Sign In</h2>
        <p className={styles.subtitle}>Welcome back! Let's get started with AI</p>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create a password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
        <div className={styles.divider}>OR</div>
        <div className={styles.oauthButtons}>
          <button
            className={styles.oauthButton}
            onClick={() => handleOAuthLogin("Google")}
          >
            <img src={googleIcon} alt="Google" className={styles.oauthIcon} />
            Sign up with Google
          </button>
          <button
            className={styles.oauthButton}
            onClick={() => handleOAuthLogin("LinkedIn")}
          >
            <img src={linkedinIcon} alt="LinkedIn" className={styles.oauthIcon} />
            Sign up with LinkedIn
          </button>
        </div>
        <p className={styles.signup}>
          Don’t have an account?{" "}
          <a
            href="#signup"
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
          >
            Sign up
          </a>
        </p>
      </div>
      <p className={styles.copyright}>
        Copyright © Reserved 2025 by Obviously AI Inc, All rights reserved
      </p>
    </div>
  );
};

export default Login;