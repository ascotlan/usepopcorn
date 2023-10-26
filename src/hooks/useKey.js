import {useEffect} from 'react';

export function useKey(key, onCloseMovie){
  useEffect(() => {
    const callback = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        onCloseMovie?.();
      }
    };

    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, [onCloseMovie, key]);
}