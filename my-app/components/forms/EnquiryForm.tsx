import { useState } from "react";
import { z } from "zod";

export default function EnquiryForm() {

    const checkContent = z.string().trim().max(500, "Content must be at most 500 characters long");
    const checkEmail = z.email("Invalid email address");
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

  return (
        <form className="bg-(--rs-grey-bg-1) flex flex-col mt-10 gap-6 border-2 border-(--rs-black-2) rounded-2xl shadow-lg p-10">
                <div>
                    Name
                </div>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="border-(--rs-black-2) border-2 bg-(--rs-white-1) rounded-lg p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    Email
                </div>
                <input
                    type="text"
                    placeholder="Your Email"
                    className="border-(--rs-black-2) border-2 bg-(--rs-white-1) rounded-lg p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    Subject
                </div>
                <select className="border-(--rs-black-2) border-2 bg-(--rs-white-1) rounded-lg p-2"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="general">General Inquiry</option>
                    <option value="support">Land Consultancy</option>
                    <option value="business">Service Inquiry</option>
                </select>
                <div>
                    Content
                </div>
                <textarea
                    placeholder="Your Message"
                    maxLength={500}
                    rows={6}
                    className="border-(--rs-black-2) border-2 bg-(--rs-white-1) rounded-lg p-2"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
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


