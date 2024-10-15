import './Thanks.css';
import thanksImg from '../../../Assets/Thank-you.jpg';

function ThanksPage() {
    return (
        <div className='thanks-bg'>
            <img src={thanksImg} className='thanks-banner' alt='Thank you' />
        </div>
    )
}

export default ThanksPage;