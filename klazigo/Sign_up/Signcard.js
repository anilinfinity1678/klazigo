import React from "react";
import './signcard.css';
function Signcard(){
  return(
    <div className="signcard">
        <div className="toppart">
        <h2 className="cardtitle">Sign Up</h2>
        <p className="matter">Please enter your mobile number to recieve</p>
        <p className="matter">One Time Password(OTP)</p>
        <div class="form__group field">
            <input type="input" class="form__field" required />
            <label class="form__label">Enter your mobile number</label>
        </div>
        
        <div className="buttons">
        <button className="cbutton">Continue</button>
        </div> 
        </div>
        <div className="lowerpart">
        <p className="acc">Have an Account,<span className="blues">Log In</span></p>
        <p className="Tnc">By Signing up,you agree to our</p>
        <p className="Tnc"><a className="bottomline" href="" >Terms and Conditions</a> and <a className="bottomline" href="">Privacy Policy</a></p>
        </div>
   </div>


  );
}
export default Signcard;