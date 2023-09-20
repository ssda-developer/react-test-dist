import Tasks from './components/tasks/Tasks';
import Comments from './components/comments/Comments';

function App() {
    return (
        <div className="App">
            <div className="app__container">
                <div className="app__sidebar">
                    <aside className="app-sidebar__wrapper">
                        <h2 className="app-sidebar__title">DAYRY APP</h2>
                        <div className="app-sidebar__content">Comment with no sense</div>
                    </aside>
                </div>
                <div className="app__main-content">
                    <Tasks/>
                    <Comments/>
                </div>
            </div>
        </div>
    );
}

export default App;
