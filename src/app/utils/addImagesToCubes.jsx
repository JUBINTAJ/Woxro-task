import { cubeImages } from './cubeImage';

export const addImagesToCubes = () => {
  const cubes = document.querySelectorAll('.cube');

  cubes.forEach((cube, index) => {
    const imagePath = cubeImages[index % cubeImages.length];
    const faces = cube.querySelectorAll('div');

    faces.forEach((face) => {
      const img = document.createElement('img');
      img.src = imagePath;
      img.alt = `Cube ${index + 1} Image`;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.display = 'block';

      img.onerror = () => {
        console.error(`Failed to load image: ${imagePath}`);
        img.src = 'https://picsum.photos/150/150'; 
      };

      face.appendChild(img);
    });
  });
};
