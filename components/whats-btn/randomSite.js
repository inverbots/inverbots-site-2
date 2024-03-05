const randomSite = (whatsappText) => {
  const sites = [
    `https://api.whatsapp.com/send?phone=573222109312&text=${whatsappText}`,
  ];

  const shuffledSites = shuffleArray(sites);
  const i = getRandomIndex(sites.length);
  return shuffledSites[i];
};

const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomIndex = (max) => {
  const usedIndexes = new Set();

  while (usedIndexes.size < max) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      return randomIndex;
    }
  }

  return Math.floor(Math.random() * max);
};

export default randomSite