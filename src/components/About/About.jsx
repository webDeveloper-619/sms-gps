import Panel from '../Panel/Panel'
import './about.css'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'
import OnboardingInfoBox from '../common/OnboardingInfoBox/OnboardingInfoBox'

function About(props) {
  return (
    <Panel>
      <div className='about-container'>
        <OnboardingInfoBox fill={true} width="80%" padding={"5px"}>
          <span style={{ fontSize: "16px" }}>
            About
          </span>
        </OnboardingInfoBox>
        <Scrollbars style={{height: "53vh"}}>
          <p>
            <strong>SAFE LOCATE</strong> is a result of our founder recently being first on the scene at an accident, where the injured died in his arms. The ambulance was unable to pinpoint the location due to the remoteness of the bike path.
          </p>
          <p>
            <strong>SAFE LOCATE</strong> is a free public service to assist the public in locating an incident or loved one without an app in only 2 taps via sms gps
          </p>
          <p>
            <strong>SAFE LOCATE</strong> is a simple NO APP & 2 TAP way of
            requesting or sharing a location via SMS. A request link is sent to
            a user's phone via SMS, the receiver simply taps the link and taps
            ALLOW GPS on their phone and their location is sent back to the
            requesting person or party.
          </p>
          <p>
            <strong>SAFE LOCATE</strong> was a result of being first on the
            scene at an accident 2 weeks ago and the man died in my arms. One of
            the biggest issues was that the emergency services arrived 5-10
            minutes late after driving past the location TWICE!
          </p>
          <p>
            Initially, SL has been launched for FREE private use when trying to
            locate a loved on when they have been involved in an incident, when
            lost or to provide peace of mind. We will then be launching our
            commercial offering which open up live location requests for
            emergency services, client and employee tracking for businesses such
            as insurance, roadside assist, delivery services etc.
          </p>
          <p>
            <strong>HUGH CAMPBELL</strong>
            <br /> FOUNDER
          </p>
        </Scrollbars>
      </div>
    </Panel>
  )
}

export default About
