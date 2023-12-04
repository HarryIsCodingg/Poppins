import './VibeListingPage.css';
import {useSelector} from "react-redux";
import {selectChosenVibe} from "../../core/slices/vibeSelectSlice";
import VibeAddress from "../../components/vibe-address/VibeAddress";
import SwitchVibes from "./switch-vibes/SwitchVibes";
import VibeInformation from "./vibe-information/VibeInformation";


const VibeListingPage = () => {
    const vibe = useSelector(selectChosenVibe);

    return (
        <div className='vibe-listing-page'>
            <VibeAddress vibe={vibe} />
            <SwitchVibes vibe={vibe}/>
            <VibeInformation vibe={vibe} />
        </div>
    )
}

export default VibeListingPage;
