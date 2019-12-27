import React from 'react';
import { Header, PageContent, Button, StatelessCategories } from "./components";
import { QuestionsHooks } from './components/QuestionsHooks.';

const AppRedux = (props) => {
  return (
    <div className={"container", "text-center"}>
      <Header text="Welcome to Trivia Game!" />
      <PageContent>
        <Button onClick={props.onGameStarted} text="Start Game!" />
        <hr />

        {props.categories ? <StatelessCategories
          loading={props.categories.loading}
          categories={props.categories.data}
          onCategorySelected={(id) => props.onCategorySelected(id)} /> : null}

        {props.selectedCategory ? <QuestionsHooks categoryId={props.selectedCategory} /> : null}
      </PageContent>
    </div >
  );
}

export default AppRedux;
