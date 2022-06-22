
import { useState } from "react"
import toast from "react-hot-toast"
export default function Form() {

    const [isloading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
    })
    const [errors, setErrors] = useState({});
    //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Subscribe");
    // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.firstName.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (formData.lastName.length <= 0) {
        tempErrors["lastName"] = true;
        isValid = false;
      }
    if (formData.email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (formData.phoneNumber.length <= 0) {
      tempErrors["phoneNumber"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

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
    const handleSubmit = async (e) => {
        e.preventDefault()
            setButtonText("Sending");
        // let isValidForm = handleValidation();
        // toast.loading("Sending...")
        // if (isValidForm) {
        try {
            let res = await fetch("/api/contact", {
              "method": "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              "body": JSON.stringify(formData)
            })
            // const { error } = await res.json();
            // if (error) {
            //     toast.error(error);
            //     setButtonText("Subscribe");
            //         return;
            // }
            // const { message } = await res.json();
            // toast.success(message)
      
                  //if sucess do whatever you like, i.e toast notification
            setTimeout(() => reset(), 2000);
            setButtonText("Subscribe");
          } catch (error) {
              // toast error message. whatever you wish 
              toast.error(error.message)
              setButtonText("Subscribe");
          }
        // console.log(formData)
        

    }
   return (
    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
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
            placeholder="Email"
        />
    </div>
    <div className="mb-6 text-center">
        <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
        >
            {buttonText}
        </button>
    </div>
    <hr className="mb-6 border-t" />
   
    
</form>
   )
}
