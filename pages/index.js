import axios from 'axios';
import Artists from 'components/artists';
import Loading from 'components/artists/Loading';
import { useEffect, useReducer } from 'react';

const artistsReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_ARTISTS': {
      return { ...state, loading: false, data: action.payload };
    }
    case 'ERROR': {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  loading: true,
  data: [],
  error: null
};

export default () => {
  const [{ loading, error, data }, dispatch] = useReducer(artistsReducer, initialState);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const { data } = await axios('/users');
        dispatch({ type: 'SAVE_ARTISTS', payload: data });
      } catch (e) {
        dispatch({
          type: 'ERROR',
          payload: 'Error fetching artists. Please check your network and retry'
        });
      }
    };

    getArtists();
  }, []);

  return <>{loading ? <Loading /> : error ? <h1>{error}</h1> : <Artists artists={data} />}</>;
};
