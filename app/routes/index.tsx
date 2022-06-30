import SimpleThreeColumns from "~/components/Feature/SimpleThreeColumns";
import Hero from "~/components/Hero";
import { AppLayout } from "~/layouts/AppLayout";
import Testimonials from "~/components/Testimonials";
import Portfolio from "~/components/Portfolio";
import OrderFlow from "~/components/OrderFlow";
import Faq from "~/components/Faq";

export default function Index() {
  return (
    <AppLayout>
      <Hero />
      <SimpleThreeColumns />
      <Portfolio />
      <OrderFlow />
      <Faq />
      {/* <Testimonials /> */}
    </AppLayout>
  );
}
