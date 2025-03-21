import { useEffect, useState } from "react"
import Banner from "./components/banner"
import Footer from "./components/footer"
import Main from "./components/main"
import Navbar from "./components/navbar"
import Loading from "./components/loading"
import Error from "./components/error"
import { BlogProvider } from "./context/BlogContext"

function App() {

  const [currentYear] = useState<number>(new Date().getFullYear());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const req = await fetch("https://jsonplaceholder.typicode.com/posts/");
      const res = await req.json();
      setData(res);
      
    } catch (error) {
      setError(error as string );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchData() },[]); 
  
  return (
    <BlogProvider>
      <div className="flex flex-col items-center h-auto w-full">
        <div className="flex flex-col h-full min-h-screen w-full md:w-full lg:w-8/12 px-4 md:px-6 lg:px-10 py-4 gap-4">
          <Navbar />
          <Banner data={data} />
          {
            loading ? <Loading /> : error ? <Error /> : <Main data={data} />
          }
          <Footer currentYear={ currentYear } />
        </div>
      </div>
    </BlogProvider>
  )
}

export default App
