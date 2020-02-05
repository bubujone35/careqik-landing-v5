import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProvidersBanner from "../components/providers/providers-banner";
import Benefits from "../components/providers/benefits";
import ProviderTestimonials from "../components/providers/testimonials";
import ProvidersCTA from "../components/providers/providers-cta";

const ProvidersPage = () => (
  <Layout>
    <SEO title="Providers" />

    <ProvidersBanner />
    <Benefits />
    <ProviderTestimonials />
    <ProvidersCTA />
  </Layout>
)

export default ProvidersPage;
