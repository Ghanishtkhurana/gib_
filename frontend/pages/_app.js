import DesktopSidebar from "@/components/Sidebar/DesktopSidebar";
import NxtPro from "@/providers/NxtPro";
import RctQry from "@/providers/RctQry";
import ReduxToolkit from "@/providers/ReduxToolkit";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NxtPro>
      <ReduxToolkit>
        <RctQry>
          <DesktopSidebar>
            <Component {...pageProps} />
          </DesktopSidebar>
        </RctQry>
      </ReduxToolkit>
    </NxtPro>
  );
}
