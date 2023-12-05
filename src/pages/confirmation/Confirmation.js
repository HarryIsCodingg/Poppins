import './Confirmation.css';
import confirmationImage from '../../assets/images/confirmation.png';
import PaymentMenu from "../../components/payment-menu/PaymentMenu";

const Confirmation = () => {
    return (
        <div className='confirmation-page flex'>
            <div className='success-container align-center'>
                <h1>Payment</h1>
                <img src={confirmationImage} alt='confirmation' className='success-image'/>
                <h1>Thank you!</h1>
                <div className='light-text'>We sent an email to **@gmail.com <br/>
                    Check confirmation receipt in the email</div>
            </div>
            <PaymentMenu />
        </div>
    )
}

export default Confirmation;
