import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";
import PageStructuredData from "./components/PageStructuredData";
import ElSoto from "./pages/ElSoto";
import ParqueCoimbra from "./pages/ParqueCoimbra";
import Villafontana from "./pages/Villafontana";
import CentroMostoles from "./pages/CentroMostoles";
import Estoril from "./pages/Estoril";
import LosRosales from "./pages/LosRosales";
import LaPrincesa from "./pages/LaPrincesa";
import MostolesSur from "./pages/MostolesSur";
import Pradillo from "./pages/Pradillo";
import ElPinar from "./pages/ElPinar";
import PaqueLoranca from "./pages/PaqueLoranca";
import FuenteDelRey from "./pages/FuenteDelRey";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/contacto" component={Contact} />
      <Route path="/reparacion-persianas-mostoles"><ServicePage kind="reparacion" /></Route>
      <Route path="/instalacion-persianas-mostoles"><ServicePage kind="instalacion" /></Route>
      <Route path="/motorizacion-persianas-mostoles"><ServicePage kind="motorizacion" /></Route>
      <Route path={"/mostoles/el-soto"} component={ElSoto} />
      <Route path={"/mostoles/parque-coimbra"} component={ParqueCoimbra} />
      <Route path={"/mostoles/villafontana"} component={Villafontana} />
      <Route path={"/mostoles/centro"} component={CentroMostoles} />
      <Route path={"/mostoles/estoril"} component={Estoril} />
      <Route path={"/mostoles/los-rosales"} component={LosRosales} />
      <Route path={"/mostoles/la-princesa"} component={LaPrincesa} />
      <Route path={"/mostoles/mostoles-sur"} component={MostolesSur} />
      <Route path={"/mostoles/pradillo"} component={Pradillo} />
      <Route path={"/mostoles/el-pinar"} component={ElPinar} />
      <Route path={"/mostoles/parque-loranca"} component={PaqueLoranca} />
      <Route path={"/mostoles/fuente-del-rey"} component={FuenteDelRey} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <PageStructuredData />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
