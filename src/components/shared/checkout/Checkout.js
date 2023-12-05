import {Icon} from "@iconify/react";
import './Checkout.css';
import {useNavigate} from "react-router-dom";
import Payment from "../payment/Payment";

const Checkout = ({vibe}) => {

    const {rating, reviews} = vibe;
    const navigateTo = useNavigate();

    const handleCheckout = () => {
        navigateTo(`${vibe.name}/checkout`);
    }
    return (
        <div className='checkout-container'>
            <div className='pricing-details'>
                <h2>$1,999 CAD/night</h2>
                <div className='flex align-center'>
                    <span><Icon icon='material-symbols:star' fontSize={20}/></span>
                    <span>{rating}</span>
                    <Icon icon='mdi:dot' fontSize={24} />
                    <span>{reviews} reviews</span>
                </div>
            </div>
            <div className='booking-date'>
                <div className='booking-date-row-1'>
                    <div className='booking-date-column-1'>
                        <h3 style={{fontSize: '16px'}}>CHECK-IN</h3>
                        <div>09-12-2023</div>
                    </div>
                    <div>
                        <h3 style={{fontSize: '16px'}} className='booking-date-column-1'>CHECK-OUT</h3>
                        <div>14-12-2023</div>
                    </div>
                </div>
                <div style={{padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <h3 style={{fontSize: '16px'}}>GUESTS</h3>
                        <div>16+ guests</div>
                    </div>
                    <Icon icon='ep:arrow-down' fontSize={24} />
                </div>
            </div>
            <button className='checkout-button cursor' onClick={handleCheckout}>Checkout</button>
            <div style={{textAlign: 'center', marginTop: '16px'}}>You won't be charged yet</div>
            <Payment />
        </div>
    )
}

export default Checkout;
