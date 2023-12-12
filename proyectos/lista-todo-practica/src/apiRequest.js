/* eslint-disable */

const apiRequest = async (url='', optionsObj =null, errorMesagge = null) => {

  try {
    const response = await fetch(url, optionsObj);
    if(!response.ok) throw Error('Please Recharge the page');
  } catch (error) {
    errorMesagge = error.message;
  } finally {
    return errorMesagge;
  }
}

export default apiRequest;