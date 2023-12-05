
const Payment = () => {
    return (
        <>
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
        </>
    )
}

export default Payment;

