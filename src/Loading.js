import React from 'react';
import Lottie from 'react-lottie';
import * as loading from './loadinganimation.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

const Loading = ({loading}) => {
  return (
    <div style={{marginTop: '10rem'}}>
      {!loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <Lottie options={defaultOptions2} height={400} width={400} />
      )}
    </div>
  )
}

export default Loading;