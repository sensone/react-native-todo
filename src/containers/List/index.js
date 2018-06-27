import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from './List';
import * as actionCreators from '../../actionCreators/list';

const mapStateToProps = state => ({
  loading: state.listReducer.loading,
  data: state.listReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
