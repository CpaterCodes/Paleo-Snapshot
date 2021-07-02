import { useState, useEffect} from 'react';
import './assets/Imageport.scss';
import nullImage from './assets/null_result.png';

export default function ImagePort(props){
  const [img, setImg] = useState(nullImage);

  useEffect(() => { setImg(props.img ? props.img : nullImage); }, [props.img]);

  return (
    <div className="Image-port">
      <img
        src={img}
        alt="Taxon thumbnail goes here"
        data-testid={img}
      />
    </div>
  );
}
