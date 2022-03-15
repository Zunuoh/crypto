import React from 'react'
import { Bell } from 'react-feather';

const DashHeader = () => {
    return (
             <div className="block-example border-bottom border-dark" style={{flexDirection:"row", display:"flex", justifyContent:"space-around", height:70, backgroundColor:"white", alignItems:'center'}}>
            <div>CRYBSE</div>
            <div style={{width:"45%", height:40, backgroundColor:"orange", borderRadius:20, alignItems:"center", display:"flex"}}>
                jjff
            </div>
            <div>Saturday, 11 September, 2021</div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
                <div style={{backgroundColor:"orange", borderWidth:2, borderRadius:20, width:40,height:40}}>h</div>
                <div style={{marginLeft:5}}>Akhdan Saris</div>
            </div>
            <div>
                <Bell/>
            </div>
            
        </div>
       
    )
}

export default DashHeader
