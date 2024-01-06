/**
 * @param word - word to capitalize
 * @argument position - position of the letter to capitalize defaults to first char
 * **/
export const capitalizeLetter = (word: string, position = 0) => {
  if (position < 0 || position >= word.length) {
    return word
  }
  return word.slice(0, position) + word[position].toUpperCase() + word.slice(position + 1);
}