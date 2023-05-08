import React from 'react'
import { useState } from 'react'
// import "./styles/style_tab1.css"

const Tabs_1 = () => {
   const [tab,setTabs]=useState("tab1")
  return (
    <div className='container'>
        
        <div className='tab-container'>
            <div onClick={()=>setTabs("tab1")} className={tab==="tab1"?"tab active":"tab"}> Tab 1 </div>
            <div onClick={()=>setTabs("tab2")} className={tab==="tab2"?"tab active":"tab"}> Tab 2 </div>
            <div onClick={()=>setTabs("tab3")} className={tab==="tab3"?"tab active":"tab"}> Tab 3 </div>
            <div onClick={()=>setTabs("tab4")} className={tab==="tab4"?"tab active":"tab"}> Tab 4 </div>
        </div>

        <div className={tab==="tab1"?"tab-content ":"tab-content tab-content-for-tab"}>
           <h1>Content for tab1</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
        <div className={tab==="tab2"?"tab-content ":"tab-content tab-content-for-tab"} >
           <h1>Content for Tab2</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries,</p>
        </div>
        <div className={tab==="tab3"?"tab-content":"tab-content tab-content-for-tab"}>
           <h1>Content for Tab3</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
        <div className={tab==="tab4"?"tab-content":"tab-content tab-content-for-tab"}>
           <h1>Content for Tab4</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
    </div>
  )
}

export default Tabs_1