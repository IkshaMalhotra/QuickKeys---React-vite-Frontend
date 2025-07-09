import React from 'react'

const Subscribe = () => {
    return (
        <div>

            <div className="bg-white m-20 flex flex-col items-center justify-center text-center space-y-2">
                <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
                <p className="md:text-lg text-gray-500/70 pb-8">
                    Subscribe to get the latest offers, and new arrivals.
                </p>
                <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                    <input
                        className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                        type="email"
                        placeholder="Enter your email id"
                        required
                    />
                    <button type="submit" className="md:px-12 px-8 h-full text-white bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer rounded-md rounded-l-none">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
