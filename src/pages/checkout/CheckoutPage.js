import './CheckoutPage.css';
import {Icon} from "@iconify/react";
import PaymentMenu from "../../components/payment-menu/PaymentMenu";
import {useNavigate} from "react-router-dom";

const CheckoutPage = () => {

    const navigateTo  = useNavigate();

    const handlePayment = () => {
        navigateTo('confirmation');
    }

    return (
        <div className='checkout-page flex'>
            <div>
                <h1 style={{fontWeight: 'bolder', marginBottom: '36px'}}>Payment</h1>
                <div>
                    <span className='light-text'>Dates</span>
                    <div className='flex align-center space-between'>
                        <h4 style={{fontWeight: 'bolder'}}>9 December, 2023 - 14 December, 2023</h4>
                        <div className='edit-button'>Edit</div>
                    </div>
                </div>
                <hr className='horizontal-line' />
                <div style={{marginTop: '36px'}}>
                    <span className='light-text'>Guests</span>
                    <div className='flex align-center space-between'>
                        <h4 style={{fontWeight: 'bolder'}}>2 Guests</h4>
                        <div className='edit-button'>Edit</div>
                    </div>
                </div>
                <hr className='horizontal-line' />

                <div className='payment' style={{marginTop: '36px'}}>
                    <span className='light-text'>Payment for booking</span>
                    <div className='flex align-center space-between payment-element'>
                        <div className='flex align-center gap-12'>
                            <Icon icon='logos:visa' fontSize={24} />
                            <h3>Credit or Debit Visa card</h3>
                        </div>
                        <Icon icon='ep:arrow-down' fontSize={24} />
                    </div>
                    <div className='payment-element flex column' style={{padding: '12px', gap: '8px'}}>
                        <div className='light-text'>Card Number</div>
                        <div>4218 5600 0008 1456</div>
                    </div>
                    <div className='flex space-between gap-12'>
                        <div className='payment-element flex column' style={{padding: '12px', gap: '8px', flex: 1}}>
                            <div className='light-text'>Expiration</div>
                            <div>04/24</div>
                        </div>
                        <div className='payment-element flex column' style={{padding: '12px', gap: '8px', flex: 1}}>
                            <div className='light-text'>CVV</div>
                            <div>044</div>
                        </div>
                    </div>
                    <div className='flex space-between gap-12'>
                        <div className='payment-element flex column' style={{padding: '12px', gap: '8px', flex: 1}}>
                            <div className='light-text'>Zip Code</div>
                            <div>H8N 2N1</div>
                        </div>
                        <div className='payment-element flex column' style={{padding: '12px', gap: '8px', flex: 1}}>
                            <div className='light-text'>Country</div>
                            <div>Canada</div>
                        </div>
                    </div>
                    <div className='light-text' style={{marginTop: '24px'}}>
                        By selecting the button below, I agree to the House Rules, Safety Disclosures, Cancellation Policy, and the Guest Refund Policy. I also agree to pay the total amount shown, which includes Service Fees.
                    </div>
                </div>
                <button className='pay-button cursor' onClick={handlePayment}>Book and pay</button>
            </div>
            <PaymentMenu />
        </div>
    )
}

export default CheckoutPage;
