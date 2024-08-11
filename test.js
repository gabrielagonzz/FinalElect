const fs = require('fs');

test('Verifica que la página contiene "¡Hola Mundo!"', () => {
  const contenido = fs.readFileSync('index.html', 'utf8');
  expect(contenido).toContain('¡Hola Mundo!');
});
