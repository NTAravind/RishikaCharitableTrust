import Butn from "../components/button";
import './home.css';
import ngo from '../images/pat.png';
import TeamSection from "../components/team";
import Carousel from "../components/corausel";
import {CookingPot, Cross, CircleChevronRight, BookOpenText, School, HeartHandshake, Landmark, UtensilsCrossed,
  Shirt, Droplet, Stethoscope, Sprout, ToyBrick, Recycle, BookOpenCheck, Home,LibraryBig ,
  Trash} from 'lucide-react';
import VolunteerSection from "../components/forms";

const scrollToVolunteerForm = () => {
  const formSection = document.querySelector('.f');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new Event('openVolunteerTab'));
  }
};

const scrollToFormAndDonate = () => {
  const formSection = document.querySelector('.f'); // the form container class
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new Event('openDonateTab'));
  }
};

const HomePage = () => {
  return (
    <>
      <style className="bloc">
   
        {`
          .homepage .lucide {
            width: 58px !important;
            height: 58px !important;
          }
          
          @media (max-width: 640px) {
            .homepage .lucide {
              width: 32px !important;
              height: 32px !important;
            }
          }
        `}
      </style>
      <div className="view ">
      <section className="hero  grid grid-cols-3 max-sm:grid-cols-1 grid-rows-3 max-sm:grid-rows-auto mt-5 gap-2">
        <div className="col-start-1 font-semibold col-span-2 max-sm:col-span-1 row-start-1 row-span-2 max-sm:row-span-1 bg-blue-50 bg-contain bg-repeat p-15 max-sm:p-4 rounded-2xl self-center ">
          <h1 className="font-semibold text-6xl max-sm:text-3xl leading-tight">
            Empowering Communities & Spreading Happiness, Throughout Karnataka
          </h1>
          <div className="flex flex-row mt-4 justify-end ">
            <Butn text="Donate" onClick={scrollToFormAndDonate}  className="" />
          </div>
        </div>

        <div className="col-start-3 max-sm:col-start-1 row-start-1 max-sm:row-start-2 row-span-3 max-sm:row-span-1 bg-[url('./images/gc.jpg')] bg-center bg-cover relative rounded-2xl max-sm:h-64 bloc">
          <div className="h-full mt-auto "></div>
        </div>

        <div className="col-start-1 max-sm:col-start-1 row-start-3 max-sm:row-start-3 bg-[url('./images/ud.png')] bg-cover rounded-2xl p-5 max-sm:p-3 ">
          <div className="text-2xl  font-semibold mt-3 max-sm:h-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:text-[1.3rem] ">
            Serve with compassion—donate food, educate the communities, and give health support to communities across Karnataka.
            <div className="flex flex-row gap-10 justify-end "></div>
          </div>
          <div className="b text-2xl "></div>
        </div>
        <div className="col-start-2 max-sm:col-start-1 row-start-3 max-sm:row-start-4 bg-black rounded-2xl p-5 max-sm:p-3 ">
          <h1 className="text-white text-2xl max-sm:text-lg font-semibold ">Want to make a difference? Join us as a volunteer and be the change in your community</h1>
          <div className="flex flex-row justify-end "><button className="bg-white text-black text-[1.2rem] max-sm:text-base rounded-full px-7 py-2 max-sm:px-4 max-sm:py-1 " onClick={scrollToVolunteerForm}>Volunteer</button></div>
        </div>
      </section>

      {/* ################################################################################################################################ */}

      <section className="vis  bloc flex flex-row max-sm:flex-col gap-6 justify-between m-15 max-sm:m-4">
        <div className="text-4xl max-sm:text-2xl font-semibold text-balance text-start bloc">
          What if compassion could build communities? <CircleChevronRight size={48} className="mt-5 max-sm:mt-2 max-sm:w-8 max-sm:h-8 bloc" />
        </div>
        <div className="text-[1.3rem] max-sm:text-base w-5xl max-sm:w-full max-sm:my-5 bloc">
          Rishika Charitable Trust is dedicated to fostering community development, advancing health initiatives, and empowering education while preserving cultural heritage. Through our unwavering commitment to societal welfare and sustainability, we strive to create a brighter, more inclusive future for Bangalore and beyond.
        </div>
      </section>

       <div className="my-5  bloc max-sm:my-2 ">
        <h1 className="text-5xl font-medium text-center my-2 max-sm:text-4xl bloc">Our Collabs</h1>
       <Carousel   className="bloc" />
       </div>
      {/* #################################################################################################################################### */}

      <section id="stry" className="stry bloc" className="stry">
        <div className="grid grid-cols-6 max-sm:grid-cols-1 grid-rows-4 max-sm:grid-rows-auto gap-2 h-[60vh] max-sm:h-auto bloc">
          <div className="col-start-1 col-span-3 max-sm:col-span-1 row-span-4 max-sm:row-span-1 flex flex-col gap-1 p-7 max-sm:p-4 rounded-2xl justify-center bg-blue-100/60 text-balance bloc">
            <h1 className="text-5xl max-sm:text-3xl text-start bloc">Our Story</h1>
            <p className="text-[1.3rem] max-sm:text-base p-4 max-sm:p-2 mt-5 max-sm:mt-2 bloc">
              Rishika Charitable trust was born in 2020 during the height of the COVID-19 pandemic, when a group of passionate individuals witnessed the devastating impact on underprivileged communities. What began as a small initiative to provide essential food supplies to families who had lost their livelihoods quickly evolved into a comprehensive support system addressing multiple dimensions of community welfare.
            </p>
          </div>
          <div className="col-start-4 max-sm:col-start-1 col-span-3 max-sm:col-span-1 bg-black max-sm:bg-[url('/bgback.jpg')] row-start-1 max-sm:row-start-2 row-span-1 flex flex-col justify-center rounded-2xl p-4 max-sm:my-0  max-sm:row-span-1 bloc">
          <div className=" max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center bloc">

     <h1 className="text-white text-5xl max-sm:text-5xl font-Medium text-center max-sm:absolute max-sm:z-10 bloc">
              Our Vision
            </h1>
            </div>
          </div>
          <div className="col-start-5 max-sm:col-start-1 col-span-2 max-sm:col-span-1 row-start-2 max-sm:row-start-3 row-span-3 max-sm:row-span-1 bg-blue-300 rounded-2xl p-8 max-sm:p-4 text-[1.3rem] max-sm:text-base flex flex-col justify-between gap-6 max-sm:gap-1 max-sm:my-2 max-sm:py-10 bloc">
            <p className="bloc">Empowering Individuals  through Anna (food),Aarogya (health) and Akshara (education) Creates a Ripple Effect of change.</p>
            <div className="flex flex-row justify-between px-10 max-sm:px-2 bloc">
              <div className="flex flex-col gap-2 items-center bloc">
                <CookingPot size={48} className="max-sm:w-8 max-sm:h-8 bloc" /><h1 className="text-[1.3rem] max-sm:text-sm font-medium bloc">Anna</h1>
              </div>
              <div className="flex flex-col gap-2 items-center bloc">
                <BookOpenText size={48} className="max-sm:w-8 max-sm:h-8 bloc" /><h1 className="text-[1.3rem] max-sm:text-sm font-medium bloc">Akshara</h1>
              </div>
              <div className="flex flex-col gap-2 items-center bloc">
                <Cross size={48} className="max-sm:w-8 max-sm:h-8 bloc" /><h1 className="text-[1.3rem] max-sm:text-sm font-medium bloc">Aarogya</h1>
              </div>
            </div>
          </div>
          <div className="col-start-4 max-sm:col-start-1 row-start-2 max-sm:row-start-4 row-span-3 max-sm:row-span-1 bg-[var(--color-secondary)] rounded-2xl max-sm:h-64 max-sm:my-2 bloc">
            <img src={ngo} className="object-cover w-full h-full rounded-2xl bloc"></img>
          </div>
        </div>
      </section>

      {/* #################################################################################################################################### */}

      <section className="imp  bloc bg-[var(--color-primary)] text-white py-12 max-sm:py-6 px-6 max-sm:px-3 my-10 rounded-2xl">
        <div className="max-w-6xl mx-auto text-center bloc">
          <h2 className="text-3xl max-sm:text-2xl font-bold mb-4 bloc">Our Impact So Far</h2>
          <p className="text-lg max-sm:text-base mb-12 max-sm:mb-6 text-[var(--color-accent)] bloc">
            Through our initiatives, we've reached thousands of lives across Karnataka.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-sm:gap-4 bloc">
            <div className="bg-[var(--color-secondary)] rounded-xl p-6 max-sm:p-3 shadow-lg flex flex-col items-center bloc">
              <School className="w-10 h-10 max-sm:w-6 max-sm:h-6 text-[var(--color-accent)] mb-2 bloc" />
              <h3 className="text-4xl max-sm:text-2xl font-bold bloc">20+</h3>
              <p className="text-[var(--color-accent)] mt-2 max-sm:text-sm bloc">Government Schools</p>
            </div>

            <div className="bg-[var(--color-secondary)] rounded-xl p-6 max-sm:p-3 shadow-lg flex flex-col items-center bloc">
              <Home className="w-10 h-10 max-sm:w-6 max-sm:h-6 text-[var(--color-accent)] mb-2 bloc" />
              <h3 className="text-4xl max-sm:text-2xl font-bold bloc">5</h3>
              <p className="text-[var(--color-accent)] mt-2 max-sm:text-sm bloc">Orphanages</p>
            </div>

            <div className="bg-[var(--color-secondary)] rounded-xl p-6 max-sm:p-3 shadow-lg flex flex-col items-center bloc">
              <HeartHandshake className="w-10 h-10 max-sm:w-6 max-sm:h-6 text-[var(--color-accent)] mb-2 bloc" />
              <h3 className="text-4xl max-sm:text-2xl font-bold bloc">6</h3>
              <p className="text-[var(--color-accent)] mt-2 max-sm:text-sm bloc">Old Age Homes</p>
            </div>

            <div className="bg-[var(--color-secondary)] rounded-xl p-6 max-sm:p-3 shadow-lg flex flex-col items-center bloc">
              <Landmark className="w-10 h-10 max-sm:w-6 max-sm:h-6 text-[var(--color-accent)] mb-2 bloc" />
              <h3 className="text-4xl max-sm:text-2xl font-bold bloc">3</h3>
              <p className="text-[var(--color-accent)] mt-2 max-sm:text-sm bloc">Slum Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* #################################################################################################################################### */}

      <section id="about" className="about bloc my-2 h-full" className="about my-2 h-full">
        <div className="flex flex-col justify-center bloc">
          <h1 className="text-5xl max-sm:text-3xl font-medium self-center bloc">Our Team</h1>
          <p className="text-[1.3rem] max-sm:text-base self-center w-200 max-sm:w-full text-center pt-5 max-sm:pt-2 bloc">These are the hands and hearts behind our vital work.
            Learn more about the dedicated people making our vision a reality.</p>
        </div>
        <TeamSection className="bloc"  / >
      </section>

      {/* #################################################################################################################################### */}

      <section id="prog" className="prog bloc" className="prog">
        <h1 className="text-5xl max-sm:text-3xl w-fit m-auto my-10 max-sm:my-5 font-medium bloc">
          Our Impact Programs
        </h1>
        <section className="px-6 max-sm:px-3 py-8 max-sm:py-4 bg-[var(--color-secondary)] rounded-2xl text-3xl max-sm:text-xl bloc">
          <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-2 auto-rows-[150px] max-sm:auto-rows-auto bloc">
            {/* Tall Left Card 1 - Grama Pravesha */}
            <div className="col-span-1 row-span-2 max-sm:row-span-1 rounded-xl p-4 max-sm:p-3 flex flex-col justify-between max-sm:mb-2 bloc" style={{ backgroundColor: 'var(--color-accent)' }}>
              <div className="text-[var(--color-secondary)] bloc"><Home size={48} className="max-sm:w-8 max-sm:h-8 bloc" /></div>
              <div className="bloc">
                <h3 className="font-semibold text-[var(--color-primary)] bloc">Grama Pravesha</h3>
                <p className="text-[1.3rem] max-sm:text-sm text-gray-600 bloc">Improving Infrastructure in government schools</p>
              </div>
            </div>

            {/* Tall Left Card 2 - Mutru Project */}
            <div className="col-span-1 row-span-2 max-sm:row-span-1 rounded-xl p-4 max-sm:p-3 flex flex-col justify-between max-sm:mb-2 bloc" style={{ backgroundColor: 'var(--color-accent)' }}>
              <div className="text-[var(--color-secondary)] bloc"><Droplet size={48} className="max-sm:w-8 max-sm:h-8 bloc" /></div>
              <div className="bloc">
                <h3 className="font-semibold text-[var(--color-primary)] bloc">Muttu Project</h3>
                <p className="text-[1.3rem] max-sm:text-sm text-gray-600 bloc">Raising awareness about menstrual Health and providing Sanitary Products  </p>
              </div>
            </div>

            {/* Top Right Tall Card 1 */}
            <div className="col-span-2 max-sm:col-span-1 row-span-1 rounded-xl p-4 max-sm:p-3 flex items-start gap-3 max-sm:mb-2 bloc" style={{ backgroundColor: 'var(--color-accent)' }}>
              <ToyBrick className="text-[var(--color-secondary)] max-sm:w-8 max-sm:h-8 bloc" size={48} />
              <div className="bloc">
                <h3 className="font-semibold text-[var(--color-primary)] bloc">Amruth Khel</h3>
                <p className="text-[1.3rem] max-sm:text-sm text-gray-600 bloc">Reviving traditional games to promote cultural heritage</p>
              </div>
            </div>

            {/* Top Right Tall Card 2 */}
            <div className="col-span-2 max-sm:col-span-1 row-span-1 rounded-xl p-4 max-sm:p-3 flex items-start gap-3 max-sm:mb-2 bloc" style={{ backgroundColor: 'var(--color-accent)' }}>
              <Recycle className="text-[var(--color-secondary)] max-sm:w-8 max-sm:h-8 bloc" size={48} />
              <div className="bloc">
                <h3 className="font-semibold text-[var(--color-primary)] bloc">E-Waste Collection</h3>
                <p className="text-[1.3rem] max-sm:text-sm text-gray-600 bloc">Encouraging responsible disposal of electronic waste</p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="col-span-1 row-span-1 rounded-xl p-4 max-sm:p-3 flex items-start gap-3 max-sm:mb-2 bloc" style={{ backgroundColor: 'var(--color-accent)' }}>
              <Trash className="text-[var(--color-secondary)] max-sm:w-8 max-sm:h-8 bloc" size={48} />
              <div className="bloc">
                <h3 className="font-semibold text-[var(--color-primary)] bloc">CleanUp Yatra</h3>
                <p className="text-[1.3rem] max-sm:text-sm text-gray-600 bloc">Organizing cleanliness Drives to promote Hygiene.</p>
              </div>
            </div>

            <div className="col-span-1 row-span-1 rounded-xl p-4 max-sm:p-3 flex items-start gap-3 max-sm:mb-2 bloc" style={{ backgroundColor: 'var(--color-accent)' }}>
              <Sprout className="text-[var(--color-secondary)] max-sm:w-8 max-sm:h-8 bloc" size={48} />
              <div className="bloc">
                <h3 className="font-semibold text-[var(--color-primary)] bloc">Plantation Drive</h3>
                <p className="text-[1.3rem] max-sm:text-sm text-gray-600 bloc">Contributing to Environmental Sustainability</p>
              </div>
            </div>

            <div className="col-span-1 row-span-1 rounded-xl p-4 max-sm:p-3 flex items-start gap-3 max-sm:mb-2 bloc" style={{ backgroundColor: 'var(--color-accent)' }}>
              <BookOpenCheck className="text-[var(--color-secondary)] max-sm:w-8 max-sm:h-8 bloc" size={48} />
              <div className="bloc">
                <h3 className="font-semibold text-[var(--color-primary)] bloc">Jnana Chethana</h3>
                <p className="text-[1.3rem] max-sm:text-sm text-gray-600 bloc">Educational outreach.</p>
              </div>
            </div>

            <div className="col-span-1 row-span-1 rounded-xl p-4 max-sm:p-3 flex items-start gap-3 max-sm:mb-2 bloc" style={{ backgroundColor: 'var(--color-accent)' }}>
              <LibraryBig  className="text-[var(--color-secondary)] max-sm:w-8 max-sm:h-8 bloc" size={48} />
              <div className="bloc">
                <h3 className="font-semibold text-[var(--color-primary)] bloc">Book Donation Drive</h3>
                <p className="text-[1.3rem] max-sm:text-sm text-gray-600 bloc">Providing books to underprivileged children</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* #################################################################################################################################### */}

      <section className="f max-sm:-mx-2 bloc ">
        <VolunteerSection className="bloc" />
      </section>
      </div>
    </>
  );
};

export default HomePage;