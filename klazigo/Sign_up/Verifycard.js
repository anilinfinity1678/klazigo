import React from "react";
import './verifycard.css';
function Verifycard(){
  return(
    <div className="verifycard">
        <div className="toppart">
        <h2 className="cardtitle">Verify</h2>
        <p className="matter">Please enter the OTP,Sent to your mobile number</p>
        {/* <p className="matter">One Time Password(OTP)</p> */}
        <div class="form__group field">
            <input type="input" class="form__field" required />
            <label class="form__label">One Time Password(OTP)</label>
        </div>
       
        <div className="buttons">
        <button className="cbutton">Done</button>
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
export default Verifycard;