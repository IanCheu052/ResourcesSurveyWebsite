

export default function Start({setCurrentSection}: {setCurrentSection: (section: number) => void}) {
    return (
    <div>
        <h1 className="text-3xl font-bold">Hire Form</h1>
        <p className="mt-4 text-lg">Please note that this will take around 10 to 15 minutes to process.</p>
        <p className="mt-2 text-lg">Please fill in the details below as much as possible.</p>
        <p className="mt-2 text-lg">If not a field is not applicable, please leave it as "N/A".</p>
        <button className="bg-(--rs-black-1) text-(--rs-yellow-1) font-bold py-4 px-12 rounded-lg hover:bg-(--rs-black-2) hover:text-(--rs-yellow-3) transition duration-300 mt-4"
        onClick={() => setCurrentSection(1)}>
            Lets get started
        </button>
    </div>
);
}