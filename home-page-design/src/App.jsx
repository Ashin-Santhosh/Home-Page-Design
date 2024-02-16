import styles from './style';
import { Slider, Navbar, Coffee, Events, Webinar, Testimonials, Contact, FAQ, Footer } from './components';

const App = () => (
  <div className='bg-black w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <section>
      <Slider />
    </section>
    <section>
      <Coffee />
    </section>
    <section>
      <Events />
    </section>
    <section>
      <Webinar />
    </section>
    <section>
      <Testimonials />
    </section>
    <section>
      <Contact />
    </section>
    <section>
      <FAQ />
    </section>
    <footer>
      <Footer/>
    </footer>
  </div>
);

export default App