import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Filter from './components/Filter'
import Nav from './components/Nav'
import {filterData, apiUrl} from './data'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'


const App = () => {
  const [courses, setCourses]= useState(null);
  const [loading, setLoading]= useState(true);
  const [filter, setFilter]= useState(1);


  async function fetchData() {
      setLoading(true);
      try{
        const res= await fetch(apiUrl);
        const data= await res.json();
        setCourses(data?.data);
      }
      catch(e){
        toast.error("Something went wrong");
        console.log(e);
      }
      setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-bgDark2'>
      <Nav/>
      <Filter filterData= {filterData} filter={filter} setFilter={setFilter}/>
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap ">
        { loading? (<Spinner/>): (<Cards courses={courses} filter={filter}/>) }
      </div>
    </div>
  )
}

export default App
