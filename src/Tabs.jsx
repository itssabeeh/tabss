import React, { useEffect, useState } from 'react'
import Tab from './Tab';
const url = "https://course-api.com/react-tabs-project"
const Tabs = () => {
    const [jobs,setJobs] = useState([]);
    const [isLoading,setIsLoading]= useState(true);
    const[company,setCompany] = useState("TOMMY")
    const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setIsLoading(false)
    }
    useEffect(()=>{
        document.title="Tabs"
        fetchJobs()
    },[])
    return (
        <> {isLoading?<h1 style={{height:"40vw" ,display:'flex',justifyContent:"center",alignItems:"center"}}>Loading</h1>: 
         <div className="container">
            <header>
                <h1 style={{fontSize:"3rem",marginBottom:".25rem"}}>Experience</h1>
                <div className="underline"></div>
            </header>
            <div className="tabs">
            <section className="buttons" style={{flex:"20%"}}>
                {company==="TOMMY"?<button className="btn btn-clicked">TOMMY</button>:<button className="btn" onClick={()=>{setCompany("TOMMY")}}>TOMMY</button>}
                {company==="BIGDROP"?<button className="btn btn-clicked">BIGDROP</button>:<button className="btn" onClick={()=>{setCompany("BIGDROP")}}>BIGDROP</button>}
                {company==="CUKER"?<button className="btn btn-clicked" >CUKER</button>:<button className="btn" onClick={()=>{setCompany("CUKER")}}>CUKER</button>}

                    {/* <button className="btn" onClick={()=>{setCompany("BIGDROP")}}>BIGDROP</button>
                <button className="btn" onClick={()=>{setCompany("CUKER")}}>CUKER</button> */}
            </section>
            <section style={{flex:"80%"}}>
                {jobs.map((job)=>{
                    return <>
                        {job.company===company&&<Tab key={job.id} {...job}/>}
                    </>
                })
            }
            </section>
            </div>
            
        </div>
}
        </>

    )
}

export default Tabs
