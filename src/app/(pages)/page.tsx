'use client';

import Image from 'next/image';
import MainLogo from './../../assets/images/home/main_image.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/navigation';
import dummyImage from './../../assets/images/dummy-background.png';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  });

  const [isLike, setIsLike] = useState(false);
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [isSidemModalOpen, setIsSidemModalOpen] = useState(false);

  const like = () => {
    setIsLike(!isLike);
  };
  const showBottomModal = () => {
    setIsBottomModalOpen(!isBottomModalOpen);
  };
  const showSideModal = () => {
    setIsSidemModalOpen(!isSidemModalOpen);
  };

  if (!isLoading) {
    return (
      <main className='min-h-screen bg-[#FF8E26] flex flex-col justify-center items-center'>
        <div className='mb-[96px]'>
          <Image src={MainLogo} width={243} height={291} alt='main logo' />
        </div>
        <div className='text-[14px] font-black'>오늘은 모묵찌?</div>
      </main>
    );
  } else {
    return (
      <main className='relative'>
        <div className={'bgWrap'}>
          <Navigation />
          <Image
            alt='dummy images'
            src={dummyImage}
            placeholder='blur'
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
          />

          <div className='absolute bottom-32 p-8 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <div className='mb-2 flex justify-center items-center w-11 h-6 rounded-2xl border border-orange-400 text-orange-400'>일식</div>
                <h2 className='text-white text-3xl font-black mb-3'>칸다소바 부평점</h2>
                <div className='mb-2 flex items-center'>
                  <Image src={'/map-pin-solid.png'} alt='place' width={12} height={12} />
                  <span className='text-2xl text-white'>현재 위치에서 23m 거리에 있습니다. </span>
                </div>
                <div className='mb-2 flex items-center'>
                  <Image src={'/house-solid.png'} alt='house' width={9} height={9} />
                  <span className='text-base text-white'>인천 부평구 부평대로36번길 5 1층</span>
                </div>
              </div>
              <div onClick={like}>
                {isLike ? (
                  <>
                    <Image src={'/activate-heart-solid.png'} alt='heart' width={24} height={24} />
                    <span className='text-white'>{'1324'.toLocaleString()}</span>
                  </>
                ) : (
                  <>
                    <Image src={'/heart-solid.png'} alt='heart' width={24} height={24} />
                    <span className='text-white'>{'1324'.toLocaleString()}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className='absolute bottom-3 flex justify-center items-center w-full'>
            <button className='w-56 h-2 bg-orange-500 text-center' onClick={showBottomModal}></button>
          </div>
        </div>

        {isBottomModalOpen && (
          <div className='absolute bottom-0 h-3/5 bg-white w-full text-black text-center p-5 rounded'>
            <button className='' onClick={() => setIsBottomModalOpen(false)}>
              닫기
            </button>
            <h2 className='text-center text-black text-2xl font-black mb-5'>오구당당 부평본점</h2>
            <div className='flex justify-center items-center mb-2'>
              <div className='flex justify-center items-center w-11 h-6 rounded-2xl border border-orange-400 text-orange-400 mr-3'>일식</div>
              <span>좋아요 {'1324'.toLocaleString()}</span>
            </div>
          </div>
        )}

        {isSidemModalOpen && (
          <div className='absolute right-0 bottom-0 h-4/5 w-4/5 bg-white w-full text-black text-center p-5 rounded'>
            <button className='' onClick={() => setIsSidemModalOpen(false)}>
              닫기
            </button>
            <h2 className='text-center text-black text-2xl font-black mb-5 flex items-center'>최근 본 가게</h2>
            <h2 className='text-center text-black text-2xl font-black mb-5 flex items-center'>
              <div className='w-11 h-6 text-base rounded-2xl border border-orange-400 text-orange-400 mr-3'>일식</div>오구당당 본점
            </h2>
            <h2 className='text-center text-black text-2xl font-black mb-5 flex items-center'>
              <div className='w-11 h-6 text-base rounded-2xl border border-orange-400 text-orange-400 mr-3'>일식</div>오구당당 본점
            </h2>
            <h2 className='text-center text-black text-2xl font-black mb-5 flex items-center'>
              <div className='w-11 h-6 text-base rounded-2xl border border-orange-400 text-orange-400 mr-3'>일식</div>오구당당 본점
            </h2>
            <h2 className='text-center text-black text-2xl font-black mb-5 flex items-center'>
              <div className='w-11 h-6 text-base rounded-2xl border border-orange-400 text-orange-400 mr-3'>일식</div>오구당당 본점
            </h2>
            <h2 className='text-center text-black text-2xl font-black mb-5 flex items-center'>
              <div className='w-11 h-6 text-base rounded-2xl border border-orange-400 text-orange-400 mr-3'>일식</div>오구당당 본점
            </h2>
          </div>
        )}
      </main>
    );
  }
};
export default MainPage;
