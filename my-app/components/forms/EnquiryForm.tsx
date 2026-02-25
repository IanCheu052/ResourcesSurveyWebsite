export default function EnquiryForm() {
    const handleSubmit = async () => {
        await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                subject: "Contact Form Submission",
                html: "<h1>Contact Form Submission</h1><p>A new contact form submission has been received.</p>",
                user: "email"
            })
        });
    };

  return (
        <form className="bg-(--rs-grey-bg-1) flex flex-col mt-10 gap-6 border-2 border-(--rs-black-2) rounded-2xl shadow-lg w-full p-10">
                <div>
                    Your Name
                </div>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="border-(--rs-black-2) border-2 bg-(--rs-white-1) rounded-lg p-2"
                />
                <div>
                    Your Email
                </div>
                <input
                    type="text"
                    placeholder="Your Email"
                    className="border-(--rs-black-2) border-2 bg-(--rs-white-1) rounded-lg p-2"
                />
                <div>
                    Your Interest
                </div>
                <select className="border-(--rs-black-2) border-2 bg-(--rs-white-1) rounded-lg p-2">
                    <option value="general">General Inquiry</option>
                    <option value="support">Land Consultancy</option>
                    <option value="business">Business</option>
                </select>
                <div>
                    Content
                </div>
                <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="border-(--rs-black-2) border-2 bg-(--rs-white-1) rounded-lg p-2"
                />  
                <div className="items-center">

                <button className="bg-(--rs-black-1) text-(--rs-yellow-1) font-bold py-4 px-12 rounded-lg hover:bg-(--rs-black-2) hover:text-(--rs-yellow-3) transition duration-300 w-fit"
                onClick={() => handleSubmit()}>
                    Submit
                </button>
            </div>
        </form>
  );
}