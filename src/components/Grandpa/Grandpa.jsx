import { createContext } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


export const AssetConstex = createContext('Diamon')

const Grandpa = () => {

    const asset = 'Golden Ring';
    return (
        <div className="grandpaStyle">

            <AssetConstex.Provider value="Diamon">
                <h1>grandpa</h1>
                <div className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                </div>
            </AssetConstex.Provider>

        </div>
    );
};

export default Grandpa;


/**
Note:  
>> create a context and export it.
>> add provider for the context with a value. value could be anything.
>> useContex to access value in the context API.

*/ 