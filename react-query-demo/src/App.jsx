import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
  );
}

export default App
