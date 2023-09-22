import { useContext } from "react";
import { AssetConstex } from "../Grandpa/Grandpa";


const Cousin = () => {
    const gift = useContext(AssetConstex);
    return (
        <div>
            <h3>cousin</h3>
            <div>
                special
                gift:{gift}
            </div>
            <p>context api</p>
        </div>
    );
};

export default Cousin;