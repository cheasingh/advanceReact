import App, { Container } from 'next/app';

class MyApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Container>
                <p>Hey i am on every page</p>
            </Container>
        )
    }

}