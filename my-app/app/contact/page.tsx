import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="bg-(--rs-grey-bg-1) fill-background min-h-screen">
        <Header/>
        <div className="grid grid-cols-2 items-center justify-center min-h-screen px-40 gap-20 pb-40">
            <div className="flex flex-col items-start gap-10">
                <div className="text-5xl font-bold text-left">
                Contact Us
                </div>
                <img src="/icons/undraw_people-search_xpq4 (2).svg" alt="Contact Us" className="w-150 h-150" />
                
            </div>
            <div>
                <button className="bg-(--rs-bg-grey-1) text-(--rs-black-1) font-bold py-4 px-12 mr-6 rounded-lg hover:bg-(--rs-grey-1) hover:text-white transition duration-300">
                    For Enquiry
                </button>
                <button className="bg-(--rs-bg-grey-1) text-(--rs-black-1) font-bold py-4 px-12 rounded-lg hover:bg-(--rs-grey-1) hover:text-white transition duration-300">
                    For Hiring
                </button>
            
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

                <button className="bg-(--rs-black-1) text-(--rs-yellow-1) font-bold py-4 px-12 rounded-lg hover:bg-(--rs-black-2) hover:text-(--rs-yellow-3) transition duration-300 w-fit">
                    Submit
                </button>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
}