import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  ImageProps,
} from 'react-native'

type Pokemon = {
  name: string
  type: string
  moves: string[]
  weaknesses: string[]
  hp: Number
  img: ImageProps
  pokedexNumber: Number
  typeEmoji: string
}

const App = () => {
  const pokemons: Pokemon[] = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
      hp: 48,
      img: require('./assets/bulbasaur.png'),
      pokedexNumber: 1,
      typeEmoji: '🌿',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      moves: ['Tackle', 'Flamethrower', 'Growl', 'Scratch'],
      weaknesses: ['Ice', 'Fighting', 'Water'],
      hp: 44,
      img: require('./assets/charmander.png'),
      pokedexNumber: 2,
      typeEmoji: '🔥',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      moves: ['Hydro Blast', 'Surf', 'Growl', 'Scratch'],
      weaknesses: ['Grass', 'Fighting', 'Electric'],
      hp: 49,
      img: require('./assets/squirtle.png'),
      pokedexNumber: 3,
      typeEmoji: '💧',
    },
    {
      name: 'Pikachu',
      type: 'Electric',
      moves: ['Thunder Bol', 'Bolt Charge', 'Growl', 'Quick Attack'],
      weaknesses: ['Rock', 'Fighting', 'Grass'],
      hp: 42,
      img: require('./assets/pikachu.png'),
      pokedexNumber: 4,
      typeEmoji: '⚡',
    },
  ]

  const encapsulateString = (arr) => {
    const arrMap = arr.map((item, index) => {
      if (index !== arr.length - 1) {
        return `${item}, `
      } else {
        return item
      }
    })
    return arrMap.join('')
  }

  const pokemonCard = () =>
    pokemons.map((pokemon) => {
      const pokemonCardStyle = `type${pokemon.type}`
      console.log(pokemonCardStyle)
      const pokemonMoves = encapsulateString(pokemon.moves)
      const pokemonWeaknesses = encapsulateString(pokemon.weaknesses)
      return (
        <View
          key={`pokedex-${pokemon.pokedexNumber}`}
          style={styles.pokemonCardHolder}
        >
          <View style={[styles.pokemonCardContainer, styles[pokemonCardStyle]]}>
            <View style={styles.titleRow}>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Text>❤️HP: {pokemon.hp.toString()}</Text>
            </View>
            <View style={styles.pokemonImageContainer}>
              <Image
                source={pokemon.img}
                style={styles.pokemonImage}
                resizeMode='contain'
              />
            </View>

            <View
              style={[
                styles[pokemonCardStyle],
                styles.pokemonType,
                styles.displayInfo,
              ]}
            >
              <Text style={styles.displayInfo}>
                {pokemon.typeEmoji} {pokemon.type}
              </Text>
            </View>
            <View style={styles.displayInfoContainer}>
              <View>
                <Text style={styles.displayInfo}>Moves: {pokemonMoves}</Text>
                <Text style={styles.displayInfo}>
                  Weaknesses: {pokemonWeaknesses}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )
    })
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>{pokemonCard()}</View>
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  pokemonCardHolder: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pokemonCardContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 3,
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  pokemonImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 350,
  },
  pokemonImage: {
    width: '100%',
    height: 250,
  },
  pokemonType: {
    borderWidth: 3,
    borderRadius: 16,
    borderStyle: 'solid',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  typeFire: {
    borderColor: 'red',
  },
  typeWater: {
    borderColor: 'blue',
  },
  typeGrass: {
    borderColor: 'green',
  },
  typeElectric: {
    borderColor: 'yellow',
  },
  displayInfoContainer: {
    margin: 10,
  },
  displayInfo: {
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
})

export default App
