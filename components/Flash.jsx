import Alert from '@mui/material/Alert';
import FlashMessage from './FlashMessage';

export default function Flash({type,message,duration,reset=null}){
    return (
        <>
            <FlashMessage message={message} duration={duration} reset={reset}>
                <div className='flex justify-center'>
                    <Alert severity={type}>{message}</Alert>
                </div>
            </FlashMessage>
        </>
    );
}