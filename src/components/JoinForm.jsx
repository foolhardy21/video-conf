import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinForm() {
    const hmsActions = useHMSActions();
    const [inputValues, setInputValues] = useState({
        name: "",
    });

    const handleInputChange = (e) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        hmsActions.join({
            userName: inputValues.name,
            authToken: process.env.REACT_APP_GUEST_KEY
        });
    };

    return (
        <form className="card-dim card-shadow-xs flx flx-column flx-center pd-xlg" onSubmit={handleSubmit}>
            <p className="txt-lg txt-primary txt-cap mg-btm-lg">join the room</p>
            <input
                required
                value={inputValues.name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="enter your name"
                className="input input-s txt-md pd-xs mg-btm-s"
            />
            <button className="btn-solid txt-secondary bg-secondary txt-md txt-cap pd-xs">join as guest</button>
        </form>
    );
}

export default JoinForm