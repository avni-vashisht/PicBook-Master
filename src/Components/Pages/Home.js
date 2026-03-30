import React,{useState} from 'react';
import './Home.css';
import '../../App.css';
import Title from '../Title';
import UploadForm from '../UploadForm';
import ImageGrid from '../ImageGrid';
import Modal from '../Modal';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
function Home(){
    const [selectedImg, setSelectedImg] = useState(null);

    return(
        <>
            <Title/>
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
            <HeroSection/>
            <Footer/>

        </>
    );
}

export default Home;