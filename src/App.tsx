import { Suspense, useRef, useState } from "react";
import Results from "./Results/Results";
import ResultSkeletons from "./Results/ResultSkeletons";

// TODO: Add proper loading indicator
function App() {
  const [city, setCity] = useState('')
  const searchInput = useRef<null | HTMLInputElement>(null);

  function handleClick(){
    searchInput.current?.blur(); // removing focus from input
    setCity(searchInput.current?.value ?? '')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleClick()
  };

  return (
    <div className="h-screen flex items-center bg-gradient-to-b from-yellow-300 via-blue-300 to-indigo-300">
      <div className="max-w-5xl mx-auto px-4 xs:px-6 flex flex-col items-center">
        <div className="text-center pb-8 lg:pb-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
            Erkunde die Solarkraft deiner Stadt!
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">Anwendbar innerhalb von Deutschland. Limitiert auf 5.000 PV Anlagen je Stadt.</p>
        </div>
        <Suspense fallback={<ResultSkeletons/>}>
          <Results city={city} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
