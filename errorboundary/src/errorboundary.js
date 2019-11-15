import React from 'react';
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFrom(error){
        return{
            hasError: true
        }
    }
    render() {
        if (this.state.hasError){
        return <h1>something Went Wrong!</h1>
        }
        return this.props.children
        }
}
export default ErrorBoundary