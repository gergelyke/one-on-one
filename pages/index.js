import {styled} from 'baseui';
import {Card} from 'baseui/card';
import {Tag} from 'baseui/tag';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Block } from 'baseui/block';

import questions from '../helpers/questions';

const NUMBER_OF_QUESTIONS_SHOWN = 3;

const shuffledQuestions = questions.sort(() => .5 - Math.random());
const questionsToDisplay = shuffledQuestions.slice(0, NUMBER_OF_QUESTIONS_SHOWN);

const Centered = styled('div', {
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // height: '100%',
  // marginBottom: '10px'
});

export default function Hello() {
  return (
    <React.Fragment>
      <HeaderNavigation>
        <NavigationList align={ALIGN.left}>
          <NavigationItem>1-1 Questions</NavigationItem>
        </NavigationList>
      </HeaderNavigation>
      <Block display="flex" justifyContent="center">
        <Block maxWidth="600px" marginTop="scale600">
          {questionsToDisplay.map((question) =>
            <Block margin="scale200">
              <Card>
                {question.value}
                <Block marginTop="scale300">
                  <Tag closeable={false}>
                    {question.type}
                  </Tag>
                </Block>
              </Card>
            </Block>
          )}
        </Block>
      </Block>
    </React.Fragment>
  );
}
