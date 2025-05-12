import { Helmet } from "react-helmet-async";
import CoverForAll from "../../components/shared/CoverForAll";
import termsIMG from "../../assets/image/terms2.jpg";

const TermsPage = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 md:px-20 max-w-5xl mx-auto">
      <Helmet>
        <title>Terms & Conditions | Le CelesteBD</title>
      </Helmet>
      <CoverForAll
        img={termsIMG}
        title={"Terms & conditons"}
        sub_title={"Know our Terms"}
      />
      <h1 className="text-3xl md:text-4xl font-bold m-10 text-center text-emerald-600 mb-6">
        Terms & Conditions
      </h1>

      <p className="mb-4">
        Welcome to Le CelesteBD. These terms and conditions outline the rules
        and regulations for the use of our website and services.
      </p>

      <h2 className="text-xl font-semibold text-emerald-500 mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing our website or making a reservation, you agree to be bound
        by these Terms and Conditions. If you do not agree with any part, please
        do not use our services.
      </p>

      <h2 className="text-xl font-semibold text-emerald-500 mt-6 mb-2">
        2. Reservations
      </h2>
      <p className="mb-4">
        Reservations can be made online and are subject to availability. We
        reserve the right to cancel or modify bookings under reasonable
        circumstances.
      </p>

      <h2 className="text-xl font-semibold text-emerald-500 mt-6 mb-2">
        3. Pricing & Payments
      </h2>
      <p className="mb-4">
        All prices are listed in BDT and are subject to change without notice.
        Payments for online orders are processed securely using Stripe.
      </p>

      <h2 className="text-xl font-semibold text-emerald-500 mt-6 mb-2">
        4. Cancellation Policy
      </h2>
      <p className="mb-4">
        Cancellations must be made at least 24 hours in advance. Late
        cancellations or no-shows may be subject to a fee.
      </p>

      <h2 className="text-xl font-semibold text-emerald-500 mt-6 mb-2">
        5. User Conduct
      </h2>
      <p className="mb-4">
        Users agree not to misuse the website, upload harmful content, or engage
        in any activity that disrupts the services we offer.
      </p>

      <h2 className="text-xl font-semibold text-emerald-500 mt-6 mb-2">
        6. Privacy
      </h2>
      <p className="mb-4">
        We respect your privacy. All personal information is handled in
        accordance with our Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold text-emerald-500 mt-6 mb-2">
        7. Changes to Terms
      </h2>
      <p className="mb-4">
        Le CelesteBD reserves the right to revise these Terms at any time.
        Continued use of the site constitutes acceptance of the revised terms.
      </p>

      <p className="mt-6 text-sm text-gray-500">Last updated: May 12, 2025</p>
    </div>
  );
};

export default TermsPage;
