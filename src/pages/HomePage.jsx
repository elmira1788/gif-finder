import { HashRouter, Route, Switch } from "react-router-dom";
import GifList from "../components/GifList";
import GifHome from "../components/GifHome";
import NoResult from "../components/NoResult";
import GifEditor from "../components/GifEditor";
import GifMaker from "../components/GifMaker";

export default function HomePage({ user }) {
  
  return (
    <>
      
      <HashRouter>
      <div className="container">
        <Switch>
          <Route path="/search/:term" component={GifList} />
          <Route exact path="/" component={GifHome} />
          <Route component={NoResult} />
        </Switch>
      </div>
    </HashRouter>
    {/* <GifEditor/> */}
    <GifMaker/>
    </>
  )
}