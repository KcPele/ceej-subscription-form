
import { useState, useRef } from "react"
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser';
import { runFireWorks } from '../lib/utils'

export default function Form() {
  const form = useRef()
    const [isloading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
    })

  const [buttonText, setButtonText] = useState("Subscribe");
    // Validation check method

    const handleChange = (e) => {
        
        setFormData(prevState => {
            return {...prevState,  [e.target.name]: e.target.value}
        })

    }
    const reset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: ""
        })
    }
    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setButtonText("Sending");
        await emailjs.sendForm("service_62otgdn", "template_cqit2ct", form.current, 'Ehq0w-lXe9JXidXML')
          .then((result) => {
            toast.success("Email sent!")
              console.log(result.text);
            setTimeout(() => reset(), 2000);
            setButtonText("Subscribe");
            runFireWorks()
            setIsLoading(false)
          }, (error) => {
              console.log(error.text);
              toast.error(error.text)
              setButtonText("Subscribe");
              setIsLoading(false)
          });
      };
   
   return (
    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={sendEmail} ref={form}>
    <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                First Name
            </label>
            <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                type="text"
                required
                placeholder="First Name"
            />
        </div>
        <div className="md:ml-2">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Last Name
            </label>
            <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                type="text"
                required
                placeholder="Last Name"
            />
        </div>
    </div>
    <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
            Phone
        </label>
        <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
            type="tel"
            required
            placeholder="Phone Number"
        />
    </div>
    <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
            Email
        </label>
        <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            type="email"
            required
            placeholder="Email"
        />
    </div>
    <div className="mb-6 text-center">
        <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isloading}
        >
            {buttonText}
        </button>
    </div>
    <hr className="mb-6 border-t" />
   
    
</form>
   )
}
