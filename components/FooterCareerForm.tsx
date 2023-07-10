// Importing styles
import styles from "@/styles/components/Footer.module.scss";

// Importing images
import imgFooterFormBg from "@/public/footer-form-bg.svg";
import Image from "next/image";

const FooterCareerForm = () => {
   return (
      <div className={styles.careerForm}>
         <div className={`${styles.container} container`}>
            <div className={styles.careerContent}>
               <h3 className={`${styles.heading}`}>Careers</h3>
               <p className={`${styles.para}`}>
                  Thanks for your interest in joining our team.
               </p>
               <form>
                  <div className={`${styles.formGroup} form-group`}>
                     <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        required
                        placeholder="Enter Email"
                     />
                     <span className="error"></span>
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
