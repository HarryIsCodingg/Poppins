import './SwitchVibes.css';
import {Icon} from "@iconify/react";
import {useState} from "react";

const SwitchVibes = ({vibe}) => {

    const [vibeIndex, setVibeIndex] = useState(0);
    const currentVibe = vibe.vibes[vibeIndex];
    const { vibeName, vibeIcon, images } = currentVibe;
    const [video, setVideo] = useState(currentVibe.video);

    const switchVibe = () => {
        setVibeIndex((vibeIndex+1) % vibe.vibes.length);

    }

    return (
        <div className='vibe-container'>
            <div className='video-container'>
                <div className='vibe-description flex'><Icon icon={vibeIcon} fontSize={24} />
                    <h3 style={{color: 'white'}}>{vibeName}</h3>
                </div>
                <video autoPlay loop muted className='video-element' width="100%" height="100%" >
                    <source src={video} type="video/mp4"/>
                </video>
                <div className='flex gap-12 vibe-switch align-center cursor'>
                    <Icon icon='tabler:switch-2' fontSize={24}/>
                    <span onClick={switchVibe}>Vibe Switch</span>
                </div>
            </div>
            <div className='images-wrapper flex'>
                <div className='listing-column-1'>
                    <img src={images.at(0)} alt='Winter' className='listing-image'/>
                </div>
                <div className='listing-column-2 listing-image'>
                    <img src={images.at(1)} alt='Winter'/>
                    <img src={images.at(2)} alt='Winter'/>
                </div>
            </div>
        </div>
    )
}

export default SwitchVibes;
