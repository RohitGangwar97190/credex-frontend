import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
 import ChatWidget from './components/ChatWidget';
// import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
     {/* <div className=" mt-10 bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center flex-col">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
         mode
        </button>
       
      </div> */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Hero isDark={isDark} />
      <HowItWorks isDark={isDark} />
      <WhyChooseUs isDark={isDark} />
      <Testimonials isDark={isDark} />
      <ContactForm isDark={isDark} />
      <ChatWidget isDark={isDark} />
      {/* <Footer isDark={isDark} /> */}
    
    </>
  );
}

export default App;