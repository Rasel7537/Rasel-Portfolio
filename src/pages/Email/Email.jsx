import React, { useState } from 'react';
import Lottie from 'lottie-react';
import emailAnimationData from '../../assets/email.json'; // আপনার JSON ফাইলের পাথ

const Email = () => {
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    // ফর্মের ইনপুট ডেটা স্টেট (প্রয়োজনে যোগ করতে পারেন)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        console.log("ইমেল পাঠানো হচ্ছে...");
        
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            
            setIsLoading(false);
            setIsSent(true); 
            
            setTimeout(() => {
                setIsSent(false);
                // setFormData({ name: '', email: '', message: '' }); 
            }, 5000); 

        } catch (error) {
            console.error("ইমেল পাঠানোর সমস্যা:", error);
            setIsLoading(false);
            alert("ইমেল পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।");
        }
    };

    return (
        // পুরো সেকশনের ব্যাকগ্রাউন্ড কালো (bg-black) এবং টেক্সট সাদা (text-white)
        <section className="bg-black text-white py-16 px-4 ">
            {/* নতুন হেডিং সেকশন */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Let's Create Together
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                    Ready to bring your <span className="text-blue-400 font-bold">wildest ideas</span> to life? Let's make magic happen.
                </p>
            </div>

            {/* অ্যানিমেশন এবং ফর্মের কন্টেইনার */}
            <div 
                // Outer Container: Flexbox, Centered, Dark BG, Shadow, Rounded corners
                className="flex flex-col md:flex-row max-w-5xl mx-auto p-8 bg-black rounded-xl shadow-2xl border border-amber-300" // ফর্ম/অ্যানিমেশন এর ব্যাকগ্রাউন্ড ডার্ক গ্রে
            >
                {/* বাম পাশ: Lottie অ্যানিমেশন */}
                <div className="md:w-1/2 flex items-center justify-center p-4">
                    <div className="w-full max-w-sm">
                        <Lottie
                            animationData={emailAnimationData}
                            loop={!isSent} 
                            autoplay={true}
                        />
                    </div>
                </div>

                {/* ডান পাশ: কন্টাক্ট ফর্ম */}
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                        যোগাযোগ করুন
                    </h2>
                    
                    {isSent ? (
                        // সফল মেসেজ
                        <div className="text-center py-10 bg-green-900 bg-opacity-30 rounded-lg"> {/* সফল মেসেজের BG */}
                            <p className="text-green-400 text-xl font-semibold">
                                আপনার বার্তা সফলভাবে পাঠানো হয়েছে! 🎉
                            </p>
                            <p className="text-gray-300 mt-2">শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।</p>
                        </div>
                    ) : (
                        // ফর্ম
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Your Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500" // ইনপুট ফিল্ডের স্টাইল
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500" // ইনপুট ফিল্ডের স্টাইল
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500" // ইনপুট ফিল্ডের স্টাইল
                                ></textarea>
                            </div>

                            {/* Send Message Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-2 px-4 border border-transparent rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out ${
                                    isLoading 
                                    ? 'bg-gray-600 cursor-not-allowed' // লোডিং অবস্থায় বাটনের স্টাইল
                                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                }`}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Email;