import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const mailtoLink = `mailto:uyyalanaveenedu@gmail.com?subject=Contact from ${name}&body=Message: ${message}\n\nFrom: ${name} (${email})`;

        // Render the mailto link as an anchor element
        window.location.href = mailtoLink;
    };
    

    return (
        <div className=' justify-center'>
            <form onSubmit={handleSubmit}
                className='border-[2px] h-[600px] w-[500px] rounded-lg justify-center flex flex-col items-center gap-[3rem] p-2'>
                <h1 className='text-3xl font-bold'>Contact me</h1>
                <div className='w-3/4 h-10 '>
                    <label htmlFor="name" className='text-lg opacity-50 '>Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='h-full w-full outline-none bg-transparent border-b-2 text-xl font-medium'
                    />
                </div>
                <div className='w-3/4 h-10'>
                    <label htmlFor="email" className='text-lg opacity-50'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='h-full w-full outline-none bg-transparent border-b-2 text-xl font-medium'
                    />
                </div>
                <div className='w-3/4 h-16 relative top-4'>
                    <label htmlFor="message" className='text-lg opacity-50'>Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={10}
                        cols={30}
                        className='h-full w-full  outline-none bg-transparent border-b-2 text-xl font-medium'
                    />
                </div>
                <div className='w-full h-10 mt-16 flex justify-center'>
                    <button type="submit" className='w-3/4 h-full bg-transparent border rounded-[4px] hover:bg-white hover:text-black text-xl font-medium'>Send</button>
                </div>

            </form>

        </div>
    );
};

export default ContactForm;