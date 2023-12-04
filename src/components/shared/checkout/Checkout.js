import {Icon} from "@iconify/react";
import './Checkout.css';

const Checkout = ({vibe}) => {

    const {rating, reviews} = vibe;

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
            <button className='checkout-button'>Checkout</button>
            <div style={{textAlign: 'center', marginTop: '16px'}}>You won't be charged yet</div>
            <div className='flex' style={{justifyContent: 'space-between'}}>
                <div className='pricing-details-column-1 flex column gap-12'>
                    <span>$1,999 CAD x 5 nights</span>
                    <span>Cleaning fee</span>
                    <span>Service Fee</span>
                    <span>Taxes</span>
                </div>
                <div className='pricing-details-column-2 flex column gap-12'>
                    <span>$9,995 CAD</span>
                    <span>$129 CAD</span>
                    <span>$1,643 CAD</span>
                    <span>1,866 CAD</span>
                </div>
            </div>
            <hr className='horizontal-line' />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Total</h3>
                <h3>$13,633 CAD</h3>
            </div>
        </div>
    )
}

export default Checkout;
