import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Panier = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Panier">
           <div class="verticalScroll">

           </div>
        </div>
    )
}

export default Panier;