
import { BrowserRouter, Route } from 'react-router-dom'

import Palette from './components/elements/Palette'
import PaletteList from './components/main/PaletteList'
import SingleColorPalette from './components/elements/SingleColorPalette'

import seedPalettes from './data/seedPalettes'
import { generatePalettes } from './helpers/util'

function App() {

  const findPalette = id => {
    const paletteResult = seedPalettes.find(palette => palette.id === id)
    console.log(paletteResult);
    return paletteResult
  }

  return (
    <BrowserRouter>

      <Route 
        path='/' 
        exact 
        render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps} />}         
      />

      <Route 
        path='/palette/:id' 
        exact 
        render={
        (routeParams) => (
          // {/* Generate new palette from the old one. */}
          // {/* The new palette will have different shades of the seed colors. */}
          <Palette palette={generatePalettes(findPalette(routeParams.match.params.id))} />
        )
      } />

      <Route 
        path={`/palette/:paletteId/:colorId`}
        exact
        render={() => <SingleColorPalette />}
      />
      
    </BrowserRouter>
  );
}

export default App;
