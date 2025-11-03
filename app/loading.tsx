import spinergif from '@/public/loader.gif';
import Image from 'next/image';

const MainLoading = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vh",
                height: "100vh"
            }}
        >
            <Image src={spinergif} alt='loading...'/>
        </div>
    )
}

export default MainLoading;