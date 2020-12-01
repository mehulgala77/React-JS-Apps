
// 'Chroma JS' is Used to work with colors.
import chroma, { hex } from 'chroma-js'

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

// Note: Generate the range of colors
const getRange = hexColor => {

    // White is the end range
    const end = '#fff'

    // Note: If we set black as the start color, the range consists of lot of dark colors
    // Hence we are starting with a little darker shade of the original hex color.
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ]
}

const generateScales = (hexColor, numberOfColors) => {
    return chroma
        .scale(getRange(hexColor))
        .mode('lab')
        .colors(numberOfColors)
}

const generatePalettes = (starterPalette) => {

    const newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }

    // Initialize every levels as an empty color array
    for (let level of levels) {
        newPalette.colors[level] = []
    }

    for (let color of starterPalette.colors) {

        // Generate scale of 10 colors for this Hex value
        const scale = generateScales(color.color, 10).reverse()

        for (let i in scale) {
            // The palette has levels (50, 100, etc)
            // Against every level there is an array.
            // We need to push shade of this color at respective level.
            newPalette.colors[levels[i]].push({
                // Add levels in the name
                name: `${color.name} ${levels[i]}`,
                // Replace spaces in names with a dash.
                id: color.name.toLowerCase().replace(/ /g, '-'),
                // Hex version of the color
                hex: scale[i],
                // RGB version of the color
                rgb: chroma(scale[i]).css(),
                // RGBA color
                rgba: chroma(scale[i]).css()
                        .replace('rgb', 'rgba')
                        .replace(')', ',1.0)')
            })
        }
    }

    return newPalette
}

export { generatePalettes }