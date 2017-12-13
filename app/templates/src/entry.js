import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'

const hotRender = Component => (
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
)

hotRender(App)


if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default
        hotRender(NextApp)
    })
}