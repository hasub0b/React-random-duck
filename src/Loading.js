import React from 'react';
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: true,
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
        <Lottie options={defaultOptions} height={120} width={120} />
      ) : (
        <Lottie options={defaultOptions2} height={120} width={120} />
      )}
    </div>
  )
}

export default Loading;