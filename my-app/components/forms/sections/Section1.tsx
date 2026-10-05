
export default function Section1({setCurrentSection}: {setCurrentSection: (section: number) => void}) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Section 1: Personal Information</h2>

            <div className="mt-6">
                <div className="flex flex-col gap-6 sm:grid-cols-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <select>
                        <option value="name1">Mr</option>
                        <option value="name2">Mrs</option>
                        <option value="name3">Dr</option>
                    </select>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mt-4">
                        Name
                    </label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Name"/>
                </div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mt-4">
                    Date of Birth
                </label>

                 <label htmlFor="birthplace" className="block text-sm font-medium text-gray-700 mt-4">
                    Birthplace
                </label>
                <input type="date" id="dob" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>

                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
                    Email Address
                </label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Email Address"/>
                
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mt-4">
                    Phone Number
                </label>
                <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Phone Number"/>
                
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mt-4">
                    Current Address
                </label>
                <input type="text" id="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Current Address"/>

                <label>
                    Nationality
                </label>
                <select>
                    <option value="nationality1">Malaysian</option>
                    <option value="nationality2">Non-malaysian</option>
                </select>

                <label>
                    Passport Number
                </label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Passport Number"/>
                
                <label>
                    NRIC
                </label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="NRIC Number"/>

                <label>
                    Gender
                </label>
                <select>
                    <option value="gender1">Male</option>
                    <option value="gender2">Female</option>
                </select>

                <label>
                    Race
                </label>
                <select>
                    <option value="race1">Malay</option>
                    <option value="race2">Chinese</option>
                    <option value="race3">Indian</option>
                    <option value="race4">Other</option>
                </select>

                <label>
                    Religion
                </label>

                <select>
                    <option value="religion1">Islam</option>
                    <option value="religion2">Christianity</option>
                    <option value="religion3">Buddhism</option>
                    <option value="religion4">Hinduism</option>
                    <option value="religion5">Other</option>
                </select>

                <label>
                    Marital Status
                </label>
                <select>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                    <option value="separated">Separated</option>
                </select>

                <label>
                    Do you possess your own transport?
                </label>
                <select>
                    <option value="transport1">Yes</option>
                    <option value="transport2">No</option>
                </select>

                <label>
                    Do you own a drivers license?
                </label>
                <select>
                    <option value="transport1">Yes</option>
                    <option value="transport2">No</option>
                </select>
            </div>
            <p>Go to Next Section</p>
            <button className="bg-(--rs-bg-grey-1) text-(--rs-black-1) font-bold py-4 px-12 mr-6 rounded-lg hover:bg-(--rs-grey-1) hover:text-white transition duration-300"
            onClick={() => setCurrentSection(2)}>
                Next
            </button>
        </div> 
    );
}