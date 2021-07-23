import ReactDOM from 'react-dom';

interface AppProps {
  color: string;
}

const App: React.FC<AppProps> = ({ color }) => {
  return <div>hello there {color}</div>;
};

ReactDOM.render(<App color='red' />, document.querySelector('#root'));
