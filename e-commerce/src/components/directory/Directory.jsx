import React, { useState } from "react";

import sections from "../../directory.data";

const Directory = () =>{

    
    const [sectionsData, setSectionsData] = useState(sections)
    
    console.log(sectionsData)

    return(
        <div>
          hi
        </div>
    )


}

export default Directory;