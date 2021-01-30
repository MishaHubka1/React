import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setUsers,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from '../../redux/Users-reduser';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching (false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching (false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}/>
              </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)  => {
            dispatch(followAc(userId));
        },
        unFollow: (userId)  => {
            dispatch(unFollowAc(userId));
        },
        setUsers: (users)  => {
            dispatch(setUsersAc(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC (pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC (totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch (toggleIsFetchingAC (isFetching));
        }
    }
}*/

export default connect (mapStateToProps,{follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching}) (UsersContainer);