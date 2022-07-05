import React from "react";
import './logincard.css';
function Logincard(){
  return(
    <div className="logincard">
        <div className="toppart">
        <h2 className="cardtitle">Login</h2>
        <p className="matter">Get access to your account</p>
        <div class="form__group field">
            <input type="input" class="form__field" required />
            <label class="form__label">Enter your mobile number or E-mail ID</label>
        </div>
        <div className="buttons">
        <button className="cbutton">Continue</button>
        </div> 
        </div>
        <div className="lowerpart">
        <p className="acc">New on Klazigo,<span className="blues">Sign Up</span></p>
        <p className="Tnc">By Signing up,you agree to our</p>
        <p className="Tnc"><a className="bottomline" href="" >Terms and Conditions</a> and <a className="bottomline" href="">Privacy Policy</a></p>
        </div>
   </div>


  );
}
export default Logincard;