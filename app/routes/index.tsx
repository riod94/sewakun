import SimpleThreeColumns from "~/components/Feature/SimpleThreeColumns";
import Hero from "~/components/Hero";
import { AppLayout } from "~/layouts/AppLayout";
import OrderFlow from "~/components/OrderFlow";
import Faq from "~/components/Faq";
import ContactUs from "~/components/ContactUs";
import Products from "~/components/Products";

export default function Index() {
  return (
    <AppLayout>
      <Hero />
      <SimpleThreeColumns />
      <Products />
      <OrderFlow />
      <Faq />
      <ContactUs />
      {/* <Testimonials /> */}
    </AppLayout>
  );
}
