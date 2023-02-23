import React, { useEffect, useState } from 'react'
import axios from "axios"
const PORT = "/api/v1"
const imgPath = "/public/upload/"


const Messages = () => {

useEffect(()=>{
    GetmessagesData();
},[])

const [msgKart,setMsgKart]=useState([]);
const GetmessagesData = async()=>{
    try{
        let res = await axios.get(`${PORT}/Allmessages`)
        
        const msg = res.data.msgData;
        
        setMsgKart(msg.reverse())
    }
    catch(err){
        console.log("err",err)
    }
}


const deletemsg = async(id)=>{
    try{
        let res = await axios.delete(`${PORT}/message/${id}`)
        alert(res.data.message);
        await GetmessagesData();
    }
    catch(err){
        console.log("err",err)
    }
}






    return (
        <>
            <div className="container-fluid pl-0 ">

                <div className="row">

                    <div className="col-md-12 ml-0 ">
                        <div className="card border-dark">
                            <div className="card-header bg-primary">
                                <h5>messages</h5>
                            </div>
                            <div className="card-body">


                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th >Date</th>
                                            <th >info</th>
                                            <th className='col-md-6'>Message</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                        {
                                            msgKart.map((cur)=>{
                                            return(<tr>
                                                <td>{cur.date}</td>
                                                <td>
                                                    <p>{cur.name}</p>
                                                    <p>{cur.email}</p>
                                                    <p>{cur.phone}</p>
                                                    </td>
                                                <td>{cur.message}</td>
                                                <td><button className='btn btn-danger'
                                                onClick={()=>{
                                                    deletemsg(cur._id)
                                                }}
                                                >Delete</button></td>
                                            </tr>)
                                            })
                                        }
                                    </tbody>
                                </table>


                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages