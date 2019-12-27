import { connect } from 'react-redux'
import AppRedux from '../AppRedux'
import { selectCategory, requestCategories } from "../store";

function mapStateToProps(state) {
    console.log(state);
    return state;
}

const mapDispatchToProps = {
    onGameStarted: requestCategories,
    onCategorySelected: (id) => selectCategory(id)
};

export const AppReduxContainer = connect(mapStateToProps, mapDispatchToProps)(AppRedux)