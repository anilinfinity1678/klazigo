import './App.css';
import Verifycard from './Verifycard';
import './verify.css'
import Slideshow from './Slideshow';
function Verify() {
  return (
      <div className="verify">
        <table >
        <tr>
          <td><Slideshow/></td>
          <td><Verifycard /><img className='into' src='/images/into.png'/></td>
        </tr>
      </table>
      </div>
      
  );
}

export default Verify;