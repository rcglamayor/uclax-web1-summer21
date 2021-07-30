import React, {
    useState,
    useEffect,
    createContext,
    useContext
} from 'react';

import { mediaQueries } from './mediaQueries.js';

const defaultState = {
    media: {
        xs: true,
        sm: false,
        md: false,
        xl: false,
        portrait: true,
        landscape: false,
    },
    dimensions: {
        width: 0,
        height: 0,
    }
}

const MediaQueryContext = createContext(defaultState);

export const MediaQueryProvider = ({children}) => {

    const [mediaState, mediaStateUpdate] = useState(defaultState);

    useEffect(() => {
        const evaluateMedia = () => {
            let newMediaState = {...mediaState};

            Object.keys(mediaQueries).forEach((mediaQueryKey) => {
                // console.log('mediaQueries[mediaQueryKey]', mediaQueries[mediaQueryKey]);
                const mediaResponse = window.matchMedia(mediaQueries[mediaQueryKey]);
                // console.log('mediaResponse', mediaResponse);
                newMediaState.media[mediaQueryKey] = mediaResponse.matches;
            });

            newMediaState.dimensions = {
                width: window.innerWidth,
                height: window.innerHeight,
            }

            mediaStateUpdate(newMediaState);
        }

        evaluateMedia();

        window.addEventListener('resize', evaluateMedia);
        return () => {
            window.removeEventListener('resize', evaluateMedia);
        };

    }, []);

    return (
        <MediaQueryContext.Provider value={ mediaState }>
            {children}
        </MediaQueryContext.Provider>
    )
}

export const useMediaQuery = () => {
    return useContext(MediaQueryContext);
}

