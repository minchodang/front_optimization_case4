type AverageColor = {
  r: number;
  g: number;
  b: number;
};

const cache: { [key: string]: AverageColor } = {};

export const getAverageColorOfImage = (imgElement: HTMLImageElement): AverageColor => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const averageColor: AverageColor = {
    r: 0,
    g: 0,
    b: 0,
  };
  if (cache.hasOwnProperty(imgElement.src)) {
    return cache[imgElement.src];
  }

  if (!context) {
    return averageColor;
  }

  const width = (canvas.width =
    imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width);
  const height = (canvas.height =
    imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height);

  context.drawImage(imgElement, 0, 0);

  const imageData = context.getImageData(0, 0, width, height).data;
  const length = imageData.length;

  for (let i = 0; i < length; i += 4) {
    averageColor.r += imageData[i];
    averageColor.g += imageData[i + 1];
    averageColor.b += imageData[i + 2];
  }

  const count = length / 4;
  averageColor.r = Math.floor(averageColor.r / count);
  averageColor.g = Math.floor(averageColor.g / count);
  averageColor.b = Math.floor(averageColor.b / count);
  cache[imgElement.src] = averageColor;
  return averageColor;
};
