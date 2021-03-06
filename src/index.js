import Router from 'preact-router'
import TranslationsProvider from './ui/features/TranslationsProvider'
import Navigation from './ui/features/Navigation'
import Calculator from './ui/routes/calculator'
import Normostrana from './ui/routes/normostrana'
import './style/globals.scss'

const App = () => (
    <div id="app">
        <TranslationsProvider>
            <Navigation />
            <main class="content">
                <Router>
                    <Calculator path="/" default />
                    <Normostrana path="/normostrana" />
                </Router>
            </main>
        </TranslationsProvider>
    </div>
)

export default App
