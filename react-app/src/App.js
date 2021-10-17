import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <p className="logo">
            ToDo
        </p>

        <div className="input-panel">
            <input className="input" type="text" />
        </div>

        <div className="control-panel">
            <div className="control-btns">
                <button className="control-btn text">
                    All
                </button>
                <button className="control-btn text">
                    Done
                </button>
                <button className="control-btn text">
                    Undone
                </button>
            </div>
            <div className="sort-panel">
                <p className="name-sort text">
                    Sort by Date
                </p>
                <div className="updonw">
                    <button className="updown-btn up-btn">
    
                    </button>
                    <button className="updown-btn down-btn">
    
                    </button>
                </div>
            </div>
            <div className="task-borders">
                <div className="task-border">
                    <button className="comletedtask-btn">
                      
                    </button>
                    <div className="name-task">
                        <div className="name-task-inner text">
                            Do something
                        </div>
                    </div>
                    
                    <div className="data-task">
                        <div className="data-task-inner text">
                            10.04.2020
                        </div>
                    </div>
                    <button className="deltask-btn">
                    
                    </button>
                </div>

                <div className="task-border">
                    <button className="comletedtask-btn">
                      
                    </button>
                    <div className="name-task text">
                        Do more
                    </div>
                    <div className="data-task text">
                        10.04.2020
                    </div>
                    <button className="deltask-btn">
                    
                    </button>
                </div>

                <div className="task-border">
                    <div className="check-name">
                        
                    </div>
                    <button className="comletedtask-btn">
                      
                    </button>
                    <div className="name-task text">
                        Learn React
                    </div>
                    <div className="data-task text">
                        10.04.2020
                    </div>
                    <button className="deltask-btn">
                    
                    </button>
                </div>

                <div className="task-border">
                    <button className="comletedtask-btn">
                      
                    </button>
                    <div className="name-task text">
                        Twtz 0_0
                    </div>
                    <div className="data-task text">
                        10.04.2020
                    </div>
                    <button className="deltask-btn">
                    
                    </button>
                </div>

                <div className="task-border">
                    <button className="comletedtask-btn">
                      
                    </button>
                    <div className="name-task text">
                        authorization
                    </div>
                    <div className="data-task text">
                        10.04.2020
                    </div>
                    <button className="deltask-btn">
                    
                    </button>
                </div>
            </div>

            <div className="nav-panel">
                    <button className="nav-btn first-page">
                        
                    </button>
                    <button className="nav-btn text">
                        <p>1</p>
                    </button>
                    <button className="nav-btn text">
                        <p>2</p>
                    </button>
                    <button className="nav-btn text">
                        <p>3</p>
                    </button>
                    <button className="nav-btn text">
                        <p>4</p>
                    </button>
                    <button className="nav-btn text">
                        <p>5</p>
                    </button>
                    <button className="nav-btn last-page">
                        
                    </button>
            </div>

        </div>
    </div>
  );
}

export default App;
