/* eslint-disable array-callback-return */
export const useNotEmpty = (inputsInfo, requiredFields) => {
  const errors = requiredFields.filter(field => {
    if(!inputsInfo[field] || inputsInfo[field].length <=0){
      return field;
    }
  });
  return errors;
};