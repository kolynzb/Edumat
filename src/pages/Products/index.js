import React, { useContext } from 'react'

// import { FiHeart } from "react-icons/fi";
// import { BiLoaderCircle } from "react-icons/bi";

// Custom components
import Cardlg from '../../components/Cardlg';
import Cardsm from '../../components/Cardsm';

import { AppContext } from '../../Contexts/AppContext'

const Products = () => {

    const { isLoaded, products } = useContext(AppContext)

    return (
        <div align='center'>
        <div style={{ width: '80%', paddingTop: '20px', display: 'flex', flexFlow: 'row wrap' }}>
            {isLoaded?
                <>
                    {products.map((product)=>(
                        <Cardlg productData={product}/>
                    ))}
                </>
            :
                <h3 style={{ color: '#EE9F8B' }}>Loading products....</h3>
            }
            </div>
        </div>
    )
}

export default Products
