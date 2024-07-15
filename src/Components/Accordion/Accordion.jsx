import React from 'react'
import './Accordion.css'
import {useState} from 'react'
//  import {Accordion} from 'react-bootstrap'

const MyAccordion = () => {

  const data = [
    {
        question: "How much does it cost to be a wastexpert agent",
        answer:"It is initially totally free as we provide you with everything you need to get set up. After the first <br/> month when you must have started making money with us, a monthly charge <br/> of 5000 is charged for the first year after which it becomes 2000 monthly."
   },

    {
        title: "What is the payment plan of wastexpert like?",
       description:"It is initially totally free as we provide you with everything you need to get set up. After the first <br/> month when you must have started making money with us, a monthly charge <br/> of 5000 is charged for the first year after which it becomes 2000 monthly."
    },

    {
        title: "As a new wastexpert Agent/ collector, will i be trained on how to transacts on wastexpert?",
     description:"It is initially totally free as we provide you with everything you need to get set up. After the first <br/> month when you must have started making money with us, a monthly charge <br/> of 5000 is charged for the first year after which it becomes 2000 monthly."
   },

    {
        title: "What is the size of space i need?",
       description:"It is initially totally free as we provide you with everything you need to get set up. After the first <br/> month when you must have started making money with us, a monthly charge <br/> of 5000 is charged for the first year after which it becomes 2000 monthly."
   },

    
    {
     title: "Can anyone work as agent or collector, Also, can i operate from anywhere in Nigeria?",
      description:"It is initially totally free as we provide you with everything you need to get set up. After the first <br/> month when you must have started making money with us, a monthly charge <br/> of 5000 is charged for the first year after which it becomes 2000 monthly."
    },]

    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
     if (selected ===i){
        return setSelected(null)
     }
     setSelected(i)
    }

  return (
          <div className='wrapper'>
            <div className='Accordion'>
                
                {data.map((item,i)=>{
                  return <div className='item'>
                    <div className='title' onClick={()=>toggle(i)}>
                       <h2>{item.question}</h2>
                       <span>{selected== i ? 'content show': 'content'}</span>
                       
                        </div>
                        
                        <div className='content'>{item.answer}</div>
                    </div>
                })}
            </div>

            

         
          
          </div>
  )
}

export default MyAccordion