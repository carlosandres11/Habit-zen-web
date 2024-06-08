"use client";

import styles from "../page.module.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

export default function HomeZenPage() { 

  const showUpcoming = () => {
    const upcomingElement = document.getElementById("upcoming");
    if (upcomingElement) {
      upcomingElement.style.visibility = "visible";
      setTimeout(() => {
        upcomingElement!.style.visibility = "hidden"; 
      }, 3000);
    } else {
      console.error("Element with id 'upcoming' not found.");
    }
  };

  const animationBanner= useRef(null);
  const animationBanner1300= useRef(null);
  const animationBanner850= useRef(null);
  const animationMindfulGuide= useRef(null);
  const animationHabits= useRef(null);
  const animationHabits850= useRef(null);
  const animationHabits1300= useRef(null);
  
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationBanner.current as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/banner.json",
    });
    const animation1300 = lottie.loadAnimation({
      container: animationBanner1300.current as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/banner_1300.json",
    });
    const animation850 = lottie.loadAnimation({
      container: animationBanner850.current as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/banner_850.json",
    });

    const animation1 = lottie.loadAnimation({
      container: animationMindfulGuide.current as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/mindfulguide.json",
    });

    const animation2 = lottie.loadAnimation({
      container: animationHabits.current as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/habits1920.json",
    });
    const animation2_1300 = lottie.loadAnimation({
      container: animationHabits1300.current as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/habits1300.json",
    });
    const animation2_850 = lottie.loadAnimation({
      container: animationHabits850.current as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/habits850.json",
    });
    return () => {
      animation.destroy();
      animation1300.destroy();
      animation850.destroy();
      animation1.destroy();
      animation2.destroy();
      animation2_850.destroy();
      animation2_1300.destroy();

    }
  }, []);

  return (
    <>
      <main className={styles.main}>
        
        <div className={styles.divlogo}>
          <img src="/img/logo.png" alt="" className={styles.logo} />
        </div>

        <div className={styles.divFondoAnimation}>
          
          <img src="/animations/logo_3D.gif" alt="" className={styles.logoAnimation}/>
          <img src="/img/fondo-nubes.jpg" alt="" className={styles.sky1920} />
          <img src="/img/fondo-nubes1300.jpg" alt="" className={styles.sky1300} />
          <img src="/img/fondo-nubes850.jpg" alt="" className={styles.sky850} />
        </div>
        
        <div ref={animationBanner} className={styles.banner}></div>
        <div ref={animationBanner1300} className={styles.banner1300}></div>
        <div ref={animationBanner850} className={styles.banner850}></div>

        <div className={styles.calendar}>
          <h2 className={styles.titles}>Calendar</h2>
          <p className={styles.texts}>Explore the feature of the ninety-week calendar, where you can visualize your journey through each week of the year</p>
          <img src="/img/plant_calendar_1.png" alt="" className={styles.plant_calendar_1}/>
          <img src="/animations/calendar.gif" alt=""  className={styles.calendarGif}/>
          <img src="/img/plant_calendar_2.png" alt="" className={styles.plant_calendar_2}/>

        </div>

        <div className={styles.mindfulguide}>
          <div className={styles.centerMind}>
            <h2 className={styles.titleMind}>MindfulGuide</h2>
            <div ref={animationMindfulGuide} className={styles.animationMind}></div>
          </div>

          <div className={styles.textDiv}>
            <p className={styles.textMind}>Welcome to <span className={styles.span}>MindfulGuide!</span> This section of our app is designed to provide you with personalized support and motivation on your journey to healthier and more balanced habits.</p>
            <div className={styles.textMind2}>
              <p className={styles.textMind1}>Process Tracking: MindfulGuide tracks your habits like exercise, nutrition, meditation, and sleep to monitor your progress and goal attainment.</p>
              <p className={styles.textMind1}>Personalized Advice: MindfulGuide provides tailored tips to overcome obstacles and improve your habits based on your data.</p>
              <p className={styles.textMind1}>Weekly Encouragement: MindfulGuide delivers weekly motivational messages to keep you inspired and focused on your wellness journey.</p> 
              <img src="/img/plant_mindfulguide_.png" className={styles.plantMindfulguide} alt="" />
            </div>
          </div>

        </div>

        <div className={styles.habits}>
          <h2 className={styles.titles}>Habits</h2>
          <div ref={animationHabits} className={styles.habitsAnimation}></div>
          <div ref={animationHabits1300} className={styles.habitsAnimation1300}></div>
          <div ref={animationHabits850} className={styles.habitsAnimation850}></div>
          <p className={styles.texts}>Take your habits to the next level</p>
          <img src="/img/plant_4habit_.png" className={styles.habitPlant} alt="" />


        </div>

        <div className={styles.community}>
          <h2 className={styles.titles}>Community</h2>

          <p className={styles.texts}>Connect with friends, explore their habits, and comment on their posts</p>
          <img src="/animations/community.gif" alt=""  className={styles.communityAnimation}/>
          <img src="/img/plant_community_1.png" className={styles.communityPlant1} alt="" />
          <img src="/img/plant_community_2.png" className={styles.communityPlant2} alt="" />


        </div>

        <div className={styles.video}>
          <h2 className={styles.titles}>User Experience</h2>
          
          <iframe
            src="https://www.youtube.com/embed/mdXvMCJMNqw"
            className={styles.videoExperience}
            
            allow="accelerometer; autoplay; clipboard-write;        encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
         
        </div>

        <div className={styles.thanks}>
          <p id="upcoming" className={styles.upcoming}>Upcoming function</p>

          <button 
            onClick={showUpcoming}
            className={styles.thanksButton}><img src="/img/heart.png" alt="" className={styles.thanksHeart} />Support</button>
          <img src="/img/donation_1.png" alt="" className={styles.thanksImg} on/>
          <img src="/img/donation_1_mobile.png" alt="" className={styles.thanksImg850} />

          <div className={styles.thanksbox}>
            <p className={styles.texts}>Every contribution, even <span className={styles.span}>$1 USD</span> is valuable and helps us to continue developing and improving. <span className={styles.span}>Thank you for your support!</span> </p>
            
          </div>

        </div>
      
      </main>

      <footer className={styles.footer}>
      </footer>

    </>
  );
}
