import React from 'react';
const StarComponent = (props)=>{
    let char="*";
    let str=char.repeat(props.n);
    return(
    <div className="star-item">
        {str}
    </div>
    
    )
}
export default StarComponent;