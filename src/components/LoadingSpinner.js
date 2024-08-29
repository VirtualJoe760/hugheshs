import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingSpinner = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setLoading(false);
      
        if (document.readyState === 'complete') {
          handleLoad();
        } else {
          window.addEventListener('load', handleLoad);
          return () => window.removeEventListener('load', handleLoad);
        }
      }, []);

    return (
        <>
            {loading ? (
                <div
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    zIndex: 9999,
                }}
                >
                    <ClipLoader color="#3498db" size={150} />
                </div>
            ) : (
                children
            )}
        </>
    )
}

export default LoadingSpinner;

