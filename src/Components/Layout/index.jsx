import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import './styles.css';

const Layout =({ children })=>{
    const context = useContext(ShoppingCartContext); 
    
    return(
        <div className={`z-2 flex flex-col items-center mt-20 bg-fixed`}
        >
            { children }
            <div className="background-blur">
                <img className="background-blur-img" src={`${context.productToShow.images[0]}`}></img>
            </div>
        </div>
    );
};

export { Layout };