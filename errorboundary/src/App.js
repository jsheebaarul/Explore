import React from 'react';
import Legend from './legends';
import ErrorBoundary from './errorboundary';
class App extends React.Component {
  render() {
  return(
    <div>
      <ErrorBoundary>
      <Legend legend="Mozart" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Legend legend="Beethovan" />
      </ErrorBoundary>
       <ErrorBoundary>
      <Legend legend="Shanaia" />
      </ErrorBoundary> 
    </div>
  );
}
}

export default App;
