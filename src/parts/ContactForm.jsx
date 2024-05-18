import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../assets/icons/ic_spinner.svg";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    // Mendapatkan nilai input
    const { user_name, user_email, message } = formRef.current.elements;

    // Memeriksa apakah ada input yang kosong
    if (!user_name.value.trim() || !user_email.value.trim() || !message.value.trim()) {
      setLoading(false);
      toast.error("Kolom nama, email, dan pesan harus diisi.", {
        position: "top-center"
      });
      return;
    }

    try {
      // Mengirim email jika semua input terisi
      await sendEmail();
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.", {
        position: "top-center"
      });
    } finally {
      setLoading(false);
    }
  };

  const sendEmail = () => {
    return emailjs
      .sendForm(
        "service_rmz9ajg",
        "template_owfrqbt",
        formRef.current,
        "zrKAgDF40m1z74Hcv"
      )
      .then(
        (result) => {
          formRef.current.reset();
          console.log(result.text);
          setTimeout(() => {
            toast.success("Pesan anda telah terkirim!", {
              position: "top-center"
            });
          }, 100);
        },
        (error) => {
          console.log(error.text);
          toast.error("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.", {
            position: "top-center"
          });
        }
      );
  };

  return (
    <div className="mx-5 md:mx-12 lg:mx-24 my-6">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
        Hubungi Kami
      </h1>
      <form
        ref={formRef}
        className="border-2 border-grey-light flex flex-col gap-2 rounded-xl"
      >
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

        <div className="w-full flex justify-center mb-4 mt-2 lg:mt-0">
          <button
            type="button"
            className="font-600 px-10 md:px-12 lg:px-16 py-5 flex items-center bg-orange hover:bg-dark-orange text-white rounded-full h-5 md:h-10 lg:h-14 sm:mt-2 lg:mt-4 w-fit font-barlow font-medium md:text-lg lg:text-2xl"
            onClick={handleSubmit}
          >
            {loading ? (
              <span className="flex items-center">
                <img
                  src={Spinner}
                  alt="spinner"
                  className="animate-spin mr-2 md:mr-4 w-3 md:w-6"
                />
                LOADING...
              </span>
            ) : (
              "KIRIM"
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
