import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Contact">
            A propos
        </div>
    )
}

export default Contact;