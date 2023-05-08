import React from 'react'
import "./styles/style_tab2.css"
import { useState } from 'react'
const tabsArr=["Tabs 1","Tabs 2","Tabs 3","Tabs 4","Tabs 5"]
const tabsContent={
    "Tabs 1":{
        h1:"Content for tab 1",
        p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    "Tabs 2":{
        h1:"Content for tab 2",
        p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries,",
    },
    "Tabs 3":{
        h1:"Content for tab 3",
        p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    "Tabs 4":{
        h1:"Content for tab 4",
        p:"printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    },
    "Tabs 5":{
        h1:"Content for tab 5",
        p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
}
const Tabs2 = () => {
  
    const [tabs,setTabs]=useState(tabsArr[0])
  return (
    <div className='container'>
        <div className='tabs-Container'>
            {tabsArr.map((tab, i) =>{
                return  <div className={tabs===tab?"tab active":"tab"} onClick={()=>setTabs(tab)}>{tab}</div>
            })}
        </div>
        <div className="tabs-content-container">
            <div className="tab-content">
                <h1>{tabsContent[tabs].h1}</h1>
                <p>{tabsContent[tabs].p}</p>
           </div>
        </div>
    </div>
  )
}

export default Tabs2