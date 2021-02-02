import React from 'react'
import {FiChevronsRight} from 'react-icons/fi'

const Tab = ({company,dates,duties,title}) => {
    return (
        <div className="tab-container">
            <h1 style={{margin:"0"}}>{title}</h1>
            <div style={{display:"flex",justifyContent:"flex-start"}}>
            <h2 style={{fontSize:"1rem",backgroundColor:"#A89C94FF",padding:".5rem",borderRadius:"10%"}}>{company}</h2>
            </div>
            <p style={{color:"#A89C94FF"}}>{dates}</p>
            {duties.map((duty)=>{
                return <div style={{display:'flex',flexDirection:"row"}}>
                <div style={{alignSelf:"center",color:" #6dac4fff"}}>
                <FiChevronsRight style={{paddingRight:"1em"}}/>
                </div>
                <p>{duty}</p>
                </div>
            })}
        </div>
    )
}

export default Tab
