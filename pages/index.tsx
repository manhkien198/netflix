import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Download from '../assets/images/download-icon.gif';
import Kids from '../assets/images/kids.png';
import Mobile from '../assets/images/mobile.jpg';
import Phone from '../assets/images/phone.jpg';
import Stranger from '../assets/images/stranger.png';
import Banner from '../components/Banner';
import Media from '../components/Media';
import Nav from '../components/Nav';
import Questions from '../components/Questions';
import '../i18n';
import GeneralSection from '../shared/components/GeneralSection';
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Netflix App</title>
        <meta name='description' content='Generated by Netflix App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Nav />
      <Banner />
      <Media />
      <GeneralSection
        title={t('titleSecondSection')}
        desc={t('descSecondSection')}
        reverse
        image={
          <div className='relative'>
            <Image className='img' src={Mobile.src} alt='Mobile' fill />
            <div className='absolute card flex items-center flex-row gap-2'>
              <Image
                className='img'
                src={Stranger.src}
                alt='Stranger'
                width={51}
                height={72}
              />
              <div>
                <h3 className='text-white'>Stranger Things</h3>
                <p className='text-blue-700'>Downloading...</p>
              </div>
              <Image
                className='img'
                src={Download.src}
                alt='Stranger'
                width={51}
                height={72}
              />
            </div>
          </div>
        }
      />
      <GeneralSection
        title={t('titleThirdSection')}
        desc={t('descThirdSection')}
        image={null}
      />
      <GeneralSection
        title={t('titleFourthSection')}
        desc={t('descFourthSection')}
        image={<Image className='img' src={Kids.src} alt='Kids' fill />}
        reverse
      />
      <GeneralSection
        title={t('titleFifthSection')}
        desc={t('descFifthSection')}
        image={<Image className='img' src={Phone.src} alt='Phone' fill />}
      />
      <Questions />
      <footer className='text-center text-white text-slate-500 bg-black py-5'>
        Netflix VietNam
      </footer>
    </>
  );
}
