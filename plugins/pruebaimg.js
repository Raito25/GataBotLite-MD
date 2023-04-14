import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const font = await Jimp.loadFont('src/Monospace.ttf')
  const image = await Jimp.create(1200, 800, 0xffffffff);
  image.print(
    font,
    0, 0, { text: 'GataBot', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE },
    1200, 800
  );
  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
  conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje de prueba', m);
}

handler.command = /^pruebaimg$/i;
export default handler;
