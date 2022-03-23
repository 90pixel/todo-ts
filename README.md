Tasklar

- Hakan -> Typography
- Aydoğan -> ListItem
- Baran -> Button
- Burak -> Drag/Drop component
- Yasin -> Textarea
- Erhan -> Modal


### DndComponent:
  
 Basit yapıdaki sürükle-bırak sıralama işlemlerini yapabileceğimiz, tekrar kullanılabilir yapıda tasarlanmış DndComponenti.
 
- Kullanmak için components içerisinde DndComponent'i import etmemiz yeterli. Örn

```js
import { DndComponent } from 'components'; 
```

- Componentin aldığı proplar:
  - data => Componentin render edeceği elementleri gönderdiğimiz array. Bu array içerisinde `id` ve `item` değerleri bulunduran objeler bulundurur. 
  - onDragEnd => Sürükle bırak işlemi çalıştığı zaman bir event tetiklemek istersek, bu prop ile bunu gerçekleştirebiliriz. Parametre olarak güncellenmiş data arrayini döner.
  - customDragIcon => Eğer default olan sürükle iconunu değiştirmek istersek, bu parametre sayesinde istediğimiz react elementini render edebiliriz.
 
⚠️NOTE: `id` keyini değeri string olmak zorundadır. Çünkü bu key, sort işlemlerinde sürüklediğimiz ve bıraktığımız elementlerde kullanılır. `@dnd-kit` bu değerin string olmasını istediği için bu şekilde bir yapı kuruldu. 

Kullanım Örneği:

```js
import { DndComponent } from 'components';

const Home = () => {
  const items = [
    { id: '1', item: 'Dnd Componenti' },
    { id: '2', item: <p>Deneme 1</p> },
    { id: '3', item: <RandomComponent/> },
    { id: '4', item: 1234 },
    { id: '5', item: <h1>123213</h1> },
  ];

  return (
    <DndComponent
      data={items}
      onDragEnd={(e) => console.log(e)}
      customDragIcon={<strong>Drag me!</strong>}
    />
  );
};

export default Home;
```
