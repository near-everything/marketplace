import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <main className="h-screen">
        <Navbar />
        <div className="flex flex-1 justify-center items-center h-3/4">
          <div className="text-center transition ease-in-out duration-500 hover:text-black px-16">
            <p className="text-sm mt-2">
              this will be a marketplace.
            </p>
            <p className="text-sm mt-2">
              a one-stop shop for all things online.
            </p>
            <p className="text-sm mt-2">
              no more sifting through multiple websites or searching thrift stores.
            </p>
          </div>
        </div>
        {/* <Inventory /> */}
      </main>
    </div>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
