import './App.css';
import Cubes from './components/Cubes';

function App() {
  return (
    <div className="App">
      <div className="cubes-background">
        <Cubes 
          gridSize={20}
          maxAngle={45}
          radius={3}
          faceColor="#060010"
          borderStyle="1px dashed #9333ea"  // Purple dashed border
          cellGap={30}  // Reduced spacing (try 1 or 0 for even less)
          autoAnimate={true}
          rippleOnClick={false}
          rippleColor="#61dafb"
        />
      </div>
    </div>
  );
}

export default App;