import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import logo from "../asset/image/logo.svg";
import pokeball from "../asset/image/pokeball.svg"

const UserInput = () => {

    const [userName, setUserName ]= useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName =()=>{
        navigate("/pokedex")
        dispatch(changeUser(userName))
    };

    return (
        <div className="interfaceInput">
            <div className="bodyInput">
                <img className="imgLogo" src={logo} alt="logo" />
                <form className="formInput">
                    <h2 className="titleInput">¡Hello trainer!</h2>
                    <p>Give me your name to start</p>
                    <input
                        className="inputLogin" 
                        type="text" 
                        value = {userName} 
                        onChange = { (e) => setUserName(e.target.value)} 
                    />
                    <button className="buttonInput"  onClick={getName}>GO</button>
                </form>
            </div>
            <footer>
                <img className="pokeball" src={pokeball} alt="" />
                <div className="lineRed">.</div>
                <div className="lineBlack">.</div>
            </footer>
        </div>
    );

}
 
export default UserInput