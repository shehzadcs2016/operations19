import React from 'react'

export default function CloseButton({ismodalStatus,Button,closeModal}){
    return(
        <>
        {ismodalStatus===true?
            <Button
            disabled
            variant="contained"
            className="mx-auto float-right"
         
          >
            Close
          </Button>:   <Button
           variant="contained"
           className="mx-auto float-right"
           onClick={closeModal}
         >
           Close
         </Button>
         }
         </>
    )
}