import Inventory from "../components/Inventory";
import Layout from "../containers/Layout";

export default function Home() {
  return (
    <div>
      <main>
        <Inventory />
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
