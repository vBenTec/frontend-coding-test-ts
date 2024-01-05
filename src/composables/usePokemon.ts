const usePokemon = () => {
  const getImages = (images: { [key: string]: string | null }[], side: 'front' | 'back' = 'front',
  ) => {
    if (!images) return {}

    const results: Record<string, string> = {}

    for (const key in images) {
      if (!!images[key] && key.startsWith(side + '_')) {
        results[key] = images[key]
      }
    }

    return results
  }
  return {
    getImages,
  }
}

export default usePokemon