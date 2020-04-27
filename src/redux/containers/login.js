import { connect } from 'react-redux'
import { compose } from 'redux'
import Login from '../../screens/Login'

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = {
  
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
      )
)(Login)