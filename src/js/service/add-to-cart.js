export default async function addtoCard() {
  try {
    let response = await fetch('http://localhost:8000/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardTitle: 'Беспроводные наушники N1',
        reviews: 100,
        price: 32,
      }),
    });
  } catch {
    throw new Error('Возникла ошибка');
  }
}
