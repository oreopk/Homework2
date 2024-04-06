export default async function getCart() {
  //   let xhr = new XMLHttpRequest();
  //   xhr.open('GET', 'http://localhost:8000/headphones');
  //   xhr.send();
  //   let res;
  //   xhr.onload = () => {
  //     console.log(`Загружено ${xhr.status},${xhr.response}`);
  //     res = xhr.response;
  //   };
  //   xhr.onerror = () => {
  //     console.log('Не удеалось загрузить данные');
  //   };
  //   xhr.onprogress = (event) => {
  //     //event.loaded;
  //     // event.lengthComputable();
  //     // event.total;
  //   };
  //   return res;
  let data = [];
  try {
    let response = await fetch('http://localhost:8000/cart/get');
    // response.then((res) => {
    //   res.json().then((data) => console.log(data));
    // });
    if (response.ok) {
      console.log(`Загружено с статусом ${response.status}`);
      data = await response.json();
    }
  } catch {
    throw new Error('Возникла ошибка');
  }

  //   response.catch((e) => console.log(e));
  //   response.then((answer) => {
  //     if (answer.ok) {
  //       res.console.log(`Загружено, статус ${answer.status})`);
  //       let data = answer.json();
  //       console.log(data);
  //     }
  //   });
  //   response.finally(() => console.log('Конец передачи данных'));
}
