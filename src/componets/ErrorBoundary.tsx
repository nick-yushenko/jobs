import React from "react";

interface Props {
  children?: React.ReactChild;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center" }}>
          <strong>Ошибка при работе приложения</strong>
          <p>Пожалуйста, перезагрузите страницу</p>
        </div>
      );
    }

    return this.props.children;
  }
}
