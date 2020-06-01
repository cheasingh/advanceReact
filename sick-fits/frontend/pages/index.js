import Items from "../components/Items";

function Home(props) {
  return (
    <div>
      <Items page={parseFloat(props.query.page) || 1} />
    </div>
  );
}

export default Home;
