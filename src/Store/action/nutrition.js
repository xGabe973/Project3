import * as actionTypes from "./actionTypes";
import axios from "axios";

const initNutrition = data => {
  return {
    type: actionTypes.INIT_NUTRITION
  };
};
const nutritionSuccess = data => {
  return {
    type: actionTypes.FETCH_NUTRITION_SUCCESS,
    payload: { data }
  };
};
const nutritionFail = error => {
  return {
    type: actionTypes.FETCH_NUTRITION_FAIL,
    payload: { error }
  };
};
export const initNutritionAsync = params => {
  const ings = params ? params.i : " ";
  const query = params ? params.q : " ";
  return (dispatch, getState) => {
    //TODO# HERE MAKE ASYNC CALLS.
    dispatch(initNutrition());
    axios({
      method: "GET",
      url: "https://recipe-puppy.p.rapidapi.com",
      params: {
        p: 1,
        i: ings,
        q: query
      },
      headers: {
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
        "x-rapidapi-key": "746a1a9cfdmshdbc2b867d806313p1e07dfjsn0db7de901c8d"
      }
    })
      .then(response => {
        const { results } = response.data;
        const dataWithId = results.map((obj, index) => {
          const id = obj["title"]
            .trim()
            .split(" ")
            .join("");
          return {
            id,
            ...obj
          };
        });
        dispatch(nutritionSuccess(dataWithId));
      })
      .catch(err => {
        dispatch(nutritionFail(err));
      });
  };
};

export const selectedNutrition = id => {
  return {
    type: actionTypes.SELECTED_NUTRITION,
    payload: {
      id
    }
  };
};
export const deselectedNutrition = id => {
  return {
    type: actionTypes.DE_SELECTED_NUTRITION,
    payload: {
      id
    }
  };
};
export const clearSelectedNutrition = () => {
  return {
    type: actionTypes.CLEAR_SELECTED_NUTRITION
  };
};
export const initNutritionByCarbsAsync = params => {
  const query = params ? params.carbs : 50;
  return (dispatch, getState) => {
    //a sync calls
    dispatch(initNutrition());
    axios({
      method: "GET",
      url: "https://api.spoonacular.com/recipes/findByNutrients",
      params: {
        number: 10,
        minCalories: 1,
        maxCalories: query,
        apiKey: "52a5f0f86060484d93a1d81050e43e43"
      }
    })
      .then(({ data: arrayData }) => {
        console.log("arrayData");
        const listIds = arrayData.map(({ id }) => id).join(",");

        axios({
          method: "GET",
          url: "https://api.spoonacular.com/recipes/informationBulk",
          params: {
            includeNutrition: false,
            ids: listIds,
            apiKey: "52a5f0f86060484d93a1d81050e43e43"
          }
        })
          .then(({ data }) => {
            const dataWithInfo = data.map(
              ({ id: mId, image, sourceUrl, title }) => {
                const currentObj = arrayData.find(({ id }) => id == mId);
                const newObj = { ...currentObj, image, sourceUrl };
                return newObj;
              }
            );
            // making the objects of carbs api with all info with previous one
            const recipeWithAllInfo = dataWithInfo.map(
              ({
                id,
                title,
                image,
                sourceUrl: href,
                protein,
                fat,
                carbs,
                calories
              }) => {
                const objForDisc = {
                  calories,
                  carbs,
                  fat,
                  protein
                };
                const disc = Object.entries(objForDisc)
                  .map(objArr => objArr.join(":"))
                  .join(", ");
                return {
                  id,
                  title,
                  href,
                  ingredients: disc,
                  thumbnail: image
                };
              }
            );
            // end

            console.log(recipeWithAllInfo);
            dispatch(nutritionSuccess(recipeWithAllInfo));
          })
          .catch(error => {
            dispatch(nutritionFail(error));
          });
      })
      .catch(err => {
        dispatch(nutritionFail(err));
      });
  };
};