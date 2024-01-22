import React from 'react';

const WithLogging = (WrappedComponent) => {
    class WithLogging extends React.Component {
        componentDidMount() {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    // Set display name for debugging purposes
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithLogging.displayName = `WithLogging(${wrappedComponentName})`;

    return WithLogging;
};

export default WithLogging;
