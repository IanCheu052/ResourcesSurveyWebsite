export default function Section2({setCurrentSection}: {setCurrentSection: (section: number) => void}) {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Section 2: Professional Information</h2>    
                        <p>Go to Next Section</p>
            <button className="bg-(--rs-bg-grey-1) text-(--rs-black-1) font-bold py-4 px-12 mr-6 rounded-lg hover:bg-(--rs-grey-1) hover:text-white transition duration-300"
            onClick={() => setCurrentSection(0)}>
                Next
            </button>   
        </div> 
    );
}