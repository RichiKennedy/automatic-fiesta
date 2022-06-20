import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";

// COMPONENTS
import GlobalStyle from "./globalStyles";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/skills" component={MySkillsPage} />
          <Route exact path="/work" component={WorkPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
