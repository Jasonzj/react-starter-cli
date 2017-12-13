import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

// components
import Counter from 'components/Counter'

// action
import { actions as countActions } from 'ducks/count'
import { actions as dataActions } from 'ducks/data'

const actions = { ...countActions, ...dataActions }

@connect(
    state => ({
        ...state
    }),
    dispatch => bindActionCreators({ ...actions }, dispatch)
)
class HelloWorld extends PureComponent {
    render() {
        const {
            data,
            count,
            getData,
            onIncrement,
            onDecrement,
            onIncrementAsync,
            onDecrementAsync,
        } = this.props

        return (
            <div>
                <h1>Hello World!</h1>
                <Link to="/react">
                    <button>jump react</button>
                </Link>
                <Counter
                    value={count}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onIncrementAsync={onIncrementAsync}
                    onDecrementAsync={onDecrementAsync}
                    getData={getData}
                />
                {
                    data.map(item => (
                        <p key={item.uid}>
                            {item.name}
                        </p>
                    ))
                }
            </div>
        )
    }
}

HelloWorld.propTypes = {
    data: PropTypes.any,
    count: PropTypes.number,
    getData: PropTypes.func,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onIncrementAsync: PropTypes.func,
    onDecrementAsync: PropTypes.func,
}

export default HelloWorld