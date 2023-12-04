import {Icon} from "@iconify/react";
import './VibeInformation.css';
import {NavLink} from "react-router-dom";
import Checkout from "../../../components/shared/checkout/Checkout";

const VibeInformation = ({vibe}) => {

    const {placeName}  = vibe;

    return (
        <div className='vibe-information'>
            <div className='basic-info'>
                <h3 style={{display: 'block'}}>{placeName}</h3>
                <div className='flex align-center'>
                    <span>16+ guests</span>
                    <Icon icon='mdi:dot' fontSize={24} />
                    <span>4 bedrooms</span>
                    <Icon icon='mdi:dot' fontSize={24} />
                    <span>7 beds</span>
                    <Icon icon='mdi:dot' fontSize={24} />
                    <span>3.5 baths</span>
                </div>
                <hr className='horizontal-line'/>
                <div className='flex align-center gap-12'>
                    <Icon icon='streamline:workspace-desk' fontSize={24} />
                    <div>
                        <h3>Dedicated Workspace</h3>
                        <span style={{color: '#717171'}}>A private room with wifi that’s well suited for working.</span>
                    </div>
                </div>
                <div className='flex align-center gap-12'>
                    <Icon icon='mdi:medal-outline' fontSize={24} />
                    <div>
                        <h3>Riverside is a Superhost</h3>
                        <span style={{color: '#717171'}}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span>
                    </div>
                </div>
                <div className='flex align-center gap-12'>
                    <Icon icon='mdi:location' fontSize={24} />
                    <div>
                        <h3>Great location</h3>
                        <span style={{color: '#717171'}}>100% of recent guests gave the location a 5-star rating.</span>
                    </div>
                </div>
                <hr className='horizontal-line'/>
                <div style={{marginTop: '36px'}}>
                    <div style={{marginBottom: '24px'}}>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</div>
                    <NavLink to='#'>Learn More</NavLink>
                </div>
                <hr className='horizontal-line'/>
                <div style={{marginTop: '36px'}}>
                    <div style={{marginBottom: '24px'}}>Riverside is proud to present this amazing 3 storey 1,970 sf
                        downtown penthouse with an additional 800sf private rooftop. Indoor spaces include a
                        2-storey fireplace, 10-person dining table, 6-stool kitchen island, large sectional sofa.
                        Rooftop includes a private 8-person hot tub, pergola, modern gas fireplace, huge outdoor sectional,
                        10-person outdoor dining table, BBQ. You will also be granted complimentary access to our VIP concierge service, which can create a custom
                    </div>
                    <NavLink to='#'>Learn More</NavLink>
                </div>
                <hr className='horizontal-line'/>
                <div style={{marginTop: '36px'}}>
                    <h3>Rooms</h3>
                    <div className='room-wrapper'>
                        <div className='room-desc-wrapper'>
                            <div><Icon icon='la:bed' fontSize={24}/> </div>
                            <h4>Bedroom 1</h4>
                            <div>1 queen bed</div>
                        </div>
                        <div className='room-desc-wrapper'>
                            <div><Icon icon='la:bed' fontSize={24}/><Icon icon='la:bed' fontSize={24}/> </div>
                            <h4>Bedroom 2</h4>
                            <div>2 queen bed</div>
                        </div>
                        <div className='room-desc-wrapper'>
                            <div><Icon icon='la:bed' fontSize={24}/><Icon icon='la:bed' fontSize={24}/></div>
                            <h4>Bedroom 3</h4>
                            <div>2 queen bed</div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{flex: 0.75}}>
                <Checkout vibe={vibe} />
            </div>

        </div>
    )
}

export default VibeInformation;
