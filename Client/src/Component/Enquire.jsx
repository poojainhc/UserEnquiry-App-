import { memo } from "react";
import EnquireList from "./EnquireList";
import axios from "axios";


const Enquire = () => {
  let handleFormSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name: e.target.username.value,
      email: e.target.useremail.value,
      phone: e.target.userphone.value,
      message: e.target.usermessage.value,
    };
    console.log(formData);

    axios.post("http://localhost:3004/web/api/enquiry-insert", formData)
    .then((response) => {
      console.log("Enquiry submitted successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error submitting enquiry:", error);
    });
  }
   
  

  return (
    <div>
      <h1 className="text-3xl text-center font-bold bg-amber-500 mb-6">
        User enquiry
      </h1>

      <div className="grid grid-cols-[30%_auto] gap-6 m-4 p-4">
        <div className="max-w-md p-4 bg-gray-200 border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-400 dark:border-gray-700">
          <form className="space-y-6 " onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="username"
                placeholder="Your Name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="useremail"
                placeholder="Your Email"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="userphone"
                placeholder="Your Phone Number"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="usermessage"
                rows="4"
                placeholder="Your Message"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right column (optional content) */}
    
        <EnquireList />
      </div>
    </div>
  );
};

export default memo(Enquire);
