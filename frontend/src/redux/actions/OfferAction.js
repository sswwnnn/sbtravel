
import { GET_OFFER_LIST, GET_OFFER_DETAIL, GET_OFFER_BY_CODE, GET_ENABLE_OFFER_LIST } from "../constants";
import { notification } from 'antd';
import { history } from '../../App';
import { offerService } from "../../services/OfferService";


export const getOfferListAction = () => {
  return async (dispatch) => {
    try {
      const result = await offerService.getOfferList();
      if (result.data.status === 200) {
        dispatch({
          type: GET_OFFER_LIST,
          arrOffer: result.data.data,
        });
        // dispatch({
        //   type: GET_OFFER_CHUNK,
        //   offerList: result.data.data
        // })
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getEnableOfferListAction = () => {
  return async (dispatch) => {
      try {
          const result = await offerService.getEnableOfferList();
          if (result.data.status === 200) {
              dispatch({
                  type: GET_ENABLE_OFFER_LIST,
                  arrEnableOffer: result.data.data
              })
          }
      } catch (error) {
          console.log('error', error);
      }
  }
}

export const getOfferDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await offerService.getOfferById(id)
      if (result.data.status === 200) {
        dispatch({
          type: GET_OFFER_DETAIL,
          offerDetail: result.data.data[0],
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const getOfferByCodeAction = (code) => {
  return async (dispatch) => {
    try {
      const result = await offerService.getOfferByCode(code)
      if (result.data.status === 200) {
        dispatch({
          type: GET_OFFER_BY_CODE,
          offerCodeDetail: result.data.data[0],
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const addOfferAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await offerService.createOffer(formData)
      if(result.data.status === 200){
        notification.success({
          closeIcon: true,
          message: 'Success',
          description: (
            <>Added successfully</>
          ),
        });
        history.push('/admin/offermng');
      }else{
        notification.error({
          closeIcon: true,
          message: 'Error',
          description: (
            <>Discount code is duplicated</>
          ),
        });
      }
    } catch (error) {
      console.log('error', error);
      notification.error({
          closeIcon: true,
          message: 'Error',
          description: (
            <>Discount code is duplicated</>
          ),
        });
    }
  }
}

export const deleteOfferAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await offerService.deleteOffer(id)
      if (result.data.status === 200) {
        notification.success({
          closeIcon: true,
          message: "Success",
          description: (
            <>Deleted successfully</>
          )
        });
      }
      dispatch(getOfferListAction())
    }catch (e) {
      console.log(e)
    }
  };
}


export const updateOfferAction = (id, formData) => {
  return async () => {
    try {
      const result = await offerService.updateOffer(id, formData)
      if (result.data.status === 200) {
        notification.success({
          closeIcon: true,
          message: 'Success',
          description: (
            <>Updated successfully</>
          ),
        });
        history.push('/admin/offermng');
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const enableOfferAction = (id) => {
  return async (dispatch) => {
      try {
          const result = await offerService.enableOffer(id);
          notification.success({
              closeIcon: true,
              message: 'Success',
              description: (
                  <>{result.data.data.enabled ? "Enabled successfully" : "Disabled successfully"}</>
              ),
          });
          dispatch(getOfferListAction())
      } catch (error) {
          console.log('error', error);
      }
  }
}