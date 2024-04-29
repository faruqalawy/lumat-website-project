import React, {useRef, useState} from "react";

import Spinner from "../assets/icons/ic_spinner.svg"

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwuWKdzRhMD6S6cLKEjj5Vh6a0Hxegbsav6VAz6pssviE4mbINpmrD6o5_3Kx0kotPf_A/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(formRef.current),
      });
  
      if (response.ok) {
        console.log("SUCCESSFULLY SUBMITTED TO SPREADSHEET");
        
        // Mengosongkan formulir setelah pengiriman berhasil
        formRef.current.reset();
        
        // Menampilkan pesan konfirmasi kepada pengguna
        alert("Pesan Anda telah terkirim!");
      } else {
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  
    sendEmail(e);
  };  
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rmz9ajg', 'template_owfrqbt', formRef.current, 'zrKAgDF40m1z74Hcv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="mx-5 md:mx-12 lg:mx-24 my-6">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-4">Hubungi Kami</h1>
      <form ref={formRef}
       onSubmit={handleSubmit}
       className=" border-2 border-grey-light flex flex-col gap-2
       rounded-xl">
        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="Masukan nama anda disini (wajib)"
          name="user_name"
          required
          className="border rounded-3xl border-black/25 mx-4 h-[40px] md:h-[60px] p-3 mt-5"
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="Masukan email anda disini (wajib)"
          name="user_email"
          required
          className="border rounded-3xl border-black/25 mx-4 h-[40px] md:h-[60px] p-3"
        />

        <label htmlFor="subject"></label>
        <input
          type="text"
          placeholder="Masukan subjek pesan anda"
          name="message_subject"
          required
          className="border rounded-3xl border-black/25 mx-4 h-[40px] md:h-[60px] p-3"
        />

        <label htmlFor="message"></label>
        <textarea
          rows={6}
          placeholder="Masukan pesan, komentar, atau saran anda di kolom ini"
          required
          className="border border-black/25 mx-4 p-3 rounded-xl"
          style={{ borderRadius: 20 }}
          name="message"
        ></textarea>

        <div className=" w-full flex justify-center mb-4 mt-2 lg:mt-0">
          {loading ? (
            <button className="flex justify-center" disabled>
            
            <span className="font-600 px-4 md:px-6 lg:px-10 flex items-center bg-dark-orange text-white rounded-full h-5 md:h-10 lg:h-14 sm:mt-2 lg:mt-4 w-fit font-barlow  font-medium text-xs md:text-lg lg:text-2xl"><img src={Spinner} alt="spinner" className=" animate-spin mr-2 md:mr-4 w-3 md:w-6"  />LOADING...</span>
          </button>
          ) : (

          <input
                    type="submit"
                    className="font-600 px-6 md:px-10 lg:px-16 flex bg-orange hover:bg-dark-orange text-white rounded-full h-5 md:h-10 lg:h-14 sm:mt-2 lg:mt-4 w-fit font-barlow  font-medium text-xs md:text-lg lg:text-2xl "
                    value="KIRIM"
                  />
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
