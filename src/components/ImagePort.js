import './assets/Imageport.scss';
import nullImage from './assets/null_result.png';

export default function ImagePort(props){
  return (
      <div className="Image-port">
        <img src={props.img ? props.img : nullImage} alt="Taxon thumbnail goes here"/>
      </div>
    );
  }
