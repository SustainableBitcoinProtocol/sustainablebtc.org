import React from 'react';
import Image from 'next/image';
import styles from "@/styles/pages/Events.module.scss";

import imgHeroBg from "@/public/sbc/heroBg.svg";
import imgSbcIcon from "@/public/home/sbc-icon.svg";

const RegisterForAnEventPage = () => {
   return (
      <section className={`${styles.hero} hero`}>
         {/* Background */}
         <Image
            className={styles.heroBg}
            src={imgHeroBg}
            alt="Hero Background"
         />

         {/* Icons */}
         <div className={`${styles.heroIcon} ${styles.heroIconTopRight}`}>
            <Image src={imgSbcIcon} alt="SBC Icon" loading="lazy"/>
         </div>
         <div className={`${styles.heroIcon} ${styles.heroIconBottomRight}`}>
            <Image src={imgSbcIcon} alt="SBC Icon" loading="lazy"/>
         </div>
         <div className={`${styles.heroIcon} ${styles.heroIconBottomLeft}`}>
            <Image src={imgSbcIcon} alt="SBC Icon" loading="lazy"/>
         </div>

         <div className={`${styles.container} container`}>
            {/* Heading */}
            <h1 className={`${styles.heroHeading}`}>
               {`Great to meet you, `}
               <strong>{`Let's stay in touch`}</strong>
            </h1>
            
            <form className={`${styles.form}`}>
               <div className={`${styles.formGroup} form-group`}>
                  <input
                     type="text"
                     className="form-control"
                     name="name"
                     id="name"
                     placeholder="Enter Name *"
                  />
                  <span className="error"></span>
               </div>
               <div className={`${styles.formGroup} form-group`}>
                  <input
                     type="text"
                     className="form-control"
                     name="email"
                     id="email"
                     placeholder="Enter Email *"
                  />
                  <span className="error"></span>
               </div>
               <div className={`${styles.formGroup} form-group`}>
                  <textarea
                     name="message"
                     id=""
                     className="form-control"
                     placeholder="Tell us what we can help you with"
                  ></textarea>
                  <span className="error"></span>
               </div>

               <div className={`${styles.formCheckboxGroupWrapper} form-group`}>
                  <label className={styles.formCheckboxGroup}>
                     <input
                        type="checkbox"
                        className="form-control"
                        name="userPreference"
                        id="userPreference1"
                        checked
                     />
                     <span className={styles.checkmark}></span>
                     <div>{`Sign-Up for our newsletter`}</div>
                  </label>
                  <label className={styles.formCheckboxGroup}>
                     <input
                        type="checkbox"
                        className="form-control"
                        name="userPreference"
                        id="userPreference1"
                     />
                     <span className={styles.checkmark}></span>
                     <div>{`I want to purchase SBC`}</div>
                  </label>
                  <label className={styles.formCheckboxGroup}>
                     <input
                        type="checkbox"
                        className="form-control"
                        name="userPreference"
                        id="userPreference1"
                     />
                     <span className={styles.checkmark}></span>
                     <div>{`I'm a miner`}</div>
                  </label>
                  <label className={styles.formCheckboxGroup}>
                     <input
                        type="checkbox"
                        className="form-control"
                        name="userPreference"
                        id="userPreference1"
                     />
                     <span className={styles.checkmark}></span>
                     <div>{`I'm curious in general`}</div>
                  </label>
                  <label className={styles.formCheckboxGroup}>
                     <input
                        type="checkbox"
                        className="form-control"
                        name="userPreference"
                        id="userPreference1"
                     />
                     <span className={styles.checkmark}></span>
                     <div>{`I'm an investor`}</div>
                  </label>
               </div>

               <button className={`${styles.formBtn} btn btn-primary`}>
                  <span>Submit</span>
                  <i className="bi bi-arrow-right"></i>
               </button>
            </form>
         </div>
      </section>
   )
}

export default RegisterForAnEventPage