export default async function getHeadphones() {
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

  try {
    let response = await fetch('http://localhost:8000/headphones');
    if (response.ok) {
      console.log(`Загружено с статусом ${response.status}`);
      let data1 = response;
      console.log(data1);
      let data = await data1.json();
      console.log(data);
      return data;
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
