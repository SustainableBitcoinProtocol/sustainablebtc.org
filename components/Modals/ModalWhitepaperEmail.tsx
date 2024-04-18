"use client";

// Importing Libraries
import React, { useEffect } from "react";
import Modal from "react-modal";

// Importing styles
import styles from "@/styles/components/Modal.module.scss";

const customStyles = {
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      color: "#1e203f",
      maxWidth: "600px",
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
            <div className={`${styles.modal}`}>
               {/* Modal Header */}
               <div className={`${styles.modalHeader}`}>
                  <h3
                     className={`${styles.modalHeader__heading} heading heading-4`}
                  >
                     Download Whitepaper
                  </h3>
                  <button onClick={closeModal}>
                     <i className="bi bi-x-lg"></i>
                  </button>
               </div>

               {/* Modal Body */}
               <div className={`${styles.modalBody}`}>
                  <p>
                     Thankyou for showing interest in our whitepaper. It's free
                     to download.
                  </p>
                  <div className={`${styles.formGroup} form-group`}>
                     <label htmlFor="email">
                        Enter email <span>*</span>
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Email *"
                        name="email"
                     />
                     <span className="error"></span>
                  </div>
                  <div className={`${styles.btnWrapper}`}>
                     <button className={`${styles.btn} btn btn-primary`}>
                        <i className="bi bi-download"></i>
                        <span>Download Whitepaper</span>
                     </button>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
};

export default ModalWhitepaperEmail;
