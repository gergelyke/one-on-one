import {Provider as StyletronProvider} from 'styletron-react'
import {LightTheme, ThemeProvider, styled} from 'baseui';
import {Card, StyledTitle} from 'baseui/card';

import getStyletron from '../helpers/styletron'
import questions from '../helpers/questions';

const NUMBER_OF_QUESTIONS_SHOWN = 3;

const shuffledQuestions = questions.sort(() => .5 - Math.random());
const questionsToDisplay = shuffledQuestions.slice(0, NUMBER_OF_QUESTIONS_SHOWN);

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  marginBottom: '10px'
});

export default function Hello() {
  return (
    <StyletronProvider value={getStyletron()}>
      <ThemeProvider theme={LightTheme}>
        {questionsToDisplay.map((question) =>
          <Centered>
            <Card overrides={{ Body: {style: {width: '400px'}} }}>
              <StyledTitle>{question.type}</StyledTitle>
              {question.value}
            </Card>
          </Centered>
        )}
      </ThemeProvider>
    </StyletronProvider>
  );
}
