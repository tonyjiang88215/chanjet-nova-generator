/**
 * Created by TonyJiang on 16/12/20.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'assets/css/main.less';

class App extends React.Component<{}, {}>{

    render(){
        return (
            <div>Hello Apps</div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('app'));