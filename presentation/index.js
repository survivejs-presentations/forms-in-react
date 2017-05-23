// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  //BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  //Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  //Quote,
  Slide
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  survivejs: require("../images/survivejs.png")
}, (v) => v.replace("/", ""));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Forms in React
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Approaches
          </Heading>
          <List>
            <Appear><ListItem>Handle forms with React alone</ListItem></Appear>
            <Appear><ListItem>Use a schema (e.g. JSON Schema)</ListItem></Appear>
            <Appear><ListItem>Use a solution that integrates with a state manager</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary" fit>
            Handle Forms with React Alone
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Basic Idea
          </Heading>
          <List>
            <Appear><ListItem>Leverage React <code>state</code></ListItem></Appear>
            <Appear><ListItem>Handle validation yourself</ListItem></Appear>
            <Appear><ListItem>Most flexible option</ListItem></Appear>
            <Appear><ListItem>Eventually you will have a small form library</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Write a React form that captures a single input</ListItem></Appear>
            <Appear><ListItem>Show the form state in a separate component (<code>JSON.stringify</code> state)</ListItem></Appear>
            <Appear><ListItem>Validate that the field contains only characters (hint: regex)</ListItem></Appear>
            <Appear><ListItem>Add another field that captures only numbers (hint: input type)*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="http://json-schema.org/" textColor="white">JSON Schema</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <iframe
            width="100%"
            height="600px"
            src="http://json-schema.org/"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="http://json-schema.org/examples.html">Example</Link>
          </Heading>
          <CodePane lang="json">
        {`{
  "title": "Person",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "age": {
      "description": "Age in years",
      "type": "integer",
      "minimum": 0
    }
  },
  "required": ["firstName", "lastName"]
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Define a JSON Schema for the form</ListItem></Appear>
            <Appear><ListItem>Push validation to <Link href="https://www.npmjs.com/package/ajv">ajv</Link> or a similar solution</ListItem></Appear>
            <Appear><ListItem>Try <Link href="https://mozilla-services.github.io/react-jsonschema-form/">react-jsonschema-form</Link>*</ListItem></Appear>
            <Appear><ListItem>Try <Link href="https://github.com/gcanti/tcomb-json-schema">tcomb-json-schema</Link>*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Redux
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            Handling Forms with Redux
          </Heading>
          <List>
            <Appear><ListItem><Link href="https://goshakkk.name/should-i-put-form-state-into-redux/">Should I put form state into Redux?</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://medium.com/@steida/the-boring-react-redux-forms-a15ee8a6b52b">The boring React Redux forms</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/j0nas/light-form">light-form</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <iframe
            width="100%"
            height="600px"
            src="https://redux-form.com/"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Hook up Redux and implement the boring way</ListItem></Appear>
            <Appear><ListItem>Connect <b>light-form</b> and compare*</ListItem></Appear>
            <Appear><ListItem>Connect <b>redux-form</b> and compare*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            MobX
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <iframe
            width="100%"
            height="600px"
            src="https://foxhound87.github.io/mobx-react-form/"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Hook up vanilla MobX</ListItem></Appear>
            <Appear><ListItem>Connect <b>mobx-react-form</b> and compare*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Other Solutions
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Example Solutions
          </Heading>
          <List>
            <Appear><ListItem><Link href="https://github.com/christianalfoni/formsy-react">formsy-react</Link> - Relies on a mixin :(</ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/jquense/react-formal">react-formal</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/gcanti/tcomb-form">tcomb-form</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/xtuc/unmarshaller">unmarshaller</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Figure out the core ideas of each solution</ListItem></Appear>
            <Appear><ListItem>Port the form to one of the solutions*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Conclusion
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Main Ideas
          </Heading>
          <List>
            <Appear><ListItem>You can manage forms with React alone up to a point</ListItem></Appear>
            <Appear><ListItem>Abstraction hides some of the complexity</ListItem></Appear>
            <Appear><ListItem>Problems: managing data, validation, UI layout</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>
              SurviveJS
            </Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
