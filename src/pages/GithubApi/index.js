import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";

import "./style.scss";
import {
  changeFilterAction,
  getUsersAction,
  closeErrorMessageAction,
} from "./action";
import Table from "./userTable";

const App = ({
  data: { users = [] },
  ui: { isLoading = false, errorMsg = "" },
  filter: { q = "", page = 0 },
  changeFilterAction,
  getUsersAction,
  closeErrorMessageAction,
}) => {
  const debouncedGetUsersAction = useCallback(
    debounce(() => getUsersAction(), 500),
    []
  );

  useEffect(() => {
    if (q.length >= 3) {
      debouncedGetUsersAction();
    }
  }, [q, debouncedGetUsersAction]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="title">Github Api</h1>
        <input
          className="input"
          value={q}
          onChange={(e) => changeFilterAction({ q: e.target.value })}
          placeholder="Search users..."
        />
        {isLoading && (
          <div className="container pt-2">
            <div className="is-loading" />
          </div>
        )}
        {!!errorMsg && (
          <article class="message is-dark mt-2">
            <div class="message-header">
              <p>Message</p>
              <button
                onClick={closeErrorMessageAction}
                class="delete"
                aria-label="delete"
              ></button>
            </div>
            <div class="message-body">{errorMsg}</div>
          </article>
        )}
        {users.length > 0 && <Table users={users} />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ githubApi }) => {
  return githubApi;
};

const mapDispatchToProps = {
  changeFilterAction,
  getUsersAction,
  closeErrorMessageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
