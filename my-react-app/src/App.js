import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import WelcomePage from "./pages/Client/WelcomePage";
import ProfileInfo from "./pages/Client/ProfileInfo"
import ProfileInfo1 from "./pages/Client/ProfileInfo1";
import ProfileInfo2 from "./pages/Client/ProfileInfo2";
import SignInPage from "./pages/Client/SignInPage";
import SignUpPage from "./pages/Client/SignUpPage";
import DoctorAppointments from "./pages/Doctor/Doctor Appointment/DoctorAppointments";
import DoctorMessages from "./pages/Doctor/Doctor Messages/DoctorMessages";
import DoctorPatients from "./pages/Doctor/Doctor Patient/DoctorPatients";
import DoctorSettings from "./pages/Doctor/Doctor Settings/DoctorSettings";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorTests from "./pages/Doctor/Doctor Test/DoctorTests";
import Client from "./pages/Client/Client";
import Guest from "./pages/Client/GuestPage";
import AboutUsReviews from "./pages/Client/AboutUsReviews";
import UploadDoc from "./pages/Client/UploadDoc";
import BookingPage from "./pages/Client/BookingPage";
import Calendly from "./components/BookAppointementClient/Calendly";
import RequestTest from "./pages/Client/RequestTest";
import MedicalRecords from "./pages/Client/MedicalRecords";
import ClientMessages from "./pages/Client/ClientMessages";
import LeaveReviewClinic from "./pages/Client/LeaveReviewClinc";
import LeaveReviewDoctor from "./pages/Client/LeaveReviewDoctor";
import ClientSettings from "./pages/Client/ClientSettings";
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWFCeEx1WmFZfVpgdl9GaFZVQmYuP1ZhSXxXdkBjXX5WcX1VQWlZUUQ=');


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
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/signup-info" element={<ProfileInfo />} />
      <Route path="/signup-info1" element={<ProfileInfo1 />} />
      <Route path="/signup-info2" element={<ProfileInfo2 />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/doctor/dashboard/" element={<DoctorDashboard/>} />
      <Route path="/doctor/appointments" element={<DoctorAppointments />} />
      <Route path="/doctor/patients" element={<DoctorPatients />} />
      <Route path="/doctor/messages" element={<DoctorMessages />} />
      <Route path="/doctor/settings" element={<DoctorSettings />} />
      <Route path="/doctor/tests" element={<DoctorTests />} />
      <Route path="/clientpage" element={<Client />} />
      <Route path="/guest"    element={<Guest />} />
      <Route path="/aboutus"    element={<AboutUsReviews />} />
      <Route path="/upload-documents"    element={<UploadDoc />} />
      <Route path="/booking-page"    element={<BookingPage />} />
      <Route path="/calendly"    element={<Calendly />} />
      <Route path="/request-test"    element={<RequestTest />} />
      <Route path="/medical-records" element={<MedicalRecords />} />
      <Route path="/doctor-chat" element={<ClientMessages />} />
      <Route path="/clinic-reviews" element={<LeaveReviewClinic />} />
      <Route path="/doctor-reviews" element={<LeaveReviewDoctor />} />
      <Route path="/user-settings" element={<ClientSettings />} />
      


    </Routes>
  );
}
export default App;
