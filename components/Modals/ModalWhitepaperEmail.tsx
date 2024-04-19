"use client";

// Importing Libraries
import React, { useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";

// Importing styles
import styles from "@/styles/components/Modal.module.scss";

// Importing Images
import imgModalBackdrop from "@/public/home/modalWhitepaperBackdrop.png";
import imgModalForeground from "@/public/home/modalWhitepaperForeground.png";

const customStyles = {
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      color: "#fafafa",
      maxWidth: "800px",
      width: "calc(100% - 100px)",
      padding: "2rem",
      borderRadius: "0",
   },
};

// Bind modal to the appElement
// Modal.setAppElement("#modalWhitepaperEmail");

const ModalWhitepaperEmail = ({
   modalIsOpen,
   setModalIsOpen,
}: {
   modalIsOpen: any;
   setModalIsOpen: any;
}) => {
   function closeModal() {
      setModalIsOpen(false);
   }

   return (
      <>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
         >
            <div className={`${styles.modal} ${styles.modalWhitepaperEmail}`}>
               {/* Actual Content */}
               <div className={`${styles.content}`}>
                  <h3 className={`${styles.heading} heading heading-4`}>
                     Download SBP Whitepaper
                  </h3>
                  <p className={`${styles.para} para`}>
                     Thankyou for showing interest in SBP. <br />
                     Our whitepaper is available for free to download.
                  </p>
                  <form action="#" className={`${styles.form}`}>
                     <div className={`${styles.formGroup} form-group`}>
                        <label htmlFor="email">
                           Email <span>*</span>
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Enter your email"
                           name="email"
                        />
                        <span className="error"></span>
                     </div>
                     <button className={`${styles.formBtn} btn btn-dark`}>
                        <i className="bi bi-download"></i>
                        <span>Download Now</span>
                     </button>
                  </form>
               </div>

               {/* Design Elements */}

               <div className={`${styles.designElem}`}>
                  {/* Close Button */}
                  <button
                     className={`${styles.designElem__closeBtn}`}
                     onClick={closeModal}
                  >
                     <i className="bi bi-x-lg"></i>
                  </button>

                  {/* Backdrop Image */}
                  <Image
                     src={imgModalBackdrop}
                     alt="Hero Background"
                     className={styles.imgModalBackdrop}
                     objectFit="contain"
                  />

                  {/* Foredrop Image */}
                  <Image
                     src={imgModalForeground}
                     alt="Hero Background"
                     className={styles.imgModalForeground}
                     objectFit="contain"
                  />
               </div>
            </div>
         </Modal>
      </>
   );
};

export default ModalWhitepaperEmail;
