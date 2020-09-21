import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../api/apiLinks';
import { sendRequest, postData, patchData } from '../api/requests';
import {
  productModalFailure,
  productModalRequest,
  productModalSuccess,
} from '../pages/ProductModal/actions';

const useProductForm = () => {
  const [origins, setOrigins] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrigins = async () => {
      const response = await sendRequest(PRODUCTS_ORIGINS_LINK);

      setOrigins(response.data.items);
    };

    getOrigins();
  }, []);

  const submitForm = async (data, productId) => {
    try {
      dispatch(productModalRequest());

      const {
        data: { id },
      } = productId
        ? await patchData(PRODUCTS_LINK + '/' + productId, data)
        : await postData(PRODUCTS_LINK, data);

      dispatch(productModalSuccess(id));
    } catch (error) {
      const {
        response: { data },
      } = await error;

      dispatch(productModalFailure(data.error.message));
    }
  };

  return {
    origins,
    loading: !origins,
    submitForm,
  };
};

export default useProductForm;
