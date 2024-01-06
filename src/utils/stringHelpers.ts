/**
* @argument position - position of the letter to capitalize defaults to first char
* **/
export const capitalizeLetter = (word: string, position = 0) => {
  return word[position].toUpperCase() + word.slice(1)
}