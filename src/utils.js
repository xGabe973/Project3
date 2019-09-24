import {
    isEqual,
    isNull,
    keys,
    pickBy
  } from 'lodash';

  import {encode} from 'querystring';

  export const calculateBMI = (state) => {
    let kg = state.weight * 0.45;
    let m = ((state.feet * 12) + state.inches) * 0.025;
    return (kg / Math.pow(m,2)).toFixed(1);
};

export const validateForm = (state) => {
    return isEqual(
        keys(
            pickBy(
                state, (val) => !isNull(val)
            )
        ),
        keys(state)
    );
};
