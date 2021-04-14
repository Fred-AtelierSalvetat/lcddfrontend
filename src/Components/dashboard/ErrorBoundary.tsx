import React from 'react';

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    // TODO Add Logger
    // componentDidCatch(error, errorInfo) {
    //     //logErrorToMyService(error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            // Vous pouvez afficher n'importe quelle UI de repli.
            return (
                <div
                    style={{
                        margin: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div>
                        <h1 style={{ textAlign: 'start' }}>Oups</h1>
                        <span>Une erreur est survenue</span>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
