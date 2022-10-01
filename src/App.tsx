import { Suspense, useRef, useState } from "react";
import HeaderAnimation from "./HeaderAnimation";
import Results from "./Results/Results";
import ResultSkeletons from "./Results/ResultSkeletons";

function App() {
  const [city, setCity] = useState('')
  const searchInput = useRef<null | HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter'){
      searchInput.current?.blur(); // removing focus from input
      setCity(searchInput.current?.value ?? '')
    }
  };

  return (
    <div className="min-h-screen py-5 flex items-center from-bgg-cyan to-bgg-yellow bg-gradient-to-tr">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <div className="text-center pb-8 lg:pb-10">
          <HeaderAnimation city={city}/>
          <h1 className="text-3xl lg:text-6xl font-extrabold tracking-tighter mb-2 text-white">
            Erkunde die Solarkraft deiner Stadt!
          </h1>
          <p className="max-w-3xl mx-auto text-md text-white">Anwendbar für deutsche Städte.</p>
        </div>
        <input ref={searchInput} onKeyDown={handleKeyDown} className="rounded-3xl p-3 pl-6 w-80 text-md focus:outline-none" placeholder="Nach welcher Stadt suchst du?"/>
        <Suspense fallback={<ResultSkeletons/>}>
          <Results city={city} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
