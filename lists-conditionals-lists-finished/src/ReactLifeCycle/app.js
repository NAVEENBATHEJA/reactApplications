import React, { Component } from 'react';
import MovieList from '../ContextAPI/MovieList';

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>React Starter</h1>
//                 <Navigation />
//                 <PageContent />
//             </div>
//         );
//     }
// }

export default class App extends Component {
    render() {
        return (
            <div className="App">
              <MovieList/>
            </div>
        );
    }
}