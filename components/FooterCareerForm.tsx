// Importing styles
import styles from "@/styles/components/Footer.module.scss";

// Packages
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// Importing images
import imgFooterFormBg from "@/public/footer-form-bg.svg";
import Image from "next/image";

const FooterCareerForm = () => {
   // Email
   const careerForm = useRef(null);
   const careerFormError = useRef(null);

   const sendEmail = (e: any) => {
      if (e) e.preventDefault();
      // text message
      var errorText: HTMLElement = careerFormError.current!;
      errorText.style.color = "#f83939";
      errorText.style.fontWeight = "4  00";

      // Validations
      if (careerForm.current !== null) {
         const email: any = careerForm.current["email"]["value"];
         const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

         if (email == "") {
            errorText.innerHTML = "Required!";
         } else if (!email.match(validRegex)) {
            errorText.innerHTML = "Invalid email address";
         } else {
            errorText.innerHTML = "";

            // Send mail
            emailjs
               .sendForm(
                  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY || "",
                  process.env.NEXT_PUBLIC_EMAILJS_CAREERFORM_TEMPLATE_KEY || "",
                  careerForm.current || "",
                  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
               )
               .then(
                  (result: any) => {
                     // console.log(result.text);
                  },
                  (error: any) => {
                     console.log(error.text);
                  }
               );
            errorText.innerHTML =
               "Hurray! We got your email. Our team will get back to you soon";
            errorText.style.color = "greenyellow";
            errorText.style.fontWeight = "500";
            (careerForm.current as any).reset();

            setTimeout(function () {
               errorText.innerHTML = "";
            }, 3000);
         }
      }
   };

   return (
      <div className={styles.careerForm} onSubmit={sendEmail}>
         <div className={`${styles.container} container`}>
            <div className={styles.careerContent}>
               <h1 className={`${styles.heading}`}>Talk to our team</h1>
               <p className={`${styles.para}`}>
                  Thanks for your interest in SBP.
               </p>
               <form ref={careerForm}>
                  <div className={`${styles.formGroup} form-group`}>
                     <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                     />
                     <span className="error" ref={careerFormError}></span>
                  </div>
                  <button className={`btn btn-primary`}>
                     <span>Submit</span>
                     <i className="bi bi-arrow-right"></i>
                  </button>
               </form>
            </div>

            {/* Image */}
            <Image
               src={imgFooterFormBg}
               alt="Background Career Form"
               className={styles.careerBg}
            />
         </div>
      </div>
   );
};

export default FooterCareerForm;
