import { useEffect, useState } from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Start from "./sections/Start";

export default function HireForm() {
   const [currentSection, setCurrentSection] = useState(0);
    const sections =[
        <Start key="0" setCurrentSection={setCurrentSection}/>,
        <Section1 key="1" setCurrentSection={setCurrentSection}/>,
        <Section2 key="2" setCurrentSection={setCurrentSection}/>,
        // <Section3 key="3"/>
    ]
    
  return (
    <div className="mt-10 gap-2">
        {sections[currentSection]}
    </div>
  );
}

