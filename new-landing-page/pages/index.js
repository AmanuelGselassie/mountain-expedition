import Layout from "../components/Layout";

import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';


const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
    
      <Hero />
      <Feature/>
      <Service />
      <About />
      {/* <Footer /> */}
    </Layout>
  )
}

export default Index;
