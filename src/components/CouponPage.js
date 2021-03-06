import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class CouponPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: "",
            changePage: false,
            loggedUserIndex: localStorage.getItem('loggedUserIndex')
        }
    }

    render() {
        return (
            <div className="container">
                {this.doRedirect()}
                <div id="box" className="row loginSheet">
                    <div className="col-12">
                        <div className="row">
                            <div style={{ textAlign: "left" }} className="col-12">
                                <button id="disc-style" className="link-style" onClick={() => this.changePathToGo(ROUTES.USER)}>Go Back</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="new-display-4">Coupon Awards</h1>
                            </div>
                        </div>
                        {this.loadCoupons()}
                    </div>
                </div>
            </div>
        )
    }

    //load the coupons to the screen
    loadCoupons = () => {
        let couponsArr = this.addCoupons();

        //if there are no coupons then show a message
        if (couponsArr.length === 0) {
            return (
                <div className="row">
                    <div className="col-12">
                        <h1 className="header-style">No coupons to show</h1>
                    </div>
                </div>
            );
        }
        else
            return couponsArr.map(coupon => { return coupon });
    }

    //return a coupons HTML array that has all the coupons of the user
    addCoupons = () => {
        let couponsArr = [];
        for (let i = 0; i < this.props.users[this.state.loggedUserIndex].completedSurveys.length; i++) {

            //if the user redeemed the coupon then return it as unclickable
            if (this.props.users[this.state.loggedUserIndex].completedSurveys[i].couponRedeemed) {
                couponsArr.push(
                    <div key={i} className="row">
                        <div className="col-12">
                            <button id="style-disabled" className="coupon-style" disabled >Survey {this.props.users[this.state.loggedUserIndex].completedSurveys[i].indexOfSurvey + 1} Redeemed !</button>
                        </div>
                    </div>
                );
            }

            //else return the coupon as clickable
            else {
                couponsArr.push(
                    <div key={i} className="row">
                        <div className="col-12">
                            <button className="coupon-style" id={'a' + i} onClick={() => this.redeemCoupon(i)}>Redeem Coupon Survey {this.props.users[this.state.loggedUserIndex].completedSurveys[i].indexOfSurvey + 1}</button>
                        </div>
                    </div>
                );
            }
        }
        return couponsArr;
    }

    //redeem the coupon
    redeemCoupon = (i) => {
        //change the coupon state to redeemed and change it's style
        this.props.users[this.state.loggedUserIndex].completedSurveys[i].couponRedeemed = true;
        document.getElementById('a' + i).disabled = true;
        document.getElementById('a' + i).innerHTML = "Survey " + (this.props.users[this.state.loggedUserIndex].completedSurveys[i].indexOfSurvey + 1) + " redeemed !"
        document.getElementById('a' + i).style.backgroundColor = "#4ca454";
        document.getElementById('a' + i).style.color = "white";
    }

    //redirect to another page
    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }
}
