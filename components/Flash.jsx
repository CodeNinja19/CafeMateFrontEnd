import Alert from '@mui/material/Alert';
import FlashMessage from './FlashMessage';

export default function Flash({type,message,duration}){
    return (
        <>
            <FlashMessage duration={duration}>
                <div className='flex justify-center'>
                    <Alert severity={type}>{message}</Alert>
                </div>
            </FlashMessage>
        </>
    );
}