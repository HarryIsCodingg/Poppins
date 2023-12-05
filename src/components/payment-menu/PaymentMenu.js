import './PaymentMenu.css';
import {useSelector} from "react-redux";
import {selectChosenVibe} from "../../core/slices/vibeSelectSlice";
import {Icon} from "@iconify/react";
import Payment from "../shared/payment/Payment";

const PaymentMenu = () => {

    const {confirmation_image} = useSelector(selectChosenVibe);

    return (
        <div className='confirmation-container'>
            <img src={confirmation_image} alt='confirmation' className='confirmation-image'/>
            <div className='confirmation-description'>
                <div className='light-text'>Vibe in Montreal</div>
                <h3>Charming and Comfortable</h3>
                <div className='flex align-center'>
                    <span>1 bedroom</span>
                    <Icon icon='mdi:dot' fontSize={24} />
                    <span>2 beds</span>
                </div>
                <Payment />
            </div>
        </div>
    )
}

export default PaymentMenu;
