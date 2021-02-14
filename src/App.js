import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reduser";
import { compose } from "redux";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { withSuspense } from "./hoc/withSuspens";

//import DialogsContainer from "./Components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
//import ProfileContainer from "./Components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={withSuspense (DialogsContainer)} />

          <Route path="/profile/:userId?" 
         render={withSuspense(ProfileContainer)} />

          <Route path="/users" render={() => <UsersContainer />} />

          <Route path="/login" render={() => <LoginPage />} />

          {/* <Route path='/news/' render={ () => <News/>}/>
                    <Route path='/music/' render={ () => <Music/>}/>
                    <Route path='/Settings/' render={ () => <Settings/>}/>*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJsApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJsApp;
