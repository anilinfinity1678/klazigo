import './App.css';
import Logincard from './Logincard';
import './login.css';
import Slideshow from './Slideshow';
function Login() {
  return (
      <div className="login">
        <table >
        <tr>
          <td><Slideshow/></td>
          <td><Logincard/><img className='into' src='/images/into.png'/></td>
        </tr>
      </table>
      </div>
      
  );
}

export default Login;