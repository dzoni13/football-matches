import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadMenuItems } from "../../actions/footballAction.js";
import "./index.css";

const classNames = require('classnames');

class FootballMatchesData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedYear: null
        };
    }

    onClick = (year) => (e) => {
        this.props.loadMenuItems(year);

        // Code written in next line is to take care of adding active class to selected year for css purpose.
        this.setState({
            selectedYear: year
        })
    }

    renderItems = () => {
        return this.props.matches?.map((item, i) => {
            return (
                <li key={i} className="slide-up-fade-in">Match {item?.name} won by {item?.winner}</li>
            );
        });
    }

    render() {
        var years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
        return (
            <div className="layout-row">
                <div className="section-title">Select Year</div>
                <ul className="sidebar" data-testid="year-list">
                    {years.map((year, i) => {
                        return (
                            <li className={
                                classNames({
                                    'sidebar-item': true,
                                    'active': this.state.selectedYear === year
                                })
                            }
                                onClick={this.onClick(year)}
                                key={year}>
                                <a>{year}</a>
                            </li>
                        )
                    })}
                </ul>

                <section className="content">
                    <section>
                        {this.props.matches?.length > 0 &&
                            <>
                                <div className="total-matches" data-testid="total-matches">Total Matches : {this.props?.matches?.length}</div>
                                <ul className="mr-20 matches styled" data-testid="match-list">
                                    {this.renderItems()}
                                </ul>
                            </>
                        }
                    </section>

                    {this.props.matches?.length === 0 && this.state.selectedYear &&
                        <div data-testid="no-result" className="slide-up-fade-in no-result">No Matches Found</div>
                    }
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    matches: state.footballReducer.matches,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadMenuItems: loadMenuItems
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FootballMatchesData);