import './ContactUs.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Panel from '../Panel/Panel'
import OnboardingTextInput from '../common/OnboardingTextInput/OnboardingTextInput'
import OnboardingButton from '../common/OnboardingButton/OnboardingButton'
import { useHistory } from 'react-router-dom'
import { getContactUsState } from '../../store/sms/reducer'
import { CONTACT_US_STATE, formatContactUs, sendContactUs } from '../../store/sms/actions'
import OnboardingInfoBox from '../common/OnboardingInfoBox/OnboardingInfoBox'

function ContactUs(props) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [msg, setMsg] = useState('')
  const history = useHistory()
  const contact_us_state = useSelector(state => getContactUsState(state));
  useEffect(() => {
    dispatch(formatContactUs())
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendContactUs(name, email, phonenumber, msg))
  }

  if (contact_us_state === CONTACT_US_STATE.DONE) {
    props.handleNotification('success', 'Your message has been sent successfully');
    history.push('/');
    dispatch(formatContactUs())
  } else if (contact_us_state === CONTACT_US_STATE.FAILD) {
    props.handleNotification('error', 'Sorry. Unknown error');
    dispatch(formatContactUs());
  }

  return (
    <Panel>
      <div className='contactus-container'>
        <div className="title-wrapper">
          <OnboardingInfoBox fill={true} width="80%">
            <span className="description">hello safe locate</span>
          </OnboardingInfoBox>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <OnboardingTextInput
            type='text'
            placeholder='YOUR NAME*'
            value={name}
            onChange={setName}
            required={true}
          />
          <OnboardingTextInput
            type='email'
            placeholder="YOUR EMAIL ADDRESS*"
            value={email}
            onChange={setEmail}
            required={true}
          />
          <OnboardingTextInput
            type='text'
            placeholder='YOUR NUMBER(OPTIONAL)'
            value={phonenumber}
            onChange={setPhoneNumber}
            mask="+6\1 999 999 999"
          />
          <OnboardingTextInput
            type='text'
            placeholder='MESSAGE(OPTIONAL)'
            value={msg}
            onChange={setMsg}
          />
          <div className='btn-wrapper'>
            <OnboardingButton
              fill={true}
              type='submit'
              loading={contact_us_state === CONTACT_US_STATE.SENDING}
              height="7vh"
            >
              SEND MESSAGE
            </OnboardingButton>
          </div>
        </form>
      </div>
    </Panel>
  )
}

export default ContactUs
