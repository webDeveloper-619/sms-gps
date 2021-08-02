import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const OnboardingButton = (props:PropsType) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }
  

  return(
    <button 
      type={props.type ? props.type : 'button'}
      className={"btn " + (props.fill ? "btn-fill": 'btn-outline')} 
      onClick={handleClick}
      disabled={props.loading}>
        { props.loading  &&  <FontAwesomeIcon icon={faCircleNotch}  size="2x" spin/> }
        { !props.loading && props.children }
      </button>
  )
}

interface PropsType {
  fill?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children: any;
  loading?: boolean;
}
export default OnboardingButton;
