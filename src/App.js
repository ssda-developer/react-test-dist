import Tasks from './components/tasks/Tasks';
import Comments from './components/comments/Comments';

function App() {
    return (
        <div className="App">
            <div className="row">
                <div className="app__aside">
                    <aside className="react-aside">
                        <h2 className="react-aside__title">DAYRY APP</h2>
                        <div className="react-aside__content">Comment with no sense</div>
                    </aside>
                </div>
                <div className="app__content">
                    <Tasks/>
                    <Comments/>
                </div>
            </div>
        </div>
    );
}

export default App;
