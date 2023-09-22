import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
        <div className="flex">
            <Myself asset={asset}></Myself>
            <Brother></Brother>
            <Sister></Sister>
        </div>
        </div>
    );
};

export default Dad;