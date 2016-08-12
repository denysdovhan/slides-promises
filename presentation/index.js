// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

// Images
const images = {
  promise: require("../assets/promise.jpg"),
  github: require("../assets/denysdovhan-github.png"),
  devil: require("../assets/robot-devil-futurama.jpg"),
  hard: require("../assets/hard.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#ffe000",
  secondary: "#2D2D2D"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress="bar">

          <Slide transition={["zoom"]} bgImage={images.promise.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Проміси
            </Heading>
            <Heading size={2} fit caps textColor="white">
              та промісоподібні
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Link href="https://github.com/denysdovhan">
              <Image src={images.github.replace("/", "")} width="100%"/>
            </Link>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary">
            <BlockQuote>
              <Quote>To understand how something works, figure out how to break it.</Quote>
              <Cite>Nassim Nicholas Taleb</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={2} fit caps>
              Передумови
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>Події</Heading>
            <Text margin=".5em auto 0" >Найбільш базова форма асинхронного програмування у JavaScript.</Text>
          </Slide>

          <Slide bgColor="secondary" notes="Добре для простих взаємодій, але складніше поєднувати кілька асинхронних викликів. Обробники мають бути до визначені до настання події.">
            <CodePane
              lang="js"
              textSize="1em"
              source={require("raw!./examples/1-events.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>Зворотні виклики</Heading>
            <Text margin=".5em auto 0">Функції, які потрібно викликати після асинхронної операції, передаються у якості аргументів.</Text>
          </Slide>

          <Slide bgColor="secondary" notes="Патерн зі зворотніми викликами більш гнучкий, оскільки поєднання кількох викликів легше зробити з допомогою функцій зворотнього виклику.">
            <CodePane
              lang="js"
              textSize="1em"
              source={require("raw!./examples/2-callbacks.example")}
            />
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.devil.replace("/", "")} bgDarken={0.6}>
            <Text caps fit textColor="primary">Callback Hell</Text>
          </Slide>

          <Slide transition={"slide"} notes="" bgColor="secondary">
            <CodePane
              lang="js"
              textSize="0.6em"
              source={require("raw!./examples/3-callbacks-hell.example")}
            />
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={2} fit caps>
              Проміси
            </Heading>
          </Slide>

          <Slide>
            <Text bold>Проміси</Text>
            <List>
              <Appear><ListItem>Відкладуння обчислення результату на потім</ListItem></Appear>
              <Appear><ListItem>Кілька обробників одного результату</ListItem></Appear>
              <Appear><ListItem>Складні композиції асинхронних операцій</ListItem></Appear>
              <Appear><ListItem>Легше обробляти помилки</ListItem></Appear>
              <Appear><ListItem>Можна «відновлюватись» після помилки</ListItem></Appear>
              <Appear><ListItem>Підґрунтя для async/await</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading fit textColor="secondary">.then</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize="1em"
              source={require("raw!./examples/4-promise-usage.example")}
            />
          </Slide>

          <Slide notes="Всі проміси мають об’єкт `then()`, проте не всі об’єкти, що мають метод `then()`, є промісами.">
            <Text>
              <strong>Проміси (Promises)</strong> — об’єкти, поведінка яких відповідає специфікації <Link href="" textColor="secondary">Promise/A+</Link>
            </Text>
            <Appear>
              <Text margin="1em auto 0">
                <strong>Промісоподібні (Thenables)</strong> — об’єкти, які мають метод <Code>.then</Code>
              </Text>
            </Appear>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize="1em"
              source={require("raw!./examples/5-thenable.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize="1em"
              source={require("raw!./examples/6-thenable-arrow.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>Конструктор</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".75em"
              source={require("raw!./examples/7-constructor.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".75em"
              source={require("raw!./examples/8-constructor-usage.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".75em"
              source={require("raw!./examples/9-constructor-fixed.example")}
            />
          </Slide>

          <Slide>
            <Text bold>
              .then() та resolve() викликаються незалежно
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>Проміси мають стан</Heading>
          </Slide>

          <Slide>
            <Text margin="0 auto 1em">
              [[PromiseState]]
            </Text>
            <Layout>
              <Fill>
                <Text bold>unsettled</Text>
                <Text>pending</Text>
              </Fill>
              <Fill>
                <Text bold>settled</Text>
                <Text>resolved (fulfilled)</Text>
                <Text>rejected</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".45em"
              source={require("raw!./examples/10-states.example")}
            />
          </Slide>

          <Slide bgColor="secondary" notes="Насправді всі ці обробники зберігаються і виконуються в порядку їх визначенння.">
            <CodePane
              lang="js"
              textSize=".75em"
              source={require("raw!./examples/11-states-usage.example")}
            />
          </Slide>

          <Slide>
            <Text bold>.then() завжди повертає новий проміс</Text>
            <Text margin=".5em auto 0">І цей новий проміс вирішується тоді, коли попередній був або завершений, або відхилений.</Text>
          </Slide>

          <Slide>
            <Text bold>.then() може не мати обробника</Text>
            <Text margin=".5em auto 0">Тоді результат передається у наступний проміс.</Text>
          </Slide>

          <Slide>
            <Text bold>Якщо повернути значення з .then(), воно буде значенням наступного проміса</Text>
            <Text margin=".5em auto 0">Тоді можна передавати дані від одного проміса до наступного.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".4em"
              source={require("raw!./examples/12-return-promise.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".7em"
              source={require("raw!./examples/13-return-promise-usage.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>Що якщо повернути з .then() проміс?</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".7em"
              source={require("raw!./examples/14-if-promise-hell.example")}
            />
          </Slide>

          <Slide>
            <Text bold>Якщо повернути проміс з .then(), він вирішиться</Text>
            <Text margin=".5em auto 0">Результат буде обгорнутий у новий проміс та буде доступним у наступному .then()</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".6em"
              source={require("raw!./examples/15-if-promise.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".7em"
              source={require("raw!./examples/16-if-promise-usage.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>Обробка помилок</Heading>
          </Slide>

          <Slide>
            <Text bold>Проміси можна відхилити (reject) з причиною (reason)</Text>
            <Text margin=".5em auto 0">В якості другого аргументу виконавець отримує функцію, що відхиляє проміс.</Text>
          </Slide>

          <Slide>
            <Text bold>.then() приймає обробник відхилення в якості другого аргумента</Text>
            <Text margin=".5em auto 0">І обробник завершення, і обробник відхилення є опціональними.</Text>
          </Slide>

          <Slide>
            <Text bold>.catch() приймає лише обробник відхилення</Text>
            <Text margin=".5em auto 0">.catch() аналогічний до .then() без обробника завершення.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".7em"
              source={require("raw!./examples/17-catch.example")}
            />
          </Slide>

          <Slide>
            <Text bold>Проміси вміють «відновлюватись»</Text>
            <Text margin=".5em auto 0">Якщо повернути значення з обробника відхилення, воно потрапить в обробник завершення наступного проміса.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".45em"
              source={require("raw!./examples/18-rejection-reject.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".4em"
              source={require("raw!./examples/18-rejection-handle.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".6em"
              source={require("raw!./examples/19-rejection-usage.example")}
            />
          </Slide>

          <Slide transition={[]} bgImage={images.hard.replace("/", "")} bgDarken={0.6}>
            <Text caps fit textColor="white">Надто складно!</Text>
          </Slide>

          <Slide>
            <Heading size={2}>Глобальна обробка відхилення</Heading>
          </Slide>

          <Slide>
            <Text bold>Проміси «падають тихо»</Text>
            <Text margin=".5em auto 0">Якщо помилка стається у промісі, який не має обробника відхилення, проміс «промовчить» про цю помилку.</Text>
          </Slide>

          <Slide>
            <Text bold>Оточення довзоляють ловити необроблені відхилення</Text>
            <Text margin=".5em auto 0">Це можливості надаються лише оточеннями і не є частиною специфікації.</Text>
          </Slide>

          <Slide>
            <Text bold>Обробка відхилень у Node.js</Text>
            <Text margin=".5em auto 0" textAlign="left">Об’єкт process має дві події, які відповідають відхиленням у Node.js:</Text>
            <List>
              <ListItem>unhandledRejection — публікується коли відхилений проміс необробляється напротязі одного проходу циклу подій;</ListItem>
              <ListItem>rejectionHandled — публікується коли обробних відхилення для відхиленого проміса викликається на наступних проходах циклу подій.</ListItem>
            </List>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".55em"
              source={require("raw!./examples/20-global-rejection-nodejs.example")}
            />
          </Slide>

          <Slide>
            <Text bold>Обробка відхилень у браузерах</Text>
            <Text margin=".5em auto 0" textAlign="left">Об’єкт window має дві події, які відповідають відхиленням у браузер:</Text>
            <List>
              <ListItem>unhandledrejection — публікується коли відхилений проміс необробляється напротязі одного проходу циклу подій;</ListItem>
              <ListItem>rejectionhandled — публікується коли обробних відхилення для відхиленого проміса викликається на наступних проходах циклу подій.</ListItem>
            </List>
            <Text margin=".5em auto 0" textAlign="left">В якості аргументу отримують об’єкт події з полями: type, promise, reason.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".55em"
              source={require("raw!./examples/21-global-rejection-browser.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>Створення встановлених промісів</Heading>
          </Slide>

          <Slide>
            <Text bold>Promise.resolve() та Promise.reject() дозволяють створити встановлений проміс</Text>
            <Text margin=".5em auto 0">Вони можуть приймати примітиви в якості аргумента та огортати їх в проміс.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".75em"
              source={require("raw!./examples/22-settled-primitive.example")}
            />
          </Slide>

          <Slide>
            <Text bold>Promise.resolve() та Promise.reject() можуть приймати промісоподібні у якості аргументів</Text>
            <Text margin=".5em auto 0">Вони можуть перетворювати промісоподібні у справжні проміси.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".75em"
              source={require("raw!./examples/23-settled-thenables.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>Робота з групами промісів</Heading>
          </Slide>

          <Slide>
            <Text bold>Promise.all() очікує на завершення всіх промісів</Text>
            <Text margin=".5em auto 0">Повертає новий проміс, який завершується тоді, коли завершуються всі проміси.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".75em"
              source={require("raw!./examples/24-multiple-all.example")}
            />
          </Slide>

          <Slide>
            <Text bold>Promise.race() влаштовує гонку між промісами</Text>
            <Text margin=".5em auto 0">Повертає новий проміс, який завершується тоді, коли завершуються найшвидший проміс.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".75em"
              source={require("raw!./examples/25-multiple-race.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>Наслідування під промісів</Heading>
          </Slide>

          <Slide>
            <Text bold>Оскільки проміси — об’єкти, ми можемо від них наслідуватись</Text>
            <Text margin=".5em auto 0">Завдяки Symbol.species успадковані методи повертатимуть екземпляр нового класу.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".55em"
              source={require("raw!./examples/26-promise-inheritance.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>Асинхронний запус завдань</Heading>
          </Slide>

          <Slide>
            <Text bold>Проміси та генератори дають можливість писати асинхронний код синхронно</Text>
            <Text margin=".5em auto 0">Проміси забезпечують універсальний опис асинхронних операцій. Можливість ставити генератор «на паузу» дозволяє приховати асинхронну логіку.</Text>
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".55em"
              source={require("raw!./examples/27-async-runner.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".9em"
              source={require("raw!./examples/28-async-runner-usage.example")}
            />
          </Slide>

          <Slide bgColor="secondary">
            <CodePane
              lang="js"
              textSize=".9em"
              source={require("raw!./examples/29-async-await.example")}
            />
          </Slide>

          <Slide>
            <Text bold>Матеріали</Text>
            <List>
              <Appear><ListItem>...</ListItem></Appear>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
