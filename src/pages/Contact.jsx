import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Star } from "lucide-react"
import { useState } from "react";
import { useForm } from "react-hook-form"
import Feedback from "../components/feedback-card/Feedback";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const [showmessage, setShowmessage] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("✅ Backend Response:", result);

      reset();
      setShowmessage(true);

      setTimeout(() => {
        setShowmessage(false);
      }, 3000);
    } catch (err) {
      console.error("❌ Error submitting contact form:", err);
    }
  }

  return (
    <div className="contact-page">
      <header className="contact-header text-center p-4">
        <span className="font-bold text-5xl ">Contact <span className="text-red-600">Us</span></span>
        <p className="text-[19px] py-2">Get in touch with us for reservations, feedback, or any questions you might have</p>
      </header>

      {/* Main container */}
      <div className=" flex flex-col lg:flex-row   gap-4 w-full">
        
        {/* get in touch */}
        <div className="p-5 shadow-lg rounded-2xl w-full lg:w-1/2 mb-2">
          <span className="font-bold text-2xl">Get in Touch</span>

          {/* phone */}
          <div className="flex items-center mt-2 py-2">
            <span className="text-white bg-red-400 p-2 rounded-xl"><Phone size={30} /></span>
            <div className="ml-4">
              <label className="text-xl font-semibold">Phone</label>
              <p>+91-88XXXXXX16</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center mt-2 py-2">
            <span className="text-white bg-orange-400 p-2 rounded-xl"><Mail size={30} /></span>
            <div className="ml-4">
              <label className="text-xl font-semibold">Email</label>
              <p>info@foodiirestro.gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center mt-2 py-2">
            <span className="text-white bg-green-400 p-2 rounded-xl"><MapPin size={30} /></span>
            <div className="ml-4">
              <label className="text-xl font-semibold">Address</label>
              <p>Alpha 1, Greater Noida, Uttarpradesh, 201308</p>
            </div>
          </div>

          {/* timing */}
          <div className="flex items-center mt-2 py-2">
            <span className="text-white bg-blue-400 p-2 rounded-xl"><Clock size={30} /></span>
            <div className="ml-4">
              <label className="text-xl font-semibold">Working Timing</label>
              <p>
                Mon - Thu: 11:00 AM - 10:00 PM<br />
                Fri - Sat: 11:00 AM - 11:00 PM<br />
                Sunday: 12:00 PM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* message */}
        <div className="p-4 shadow-lg rounded-2xl mb-2 bg-gradient-to-t from-sky-200 to-sky-300 w-full lg:w-1/2">
          <div className="flex items-center flex-col justify-center p-4 gap-2 rounded-2xl m-2">
            <div className="flex items-center gap-2">
              <span className="text-red-500"><MessageCircle size={30} /></span>
              <span className="font-bold text-2xl">Send us a Message</span>
            </div>
            {showmessage && (
              <div className="capitalize bg-teal-400 p-2 w-full text-xl text-center mt-2 rounded-lg">
                ✅ Thanks for submitting your concern. We will contact you shortly.
              </div>
            )}
          </div>

          {/* useform hook */}
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="gap-3 p-3 grid grid-cols-1 md:grid-cols-2 w-full"
          >
            {/* name */}
            <div>
              <label className="font-semibold text-lg md:text-2xl">Your name*</label><br />
              <input 
                type="text" 
                className="w-full border-2 rounded-lg p-2"
                placeholder='Enter your full name'
                {...register("name", {
                  required: { value: true, message: 'This field is required.' },
                  minLength: { value: 3, message: 'Min length is 3' },
                })} 
              />
              {errors.name && <span className="text-red-700 text-sm">{errors.name.message}</span>}
            </div>

            {/* email */}
            <div>
              <label className="font-semibold  text-lg md:text-2xl">Email Address*</label><br />
              <input 
                type="email" 
                className="w-full border-2 rounded-lg p-2"
                placeholder='Enter your email address'
                {...register("email", {
                  required: { value: true, message: 'This field is required.' }
                })} 
              />
              {errors.email && <span className="text-red-700 text-sm">{errors.email.message}</span>}
            </div>

            {/* phone */}
            <div>
              <label className="font-semibold text-lg md:text-2xl">Phone Number</label><br />
              <input 
                type="tel" 
                className="w-full border-2 rounded-lg p-2"
                placeholder="Enter your phone number"
                maxLength={10}
                {...register("phone", {
                  required: { value: true, message: 'This field is required.' },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone number must be 10 digits.',
                  },
                })}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ""); 
                }} 
              />
              {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
            </div>

            {/* subject */}
            <div>
              <label className="font-semibold text-lg md:text-2xl">Subject*</label><br />
              <select 
                className="w-full border-2 rounded-lg p-2"
                {...register("subject", {
                  required: { value: true, message: 'Choose a subject.' }
                })}
              >
                <option value="">Choose a subject</option>
                <option value="reservation">Table Reservation</option>
                <option value="catering">Catering Services</option>
                <option value="complaint">Complaint</option>
                <option value="compliments">Compliments</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <span className="text-red-600 text-sm">{errors.subject.message}</span>}
            </div>

            {/* text area */}
            <div className="md:col-span-2">
              <label className="font-semibold text-lg md:text-2xl">Message*</label><br />
              <textarea 
                className="border-2 rounded-lg h-52 w-full p-2"
                placeholder="How can we help you........."
                {...register("message", {
                  required: { value: true, message: 'This field is required.' },
                  minLength: { value: 5, message: 'Type atleast 5 characters.' }
                })}
              ></textarea>
              {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
            </div>

            {/* submit button */}
            <div className="md:col-span-2 flex justify-center">
              <button 
                disabled={isSubmitting}
                type="submit"
                className="border-2  px-6 py-2 mt-2 bg-gradient-to-r from-red-500 to-orange-500 flex items-center gap-2 font-semibold transition-transform duration-200 hover:scale-105 md:rounded-2xl"
              >
                <Send size={20} /> Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* feedback card */}
      <div className="feedback">
        <div className="flex items-center flex-col">
          <div className="flex items-center text-3xl gap-3 font-bold p-3 m-3">
            <span className="text-orange-500"><Star size={40} /></span>
            <span>Share Your Feedback</span>
          </div>
          <div>
            <p className="text-[17px] p-2">
              Your feedback helps us improve our service and provide better dining experiences. Please rate us on the following aspects:
            </p>
          </div>
        </div>
        <div className="form">
          <Feedback />
        </div>
      </div>
    </div>
  )
}

export default Contact
