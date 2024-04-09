import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ProfileInfo from "./pages/ProfileInfo"
import ProfileInfo1 from "./pages/ProfileInfo1";
import ProfileInfo2 from "./pages/ProfileInfo2";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      default:
        // No action needed for other cases
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signup-info" element={<ProfileInfo />} />
      <Route path="/signup-info1" element={<ProfileInfo1 />} />
      <Route path="/signup-info2" element={<ProfileInfo2 />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

    </Routes>
  );
}
export default App;
