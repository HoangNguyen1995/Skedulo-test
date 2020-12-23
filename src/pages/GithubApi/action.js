import { actionCreator, serviceMaker } from "../../helper";
export const ACTIONS = {
  CHANGE_FILTER: "GITHUB_API_CHANGE_FILTER",
  CLOSE_ERROR_MESSAGE: "GITHUB_API_CLOSE_ERROR_MESSAGE",
};

export const changeFilterAction = (payload) => ({
  type: ACTIONS.CHANGE_FILTER,
  payload,
});

export const GET_USERS = actionCreator("GITHUB_API_GET_USERS");
export const getUsersAction = (q) => (dispatch, getState) => {
  const filter = getState().githubApi.filter;

  if (filter.q.length <= 3) {
    return null;
  }

  dispatch({
    type: GET_USERS.PENDING,
  });
  serviceMaker({
    url: "https://api.github.com/search/users",
    params: filter,
  }).then(
    (res) => {
      const { status } = res;

      if (status >= 200 && status < 300) {
        res.json().then(({ items, total_count }) => {
          dispatch({
            type: GET_USERS.SUCCESS,
            payload: { users: items || [], total_count: total_count || 0 },
          });
        });
      } else {
        res.json().then(({ message }) => {
          dispatch({
            type: GET_USERS.ERROR,
            payload: message,
          });
        });
      }
    },
    (error) => {
      console.log(
        "🚀 ~ file: action.js ~ line 25 ~ getUsersAction ~ error",
        error
      );
      dispatch({
        type: GET_USERS.ERROR,
        message: error?.message || "Get user failed",
      });
    }
  );
};

export const closeErrorMessageAction = () => ({
  type: ACTIONS.CLOSE_ERROR_MESSAGE,
});
