import React, { useEffect, useState } from 'react'


const Sampledata = {
"name":"Menu1",
"link":"http://gooogle.com",
"subitems":[
  {
     "name":"Menu2",
     "link":"http://gooogle.com",
     "subitems":[
        {
           "name":"Menu3",
           "link":"http://gooogle.com"
        }],
        "name":"Menu4",
        "link":"http://gooogle.com",
        "subitems":[
            {
               "name":"Menu2",
               "link":"http://gooogle.com"
            }]
  }]
}


export const child_iteration = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const dataExtraction = () => {
            for(let item of Sampledata){
                if(item.subitems){
                    dataExtraction(item)
                }
                else{
                    setData(prev => [...prev, item.name])
                }
            }
        }
        console.log(data);
    }, [data])
    


  return (
    <div>child_iteration</div>
  )
}
